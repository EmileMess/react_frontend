import '..//App.css';
import React, { Component } from "react";

class Draw extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isDown: false,
          startX: 0,
          startY: 0,
          endX: 0,
          endY: 0,
          listofRecs: [],
          labelText: '...',
        }
    }

    handleClick = (e) => {
        
        // Bug mit anzahl?

        // Das hier + input clearen zu arrow rechts in stateAnnotate
        this.setState({listofRecs: []})

        // Das hier zu mouse up
        let text = '';
        for (var i = 0; i < this.state.listofRecs.length; i++) {
            text = text + 'NEW ' + this.state.listofRecs[i][1] + ' ' + this.state.listofRecs[i][2] + ' ' + this.state.listofRecs[i][3] + ' ' + this.state.listofRecs[i][4];
        }
        this.setState({labelText: text})
    }

    handleMouseUp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        this.setState(prevState => ({
            listofRecs: [...prevState.listofRecs, [this.props.currentImgNum, this.state.startX, this.state.startY, this.state.endX, this.state.endY]]
          }))
        console.log(this.state.listofRecs)

        this.state.isDown = false;
    }

    handleMouseMove = (e) => {
        e.preventDefault();
        e.stopPropagation();

        var ctx = e.target.getContext("2d");
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        let vals = e.target.getBoundingClientRect()
    
        if (!this.state.isDown) {
            return;
        }

        let mouseX = parseInt(e.clientX - vals.left);
        let mouseY = parseInt(e.clientY - vals.top);
        this.setState({endX: mouseX - this.state.startX})
        this.setState({endY: mouseY - this.state.startY})
    
        ctx.clearRect(0, 0, vals.width, vals.height);
        ctx.strokeRect(this.state.startX, this.state.startY, this.state.endX, this.state.endY);

        let r = this.state.listofRecs
        for (var i = 0; i < this.state.listofRecs.length; i++) {
            ctx.strokeRect(r[i][1], r[i][2], r[i][3], r[i][4]);
        }
    }

    handleMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({startX: parseInt(e.clientX - e.target.getBoundingClientRect().left)}); // TODO: auch -1 und -0 wenn ganz am rand vom Fenster
        this.setState({startY: parseInt(e.clientY - e.target.getBoundingClientRect().top)}); // s.o.

        this.setState({isDown: true});
        // console.log('handleMouseDown', this.state.isDown, this.state.startX, e.target.getBoundingClientRect().left,  this.state.startY, e.target.getBoundingClientRect().top)
    }

  render() {
    return (
      <div className="App">
        <canvas style={{backgroundSize: this.props.currentImageDim[0], backgroundImage: "url(" + this.props.currentImage + ")"}} width={this.props.currentImageDim[0] } height={this.props.currentImageDim[1] } onMouseOut={this.handleMouseUp} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseDown={this.handleMouseDown} />
        <button onClick={this.handleClick} >Done</button>
        <label>{this.state.labelText}</label>
      </div>
    );
  }
}

export default Draw;

