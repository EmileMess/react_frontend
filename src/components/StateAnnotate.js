import '..//App.css';
import React, { Component } from "react";
import MyCanvas from './Canvas'
import MyDialog from './Dialog'
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class StateAnnotate extends React.Component {
  constructor(props) {
      super(props);
      let loadedimgs = Object.values(this.importAll(require.context('../images/Data', false, /\.(png|jpe?g|svg)$/)));
      this.state = {
          images: loadedimgs, // all actual images
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
      }
  }

  // TODO: make boxes object related (multi object)
  // TODO: On MouseOut: set rec size to max border
  // TODO: balken auf title page schön machen
  // TODO: coole sachen roboflow
  // TODO: Use arrow buttons
  // TODO: add image title to txt
  // TODO: checkboxes to chose format
  // TODO: Dialog box direct writing in text + only numbers allowed (check for object) + make input mandatory

  openDialog = () => {
    this.setState({isOpen: true})
  };

  closeDialog = () => {
    this.setState({isOpen: false})
  };

  setClassNum (e) {
    this.setState({currentClass: e.target.value});
  };

  // *** TODO Change when backend is ready
  importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {images[item.replace('./', '')] = r(item); });
    return images
  };
  // *** TODO Change when backend is ready

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

  checkChanged () {
    console.log("check changed")
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
    let finalData = '';
    for (var i = 0; i < this.state.listofRecs.length; i++) {
      finalData = finalData + this.state.listofRecs[i][0] + ' ' + this.state.listofRecs[i][1] + ' ' + this.state.listofRecs[i][2] + ' ' + this.state.listofRecs[i][3] + ' ' + this.state.listofRecs[i][4] + ' ' + this.state.listofRecs[i][5] + '\n';
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
    
    if (!this.state.isDown) {
      return;
    }

    this.setState({hasMoved: false})
    this.setState({isDown: false})
    this.openDialog()
  }

  addNewObj = (e) =>  {
    this.closeDialog()

    this.setState(prevState => ({
      listofRecs: [...prevState.listofRecs, [this.state.current_img, this.state.startX, this.state.startY, this.state.endX, this.state.endY, this.state.currentClass]]
    }))

    console.log('Added: [' + this.state.current_img + ' ' + this.state.startX + ' ' + this.state.startY + ' ' + this.state.endX + ' ' + this.state.endY + ' ' + this.state.currentClass + '] ')

    this.setState({startX: 0})
    this.setState({startY: 0})
    this.setState({endX: 0})
    this.setState({endY: 0})

    this.setState({renderCanvas: true})
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

  redrawRecs(ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);

    let r = this.state.listofRecs;
    for (var i = 0; i < r.length; i++) {
      if (r[i][0] == this.state.current_img) {
        ctx.strokeRect(r[i][1], r[i][2], r[i][3], r[i][4]);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillRect(r[i][1], r[i][2], r[i][3], r[i][4]);
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
    ctx.clearRect(0, 0, vals.width, vals.height);
    this.redrawRecs(ctx)

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

  render() {
    return (
      <div className="App">
        <div>
          <br/>
          <br/>
          <div>
            <MyCanvas clickednext={this.state.renderCanvas ? 1 : undefined} currentimg={this.state.current_img} recs={this.state.listofRecs}
              canvwidth={this.state.imgDimensions[0]} canvheight={this.state.imgDimensions[1]} width={this.state.imgDimensions[0]} height={this.state.imgDimensions[1]}
              style={{backgroundSize: this.state.imgDimensions[0], backgroundImage: "url(" + this.state.images[this.state.current_img] + ")"}}
              onMouseOut={this.handleMouseOut} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown}/>
          </div>
          <br/>
          <br/>
          <br/>
            <Button variant="outline-dark" disabled={!this.state.canBackward} onClick={this.handleBackward}>
              &#8592;
            </Button>
            &nbsp;&nbsp;
            <Button variant="outline-dark" onClick={this.handleClearLast} >Clear last box</Button>
            &nbsp;&nbsp;
            <Button variant="outline-dark" onClick={this.handleClearAll} >Clear all boxes</Button>
            &nbsp;&nbsp;
            <Button variant="outline-dark" disabled={!this.state.canForward} onClick={this.handleForward}>
              &#8594;
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
          <MyDialog
            show={this.state.isOpen}
            onHide={() => this.closeDialog()}
            toadd={() => this.addNewObj()}
            saveclassnum={(e) => this.setClassNum(e)}
          />
        </div>
      </div>
    );
  }
}

export default StateAnnotate;