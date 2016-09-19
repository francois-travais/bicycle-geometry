import React from 'react';
import { Wheel } from './wheel';
import { Tube } from './tube';

export class Bicycle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const centerWeelY = -Math.min(this.props.seatTubeTop.y, this.props.headTubeTop.y);
    const wheelRadius = this.props.wheelDiameter / 2;
    const ground = {
      x: this.props.frontAxle.x + wheelRadius,
      y: wheelRadius
    }
    return (
      <g className='bicycle' transform={'translate(0 ' + centerWeelY+')'}>
        <Wheel
          rimDiameter={this.props.rimDiameter}
          wheelDiameter={this.props.wheelDiameter}
          axle={this.props.rearAxle}
          className='rear' />
        <Wheel
          rimDiameter={this.props.rimDiameter}
          wheelDiameter={this.props.wheelDiameter}
          axle={this.props.frontAxle}
          className='front' />
        <line x1={0} y1={ground.y} x2={ground.x} y2={ground.y} className="ground" />
        <Tube pointA={this.props.rearAxle} pointB={this.props.bb} className='chainstay' />
        <Tube pointA={this.props.bb} pointB={this.props.seatTubeTop} className='seattube' />
        <Tube pointA={this.props.rearAxle} pointB={this.props.seatTubeTop} className='seatstay' />
        <Tube pointA={this.props.bb} pointB={this.props.headTubeBottom} className='downtube' />
        <Tube pointA={this.props.seatTubeTop} pointB={this.props.headTubeTop} className='toptube' />
        <Tube pointA={this.props.headTubeTop} pointB={this.props.headTubeBottom} className='headtube' />
        <Tube pointA={this.props.frontAxle} pointB={this.props.forkCrown} className='fork' />
      </g>
    )
  }
}

Bicycle.propTypes = {
  rearAxle: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  frontAxle: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  bb: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  seatTubeTop: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  forkCrown: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  headTubeBottom: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  headTubeTop: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  rimDiameter: React.PropTypes.number.isRequired,
  wheelDiameter: React.PropTypes.number.isRequired
}