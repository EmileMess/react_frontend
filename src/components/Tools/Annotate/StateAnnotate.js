import React, { Component } from "react";
import axios from 'axios';

import { Dropdown } from 'react-bootstrap';
import { Button, Modal } from "react-bootstrap";

import MyCanvas from './Canvas'
import ModalInput from './Dialog'
import CreatableInputOnly from './Creatable.tsx'


class StateAnnotate extends React.Component {
  constructor(props) {
      super(props);
      window.addEventListener('keydown', e => this.onKeyDown(e));
      this.refDialog = React.createRef();
      this.url = 'https://aigui-backend.azurewebsites.net/api/getImages/';
      this.state = {
          allUserImages: [], // all actual datasets
          images: [], // all actual images
          current_img: 0, // current image index
          canForward: true, // allowed to move to next image?
          imgDimensions: [], // image dimensions tupel: [width, height]
          isDown: false, // is the mouse button down?
          startX: 0, // rectangle start x
          startY: 0, // rectangle start y
          endX: 0, // rectangle width
          endY: 0, // rectangle height
          listofRecs: [], // all rectangles with EACH: [current_img, startX, startY, width, height]
          hasMoved: false, // check if mouse has moved before buttonUp event, so simple clicks wont generate rectangle
          renderCanvas: false, // used to make sure the canvas post render method only renders once after next image is displayed
          checkBoxValue: 'txt', // start vale for output checkbox
          isOpen: false, // defines if the dialog box for object class is open
          currentClass: null, // Class number of the currently created rectangle object
          outFromDialog: false, // true if mouse only left canvas because of dialog popup
          classes: [], // contains all classes defined by user
      }

      this.updateDatasetsDisplay(); // Fill images array
  }

  // TODO: Handy Optimierung: @media (min-width: 481px) and (max-width: 767px) {}
  // TODO: Remove all unnecessary renders
  // TODO: When images are imported from db: load dimensions from image file, not from image component (remove extra component at end of DOM)
  // TODO: Navbar moving on some div changes in StateAnnotate
  // TODO: Favicon + Title
  // TODO: add output formats


  updateDatasetsDisplay () {
    axios.get(this.url, {
        params: {datasetname: "yyy", user: localStorage.getItem('user')},
        withCredentials: true,
        headers: {'content-type': 'multipart/form-data'}
        })
        .then(res => {
            console.log("GET: ", res.data);
            this.setState({allUserImages: res.data}); // Save dataset
            for (const img of res.data) {
                this.setState(previousState => ({images: [...previousState.images, img["image"]]})); // Save images
            }
            console.log("allUserImages: ", this.state.allUserImages);
            console.log("images: ", this.state.images);
        })
        .catch(err => console.log(err))
  }

  setClasses = (allclasses) => {
    const cloneClasses = [...allclasses];
    for (var i = 0; i < cloneClasses.length; i++) {
      cloneClasses[i] = cloneClasses[i]["label"]
    }
    this.setState({classes: cloneClasses})
  }

  openDialog = () => {
    this.setState({outFromDialog: true})
    this.setState({isOpen: true})
  };

  closeDialog = () => {
    this.setState({isOpen: false})
    this.setState({outFromDialog: false})
    this.setState({renderCanvas: true})
  };

  setClassNum (e) {
    this.setState({currentClass: e.target.value});
  };

  handleImgLoad = e => {
    this.setState({imgDimensions: [e.target.width, e.target.height]});
  }

  downloadContent(name, content) {
    var atag = document.createElement("a");
    var file = new Blob([content], {type: 'text/plain'});
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
  }

  handleClearLast = e => {
    for (var i = this.state.listofRecs.length - 1; i >= 0; i--) {
      if (this.state.listofRecs[i][0] == this.state.current_img) {
        let filteredArray = this.state.listofRecs.filter(item => item !== this.state.listofRecs[i]);
        this.setState({listofRecs: filteredArray});
        console.log("Removed [" + this.state.listofRecs[i] + "]")
        break;
      }
    }
    this.setState({renderCanvas: true})
  }

  handleClearAll = e => {
    let filteredArray = this.state.listofRecs.filter(item => item[0] !== this.state.current_img);
    this.setState({listofRecs: filteredArray});
    this.setState({renderCanvas: true})
    console.log("Removed all boxes from image " + this.state.current_img)
  }

