window.onload=function(){
var svg = d3.select('svg');
var centerWheelY = 1200;

var wheelbaseLength = 1038.9;
var frontWheelDiameter = 622;
var rearWheelDiameter = 622;
var frontTyreHeight = 43.5;
var rearTyreHeight = 43.5;
var chainstayLength = 450;
var bbDrop = 75;
var seatTubeLength = 510;
var seatTubeAngle = 73;
var headTubeAngle = 71.5;
var headTubeLength = 165;
var forkLength = 405;
var forkOffset = 50;
var effectiveTopTubeLength = 550;
var stack = 609.1;
var reach = 363.9;

var wheelStrokeWidth = 10;
var frontWheelRadius = frontWheelDiameter / 2 + frontTyreHeight;
var rearWheelRadius = rearWheelDiameter / 2 + rearTyreHeight;
var rearAxle = {
  x: rearWheelRadius,
  y: centerWheelY
};
var frontAxle = {
  x: rearWheelRadius + wheelbaseLength,
  y: centerWheelY
};
var rearWheel = svg.append('circle')
  .attr({
    r: rearWheelRadius - wheelStrokeWidth,
    cx: rearAxle.x,
    cy: rearAxle.y,
    class: 'wheel rear-wheel',
    "stroke-width": wheelStrokeWidth
  });
var frontWheel = svg.append('circle')
  .attr({
    r: frontWheelRadius - wheelStrokeWidth,
    cx: frontAxle.x,
    cy: frontAxle.y,
    class: 'wheel front-wheel',
    "stroke-width": wheelStrokeWidth
  });

var floorY = centerWheelY + rearWheelRadius;
var floor = svg.append('line')
  .attr({
    x1: 0,
    y1: floorY,
    x2: 3000,
    y2: floorY,
    class: "floor"
  });

var wheelbase = svg.append('line')
  .attr({
    x1: rearAxle.x,
    y1: centerWheelY,
    x2: wheelbaseLength + frontWheelRadius,
    y2: centerWheelY,
    class: "wheelbase"
  });

var bb = {
  x: rearAxle.x + Math.sqrt(Math.pow(chainstayLength, 2) - Math.pow(bbDrop, 2)),
  y: rearAxle.y + bbDrop
};
var chainstay = svg.append('line')
  .attr({
    x1: rearAxle.x,
    y1: rearAxle.y,
    x2: bb.x,
    y2: bb.y,
    class: "tube chainstay"
  });

function degToRad(a) {
	return a * (Math.PI / 180);
}

var seatTubeAngleRad = degToRad(seatTubeAngle);
var seatTube = svg.append('line')
  .attr({
    x1: bb.x,
    y1: bb.y,
    x2: bb.x - seatTubeLength * Math.cos(seatTubeAngleRad),
    y2: bb.y - seatTubeLength * Math.sin(seatTubeAngleRad),
    class: "tube seat-tube"
  });

var seatStayOffset = 50;
var seatPoint = {
  x: bb.x - (seatTubeLength - seatStayOffset) * Math.cos(seatTubeAngleRad),
  y: bb.y - (seatTubeLength - seatStayOffset) * Math.sin(seatTubeAngleRad)
};
var seatStay = svg.append('line')
  .attr({
    x1: rearAxle.x,
    y1: rearAxle.y,
    x2: seatPoint.x,
    y2: seatPoint.y,
    class: "tube seat-stay"
  });

var headTubeAngleRad = degToRad(headTubeAngle);
var forkAngleRad = headTubeAngleRad - Math.asin(forkOffset / forkLength);
var forkCrown = {
	x: frontAxle.x - forkLength * Math.cos(forkAngleRad),
  y: frontAxle.y - forkLength * Math.sin(forkAngleRad)
};
var fork = svg.append('line')
  .attr({
    x1: frontAxle.x,
    y1: frontAxle.y,
    x2: forkCrown.x,
    y2: forkCrown.y,
    class: "fork"
  });

var headsetHeight = 20;
var headsetTop = {
	x: forkCrown.x - headsetHeight * Math.cos(headTubeAngleRad),
  y: forkCrown.y - headsetHeight * Math.sin(headTubeAngleRad)
};
var headset = svg.append('line')
	.attr({
  	x1: forkCrown.x,
    y1: forkCrown.y,
    x2: headsetTop.x,
    y2: headsetTop.y,
    class: "headset"
  });

var headTubeTopPoint = {
	x: headsetTop.x - headTubeLength * Math.cos(headTubeAngleRad),
  y: headsetTop.y - headTubeLength * Math.sin(headTubeAngleRad)
}
var headTube = svg.append('line')
	.attr({
  	x1: headsetTop.x,
    y1: headsetTop.y,
    x2: headTubeTopPoint.x,
    y2: headTubeTopPoint.y,
    class: "tube head-tube"
  });

var downTubeOffset = 30;
var downTubePoint = {
	x: headsetTop.x - downTubeOffset * Math.cos(headTubeAngleRad),
  y: headsetTop.y - downTubeOffset * Math.sin(headTubeAngleRad)
};
var downTube = svg.append('line')
	.attr({
  	x1: bb.x,
    y1: bb.y,
    x2: downTubePoint.x,
    y2: downTubePoint.y,
    class: "tube down-tube"
  });

var topTubeOffset = 30;
var topTubePoint = {
	x: headsetTop.x - (headTubeLength - downTubeOffset) * Math.cos(headTubeAngleRad),
  y: headsetTop.y - (headTubeLength - downTubeOffset) * Math.sin(headTubeAngleRad)
};
var topTube = svg.append('line')
	.attr({
  	x1: seatPoint.x,
    y1: seatPoint.y,
    x2: topTubePoint.x,
    y2: topTubePoint.y,
    class: "tube top-tube"
  });

var stackLine = svg.append('line')
	.attr({
  	x1: bb.x,
    y1: bb.y,
    x2: bb.x,
    y2: headTubeTopPoint.y,
    class: "stack"
  });

var reachLine = svg.append('line')
	.attr({
  	x1: bb.x,
    y1: headTubeTopPoint.y,
    x2: headTubeTopPoint.x,
    y2: headTubeTopPoint.y,
    class: "reach"
  });

}