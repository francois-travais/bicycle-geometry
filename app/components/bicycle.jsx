import React from 'react';
import { Wheel } from './wheel';
import { Tube } from './tube';
import { computeRearTriangle, computeFrontAxle, computeFrontFrame } from '../bicycleMath';

const centerWeelY = 800

export class Bicycle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const wheelRadius = this.props.wheelDiameter / 2;
    const groundY = centerWeelY + wheelRadius
    const rearAxle = {
      x: wheelRadius,
      y: centerWeelY
    }
    const {bb, seatTubeTop} = computeRearTriangle(
      rearAxle,
      this.props.chainStayLength,
      this.props.bbDrop,
      this.props.seatTubeAngle,
      this.props.seatTubeLength);
    const frontAxle = computeFrontAxle(rearAxle, this.props.wheelbase);
    const {forkCrown, headTubeBottom, headTubeTop} = computeFrontFrame(
      frontAxle,
      this.props.headTubeLength,
      this.props.headTubeAngle,
      this.props.forkLength,
      this.props.forkOffset,
      20);
    return (
      <g className='bicycle'>
        <Wheel
          rimDiameter={this.props.rimDiameter}
          wheelDiameter={this.props.wheelDiameter}
          axle={rearAxle}
          className='rear' />
        <Wheel
          rimDiameter={this.props.rimDiameter}
          wheelDiameter={this.props.wheelDiameter}
          axle={frontAxle}
          className='front' />
        <line x1={0} y1={groundY} x2={2500} y2={groundY} className="ground" />
        <Tube pointA={rearAxle} pointB={bb} className='chainstay' />
        <Tube pointA={bb} pointB={seatTubeTop} className='seattube' />
        <Tube pointA={rearAxle} pointB={seatTubeTop} className='seatstay' />
        <Tube pointA={bb} pointB={headTubeBottom} className='downtube' />
        <Tube pointA={seatTubeTop} pointB={headTubeTop} className='toptube' />
        <Tube pointA={headTubeTop} pointB={headTubeBottom} className='headtube' />
        <Tube pointA={frontAxle} pointB={forkCrown} className='fork' />
      </g>
    )
  }
}

Bicycle.propTypes = {
  rimDiameter: React.PropTypes.number.isRequired,
  wheelDiameter: React.PropTypes.number.isRequired,
  chainStayLength: React.PropTypes.number.isRequired,
  bbDrop: React.PropTypes.number.isRequired,
  seatTubeLength: React.PropTypes.number.isRequired,
  seatTubeAngle: React.PropTypes.number.isRequired,
  wheelbase: React.PropTypes.number.isRequired,
  headTubeLength: React.PropTypes.number.isRequired,
  headTubeAngle: React.PropTypes.number.isRequired,
  forkLength: React.PropTypes.number.isRequired,
  forkOffset: React.PropTypes.number.isRequired
}