  handleFinish = e => {
    let finalData = 'IMAGE_NAME CLASS_NAME X_START Y_START WIDTH HEIGHT\n\n';
    for (var i = 0; i < this.state.listofRecs.length; i++) {
      finalData = finalData + this.state.images[i].split('/').pop() + ' ' + this.state.listofRecs[i][5] + ' ' + this.state.listofRecs[i][1] + ' ' + this.state.listofRecs[i][2] + ' ' + this.state.listofRecs[i][3] + ' ' + this.state.listofRecs[i][4] + '\n';
    }
    console.log("FINAL DATA: " + finalData)
    this.downloadContent('ObjectBoundingBoxes', finalData);
  }

  handleForward = e => {
    if (this.state.images.length-1 > this.state.current_img){
      this.setState({current_img: this.state.current_img + 1})
      this.setState({canBackward: true})
    }
    if (this.state.images.length-2 == this.state.current_img){
      this.setState({canForward: false})
    }

    this.setState({renderCanvas: true})
  }

  handleBackward = e => {
    if (0 < this.state.current_img){
      this.setState({current_img: this.state.current_img - 1})
      this.setState({canForward: true})
    }
    if (1 == this.state.current_img){
      this.setState({canBackward: false})
    }

    this.setState({renderCanvas: true})
  }

  handleMouseOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!this.state.outFromDialog) { // prevent redundant call of dialog when "mouse out" is triggered due to dialog
      if (!this.state.isDown) { // Mouse moves out without click -> just remove crossair
        let vals = e.target.getBoundingClientRect();
        var ctx = e.target.getContext("2d");
        this.redrawRecs(ctx, vals.width, vals.height);
        return
      }

      this.setState({hasMoved: false})
      this.setState({isDown: false})
      this.openDialog()
    }
  }

  addNewObj = (e) =>  {
    if (!(this.state.classes.includes(this.state.currentClass))) {
      this.refDialog.current.setState({passedChecks: false});
      return
    }

    this.setState(prevState => ({
      listofRecs: [...prevState.listofRecs, [this.state.current_img, this.state.startX, this.state.startY, this.state.endX, this.state.endY, this.state.currentClass]]
    }))

    console.log('Added: [' + this.state.current_img + ' ' + this.state.startX + ' ' + this.state.startY + ' ' + this.state.endX + ' ' + this.state.endY + ' ' + this.state.currentClass + '] ')

    this.setState({startX: 0})
    this.setState({startY: 0})
    this.setState({endX: 0})
    this.setState({endY: 0})

    this.closeDialog()
  }

  handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    this.setState({isDown: false})

    if (!this.state.hasMoved) {
      return;
    }

    this.setState({hasMoved: false})
    this.openDialog()
  }

  drawLine(ctx, sX, sY, eX, eY) {
    ctx.strokeStyle = "black";
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(sX, sY);
    ctx.lineTo(eX, eY);
    ctx.stroke();
  }

  // TODO: There is a copy of this code in Canvas.js
  redrawRecs(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);

    let r = this.state.listofRecs;
    for (var i = 0; i < r.length; i++) {
      if (r[i][0] == this.state.current_img) {
        ctx.strokeRect(r[i][1], r[i][2], r[i][3], r[i][4]);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillRect(r[i][1], r[i][2], r[i][3], r[i][4]);
        ctx.beginPath();
        ctx.font = '24px Arial'
        ctx.fillStyle = 'black';
        let x = r[i][1] + 3
        let y = r[i][2] + r[i][4] - 3
        if(r[i][3] < 0) {x = x + r[i][3]}
        if(r[i][4] < 0) {y = y - r[i][4]}
        ctx.fillText(r[i][5], x, y);
        ctx.stroke();
      }
    }  
  }

  handleMouseMove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Get some params
    let vals = e.target.getBoundingClientRect();
    let mouseX = parseInt(e.clientX - vals.left);
    let mouseY = parseInt(e.clientY - vals.top);
    var ctx = e.target.getContext("2d");

    // Draw old recs
    this.redrawRecs(ctx, vals.width, vals.height)

    if (!this.state.isDown) {
      // Draw Dotted Lines
      this.drawLine(ctx, 0, mouseY, this.state.imgDimensions[0], mouseY)
      this.drawLine(ctx, mouseX, 0, mouseX, this.state.imgDimensions[1])
      return;
    }

    this.setState({hasMoved: true})
    this.setState({endX: mouseX - this.state.startX})
    this.setState({endY: mouseY - this.state.startY})

    // Draw current rec
    ctx.strokeRect(this.state.startX, this.state.startY, this.state.endX, this.state.endY);
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({startX: parseInt(e.clientX - e.target.getBoundingClientRect().left)}); // TODO: auch -1 und -0 wenn ganz am rand vom Fenster
    this.setState({startY: parseInt(e.clientY - e.target.getBoundingClientRect().top)}); // s.o.

    this.setState({isDown: true});
    this.setState({renderCanvas: false});
  }

  onKeyDown = (e) => {
    // Check if "Arrow" key was pressed
    if (e.key === "ArrowRight") {
      this.handleForward()
    }
    if (e.key === "ArrowLeft") {
      this.handleBackward()
    }

    if (e.key === " ") {
      this.handleClearLast()
    }
    if (e.key === "r") {
      this.handleClearAll()
    }
  }

  render() {
    return (
      <div className="myCenter">
        {/* <!-- ====== Banner Start ====== --> */}
        <section class="ud-page-banner">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <div class="ud-banner-content">
                    <h1>Annotate</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* <!-- ====== Banner End ====== --> */}
        
        <br/>

        <div className="myCreatableInput">
          <br/>
          <br/>
          <div>
            <CreatableInputOnly setClasses={this.setClasses}></CreatableInputOnly>
          </div>
          <br/>
          <MyCanvas rendercanvas={this.state.renderCanvas ? 1 : undefined} currentimg={this.state.current_img} recs={this.state.listofRecs}
            canvwidth={this.state.imgDimensions[0]} canvheight={this.state.imgDimensions[1]} width={this.state.imgDimensions[0]} height={this.state.imgDimensions[1]}
            style={{backgroundSize: this.state.imgDimensions[0], backgroundImage: "url(" + this.state.images[this.state.current_img] + ")"}}
            onMouseOut={this.handleMouseOut} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown}/>
          <br/>
          <br/>
            <Button variant="outline-dark" disabled={!this.state.canBackward} onClick={this.handleBackward}>
              Previous [&#8592;]
            </Button>
            &nbsp;&nbsp;
            <Button variant="outline-dark" onClick={this.handleClearLast} >Delete last [Space]</Button>
            &nbsp;&nbsp;
            <Button variant="outline-dark" onClick={this.handleClearAll} >Delete all [r]</Button>
            &nbsp;&nbsp;
            <Button variant="outline-dark" disabled={!this.state.canForward} onClick={this.handleForward}>
              Next [&#8594;]
            </Button>
            <br/>
            <br/>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Download Annotations
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.handleFinish}>txt</Dropdown.Item>
                <Dropdown.Item onClick={this.handleFinish}>xml</Dropdown.Item>
                <Dropdown.Item onClick={this.handleFinish}>json</Dropdown.Item>
                <Dropdown.Item onClick={this.handleFinish}>csv</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br/>
            <br/>
            <br/>
        </div>
        {/* Following invisible image is needed to load the image dimensions for the canvas */}
        <div style={{display: 'none'}}>
          <img  onLoad={this.handleImgLoad} src={this.state.images[this.state.current_img]} style={{
            borderRadius: 10,
            overflow: "hidden",
            alignItems: "center",
            borderWidth: 1,
          }}/>
        </div>
        {/* Following code is for the object class dialog box */}
        <div>      
          <Modal onHide={this.closeDialog} show={this.state.isOpen} size="sm" centered>
            <Modal.Body>
              <ModalInput ref={this.refDialog} closedialog={this.closeDialog} addnewobj={this.addNewObj} saveclassnum={(e) => this.setClassNum(e)}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-dark" onClick={this.closeDialog}>
                Close [Esc]
              </Button>
              <Button variant="outline-dark" onClick={this.addNewObj}>
                Done [&crarr;]
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default StateAnnotate;