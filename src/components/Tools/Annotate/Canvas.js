import React, { useRef, useEffect } from 'react'


const MyCanvas = props => {
  
  const canvasRef = useRef(null)
  
  const updateCanvas = ctx => {
    if(!props.rendercanvas) {
        return;
    }

    // TODO: Use the funtion from stateannotate
    // props.redrawrecs(ctx, props.canvwidth, props.canvheight);

    ctx.clearRect(0, 0, props.canvwidth, props.canvheight);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);

    let r = props.recs;
    for (var i = 0; i < r.length; i++) {
      if (r[i][0] == props.currentimg) {
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
  
  // always gets called after render
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    updateCanvas(context)
  }, [updateCanvas])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default MyCanvas