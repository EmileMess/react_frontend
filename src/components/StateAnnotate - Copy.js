import '..//App.css';
import React, { Component } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@material-ui/core/Button';

class StateAnnotate extends React.Component {
  constructor(props) {
      super(props);
      this.refCanvas = React.createRef();
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
          labelText: '', // label text for boundaries
          hasMoved: false, // check if mouse has moved before buttonUp event, so simple clicks wont generate rectangle
      }
  }

  // TODO: Use arrow buttons + space for delete last (should do button for now)
  // TODO: show previously marked
  // TODO: clear all
  // TODO: make boxes object related (multi object)
  // TODO: add image title to txt

  // *** TODO Change when backend is ready
  importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
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

    //this.updateCanvas();
    this.setState({labelText: ''})
  }

  updateCanvas = e => {
    console.log("update canvas")

    var ctx = this.refCanvas.current.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;

    ctx.strokeRect(100, 100, 100 ,100);
    let r = this.state.listofRecs;
    for (var i = 0; i < this.state.listofRecs.length; i++) {
      if (r[i][0] == this.state.current_img) {
        ctx.strokeRect(r[i][1], r[i][2], r[i][3], r[i][4]);
      }
    }
  }

  handleBackward = e => {
    if (0 < this.state.current_img){
      this.setState({current_img: this.state.current_img - 1})
      this.setState({canForward: true})
    }
    if (1 == this.state.current_img){
      this.setState({canBackward: false})
    }

    this.setState({labelText: ''})
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

    let text = 'Added: [' + this.state.current_img + ' ' + this.state.startX + ' ' + this.state.startY + ' ' + this.state.endX + ' ' + this.state.endY + '] ';
    this.setState({labelText: this.state.labelText + text})
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

    let text = 'Added: [ ' + this.state.current_img + ' ' + this.state.startX + ' ' + this.state.startY + ' ' + this.state.endX + ' ' + this.state.endY + '] ';
    this.setState({labelText: this.state.labelText + text})
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
}

  render() {
    return (
      <div className="App">
        <div>
          <canvas ref={this.refCanvas} style={{backgroundSize: this.state.imgDimensions[0], backgroundImage: "url(" + this.state.images[this.state.current_img] + ")"}}
            width={this.state.imgDimensions[0]} height={this.state.imgDimensions[1]} onMouseOut={this.handleMouseOut}
            onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown} />
          <br/>
          <br/>
          <label>{this.state.labelText}</label>
          <br/>
          <br/>
        </div>
        <div style={{display: 'none'}}>
          <img  onLoad={this.handleImgLoad} src={this.state.images[this.state.current_img]} style={{
            borderRadius: 10,
            overflow: "hidden",
            alignItems: "center",
            borderWidth: 1,
          }}/>
        </div>
        <IconButton disabled={!this.state.canBackward} onClick={this.handleBackward}>
            <ArrowBackIcon/>
        </IconButton>
        <IconButton disabled={!this.state.canForward} onClick={this.handleForward}>
            <ArrowForwardIcon/>
        </IconButton>
        <br/>
        <br/>
        <br/>
        <Button onClick={this.handleFinish} variant="contained" color="primary" component="span">
          Done
        </Button>
      </div>
    );
  }
}

export default StateAnnotate;