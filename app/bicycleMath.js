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

function computeHeadTubeBottom(forkCrown, headsetBottomHeight, headTubeAngleRad) {
  if (headsetBottomHeight > 0) {
    return computePointRad(forkCrown, headsetBottomHeight, headTubeAngleRad);
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

export function computeFrontFrame(frontAxle, headTubeLength, headTubeAngle, forkLength, forkOffset, headsetBottomHeight) {
  const headTubeAngleRad = degToRad(headTubeAngle);
  const forkAngleRad = computeForkAngleRad(headTubeAngleRad, forkOffset, forkLength);
  const forkCrown = computePointRad(frontAxle, forkLength, forkAngleRad);
  const headTubeBottom = computeHeadTubeBottom(forkCrown, headsetBottomHeight, headTubeAngleRad);
  const headTubeTop = computePointRad(headTubeBottom, headTubeLength, headTubeAngleRad);
  return {
    forkCrown: forkCrown,
    headTubeBottom: headTubeBottom,
    headTubeTop: headTubeTop
  };
}

export function computeWheelbase(frontAxle, rearAxle) {
  return frontAxle.x - rearAxle.x;
}

export function computeCenterFront(bb, frontAxle) {
  return frontAxle.x - bb.x;
}

export function computeReach(bb, headTubeTop) {
  return headTubeTop.x - bb.x;
}

export function computeStack(bb, headTubeTop) {
  return -(headTubeTop.y - bb.y);
}

function computeTrailRad(headTubeAngleRad, forkOffset, wheelRadius) {
  return (wheelRadius * Math.cos(headTubeAngleRad) - forkOffset) / Math.sin(headTubeAngleRad);
}

export function computeTrail(headTubeAngle, forkOffset, wheelDiameter) {
  return computeTrailRad(degToRad(headTubeAngle), forkOffset, wheelDiameter / 2);
}

export function computeTotalLength(frontAxleX, wheelDiameter) {
  return frontAxleX + wheelDiameter / 2;
}

export function computeBBHeight(bbY, wheelDiameter) {
  return wheelDiameter / 2 - bbY;
}