import '..//App.css';
import React, { Component } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@material-ui/core/Button';
import MyCanvas from './Canvas'

class StateAnnotate extends React.Component {
  constructor(props) {
      super(props);
      let loadedimgs = Object.values(this.importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/)));
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
          clickedNext: false, // used to make sure the canvas post render method only renders once after next image is displayed
      }
  }

  // TODO: make boxes object related (multi object)

  // TODO: Use arrow buttons
  // TODO: add image title to txt
  // TODO: checkboxes to chose format

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

  handleClearLast = e => {
    for (var i = this.state.listofRecs.length - 1; i >= 0; i--) {
      if (this.state.listofRecs[i][0] == this.state.current_img) {
        let filteredArray = this.state.listofRecs.filter(item => item !== this.state.listofRecs[i]);
        this.setState({listofRecs: filteredArray});
        console.log("Removed [" + this.state.listofRecs[i] + "]")
        break;
      }
    }
    this.setState({clickedNext: true})
  }

  handleClearAll = e => {
    let filteredArray = this.state.listofRecs.filter(item => item[0] !== this.state.current_img);
    this.setState({listofRecs: filteredArray});
    this.setState({clickedNext: true})
    console.log("Removed all boxes from image " + this.state.current_img)
  }

  handleFinish = e => {
    let finalData = '';
    for (var i = 0; i < this.state.listofRecs.length; i++) {
      finalData = finalData + this.state.listofRecs[i][0] + ' ' + this.state.listofRecs[i][1] + ' ' + this.state.listofRecs[i][2] + ' ' + this.state.listofRecs[i][3] + ' ' + this.state.listofRecs[i][4] + '\n';
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

    this.setState({clickedNext: true})
  }

  handleBackward = e => {
    if (0 < this.state.current_img){
      this.setState({current_img: this.state.current_img - 1})
      this.setState({canForward: true})
    }
    if (1 == this.state.current_img){
      this.setState({canBackward: false})
    }

    this.setState({clickedNext: true})
  }

  handleMouseOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!this.state.isDown) {
      return;
    }

    this.setState({hasMoved: false})
    this.setState({isDown: false})
    
    this.setState(prevState => ({
        listofRecs: [...prevState.listofRecs, [this.state.current_img, this.state.startX, this.state.startY, this.state.endX, this.state.endY]]
      }))

    console.log('Added: [' + this.state.current_img + ' ' + this.state.startX + ' ' + this.state.startY + ' ' + this.state.endX + ' ' + this.state.endY + '] ')
  }

  handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    this.setState({isDown: false})

    if (!this.state.hasMoved) {
      return;
    }

    this.setState({hasMoved: false})

    this.setState(prevState => ({
        listofRecs: [...prevState.listofRecs, [this.state.current_img, this.state.startX, this.state.startY, this.state.endX, this.state.endY]]
      }))

      console.log('Added: [' + this.state.current_img + ' ' + this.state.startX + ' ' + this.state.startY + ' ' + this.state.endX + ' ' + this.state.endY + '] ')
  }

  handleMouseMove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!this.state.isDown) {
      return;
    }

    this.setState({hasMoved: true})

    var ctx = e.target.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    let vals = e.target.getBoundingClientRect();

    let mouseX = parseInt(e.clientX - vals.left);
    let mouseY = parseInt(e.clientY - vals.top);
    this.setState({endX: mouseX - this.state.startX})
    this.setState({endY: mouseY - this.state.startY})

    ctx.clearRect(0, 0, vals.width, vals.height);

    let r = this.state.listofRecs;
    for (var i = 0; i < this.state.listofRecs.length; i++) {
      if (r[i][0] == this.state.current_img) {
        ctx.strokeRect(r[i][1], r[i][2], r[i][3], r[i][4]);
      }
    }
    ctx.strokeRect(this.state.startX, this.state.startY, this.state.endX, this.state.endY);
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({startX: parseInt(e.clientX - e.target.getBoundingClientRect().left)}); // TODO: auch -1 und -0 wenn ganz am rand vom Fenster
    this.setState({startY: parseInt(e.clientY - e.target.getBoundingClientRect().top)}); // s.o.

    this.setState({isDown: true});
    this.setState({clickedNext: false});
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            <MyCanvas clickednext={this.state.clickedNext ? 1 : undefined} currentimg={this.state.current_img} recs={this.state.listofRecs} canvwidth={this.state.imgDimensions[0]} canvheight={this.state.imgDimensions[1]} width={this.state.imgDimensions[0]} height={this.state.imgDimensions[1]}
              style={{backgroundSize: this.state.imgDimensions[0], backgroundImage: "url(" + this.state.images[this.state.current_img] + ")"}}
              onMouseOut={this.handleMouseOut} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown}/>
            <br/>
            <br/>
            <br/>
          </div>
          <div style={{float: 'left'}}>
            <IconButton disabled={!this.state.canBackward} onClick={this.handleBackward}>
                <ArrowBackIcon/>
            </IconButton>
          </div>
          <div style={{float: 'right'}}>
            <IconButton disabled={!this.state.canForward} onClick={this.handleForward}>
                <ArrowForwardIcon/>
            </IconButton>
          </div>
        </div>
        <button onClick={this.handleClearLast} >Clear last box</button>
        <button onClick={this.handleClearAll} >Clear all boxes</button>
        <br/>
        <br/>
        <br/>
        <Button onClick={this.handleFinish} variant="contained" color="primary" component="span">
          Done
        </Button>
        {/* Following invisible image is needed to load the image dimensions for the canvas */}
        <div style={{display: 'none'}}>
          <img  onLoad={this.handleImgLoad} src={this.state.images[this.state.current_img]} style={{
            borderRadius: 10,
            overflow: "hidden",
            alignItems: "center",
            borderWidth: 1,
          }}/>
        </div>
      </div>
    );
  }
}

export default StateAnnotate;