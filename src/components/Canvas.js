import React, { useRef, useEffect } from 'react'

const MyCanvas = props => {
  
  const canvasRef = useRef(null)
  
  const updateCanvas = ctx => {
    if(!props.clickednext) {
        return;
    }

    ctx.clearRect(0, 0, props.canvwidth, props.canvheight);
    
    // TODO: Use the funtion from stateannotate
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    let r = props.recs;
    for (var i = 0; i < r.length; i++) {
      if (r[i][0] == props.currentimg) {
        ctx.strokeRect(r[i][1], r[i][2], r[i][3], r[i][4]);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillRect(r[i][1], r[i][2], r[i][3], r[i][4]);
      }
    }  
  }
  
  // always gets called after render (twice in our case)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    updateCanvas(context)
  }, [updateCanvas])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default MyCanvas