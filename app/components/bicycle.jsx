import React from "react";
import {Wheel} from "./wheel";
import {Tube} from "./tube";

export class Bicycle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const centerWeelY = -Math.min(this.props.seatTubeTop.y, this.props.headTubeTop.y);
        const translate = this.props.translate ? {x: this.props.translate.x, y: this.props.translate.y + centerWeelY} :
                {x: 0, y: centerWeelY};
        return (
                <g className={`bicycle ${this.props.styleName || ''}`}
                   transform={`translate(${translate.x} ${translate.y})`}>
                    <Wheel
                            rimDiameter={this.props.rimDiameter}
                            wheelDiameter={this.props.wheelDiameter}
                            axle={this.props.rearAxle}
                            styleName='rear' />
                    <Wheel
                            rimDiameter={this.props.rimDiameter}
                            wheelDiameter={this.props.wheelDiameter}
                            axle={this.props.frontAxle}
                            styleName='front' />
                    <Tube pointA={this.props.rearAxle} pointB={this.props.bb} styleName='chainstay' />
                    <Tube pointA={this.props.bb} pointB={this.props.seatTubeTop} styleName='seattube' />
                    <Tube pointA={this.props.rearAxle} pointB={this.props.seatTubeTop} styleName='seatstay' />
                    <Tube pointA={this.props.bb} pointB={this.props.headTubeBottom} styleName='downtube' />
                    <Tube pointA={this.props.seatTubeTop} pointB={this.props.headTubeTop} styleName='toptube' />
                    <Tube pointA={this.props.headTubeTop} pointB={this.props.headTubeBottom} styleName='headtube' />
                    <Tube pointA={this.props.frontAxle} pointB={this.props.forkCrown} styleName='fork' />
                </g>
        )
    }
}

Bicycle.propTypes = {
    styleName: React.PropTypes.string,
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
    wheelDiameter: React.PropTypes.number.isRequired,
    translate: React.PropTypes.shape({
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired
    })
}