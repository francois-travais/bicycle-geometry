import React from 'react';

export class Wheel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <g className='wheel ${this.props.styleName}'>
        <circle cx={this.props.axle.x} cy={this.props.axle.y}
          r={this.props.wheelDiameter / 2} className="tyre ${this.props.styleName}"/>
        <circle cx={this.props.axle.x} cy={this.props.axle.y}
          r={this.props.rimDiameter / 2} className="rim ${this.props.styleName}"/>
      </g>
    )
  }
}

Wheel.propTypes = {
  rimDiameter: React.PropTypes.number.isRequired,
  wheelDiameter: React.PropTypes.number.isRequired,
  axle: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number
  }).isRequired
}