import React from 'react';

export class Wheel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tyreHeight = (this.props.wheelDiameter - this.props.rimDiameter) / 2;
    const radius = this.props.wheelDiameter / 2 - tyreHeight / 2;
    return (
      <g className={`wheel ${this.props.styleName || ''}`}>
        <circle cx={this.props.axle.x} cy={this.props.axle.y}
          r={radius} style={{strokeWidth: tyreHeight}} className={`tyre ${this.props.styleName || ''}`}/>
      </g>
    )
  }
}

Wheel.propTypes = {
  styleName: React.PropTypes.string,
  rimDiameter: React.PropTypes.number.isRequired,
  wheelDiameter: React.PropTypes.number.isRequired,
  axle: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number
  }).isRequired
}