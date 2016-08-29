function degToRad(a) {
	return a * (Math.PI / 180);
}

function computeBB(rearAxle, chainStayLength, bbDrop) {
  return {
    x: rearAxle.x + Math.sqrt(Math.pow(chainStayLength, 2) - Math.pow(bbDrop, 2)),
    y: rearAxle.y + bbDrop
  }
}

function computePoint(origin, length, angle) {
  const angleRad = degToRad(angle);
  return computePointRad(origin, length, angleRad)
}

function computePointRad(origin, length, angleRad) {
  return {
    x: origin.x - length * Math.cos(angleRad),
    y: origin.y - length * Math.sin(angleRad)
  }
}

export function computeRearTriangle(rearAxle, chainStayLength, bbDrop, seatTubeAngle, seatTubeLength) {
  const bb = computeBB(rearAxle, chainStayLength, bbDrop);
  return {
    bb: bb,
    seatTubeTop: computePoint(bb, seatTubeLength, seatTubeAngle)
  }
}

function computeForkAngleRad(headTubeAngleRad, forkOffset, forkLength) {
  return headTubeAngleRad - Math.asin(forkOffset / forkLength);
}

function computeHeadTubeBottom(forkCrown, headsetBottomLength, headTubeAngleRad) {
  if (headsetBottomLength > 0) {
    return computePointRad(forkCrown, headsetBottomLength, headTubeAngleRad);
  } else {
    return forkCrown;
  }
}

export function computeFrontAxle(rearAxle, wheelbase) {
  return {
    x: rearAxle.x + wheelbase,
    y: rearAxle.y
  }
}

export function computeFrontFrame(frontAxle, headTubeLength, headTubeAngle, forkLength, forkOffset, headsetBottomLength) {
  const headTubeAngleRad = degToRad(headTubeAngle);
  const forkAngleRad = computeForkAngleRad(headTubeAngleRad, forkOffset, forkLength);
  const forkCrown = computePointRad(frontAxle, forkLength, forkAngleRad);
  const headTubeBottom = computeHeadTubeBottom(forkCrown, headsetBottomLength, headTubeAngleRad);
  const headTubeTop = computePointRad(headTubeBottom, headTubeLength, headTubeAngleRad);
  return {
    forkCrown: forkCrown,
    headTubeBottom: headTubeBottom,
    headTubeTop: headTubeTop
  };
}