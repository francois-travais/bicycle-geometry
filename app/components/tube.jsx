import React from 'react';

export class Tube extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <line
        x1={this.props.pointA.x} y1={this.props.pointA.y}
        x2={this.props.pointB.x} y2={this.props.pointB.y}
        className={'tube '+this.props.styleName} />
    )
  }
}

Tube.propTypes = {
  pointA: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired,
  pointB: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }).isRequired
}