import React from "react";
import {Bicycle} from "./bicycle";

export class Bicycles extends React.Component {
    constructor(props) {
        super(props);
    }

    groundX(bicycle) {
        return bicycle.points.frontAxle.x + bicycle.points.wheelDiameter / 2;
    }

    maxY(bicycle) {
        return -Math.min(bicycle.points.seatTubeTop.y, bicycle.points.headTubeTop.y) + bicycle.points.wheelDiameter / 2;
    }

    centerX(bicycle) {
        return bicycle.points.bb.x;
    }

    max(v1, v2) {
        return Math.max(v1, v2);
    }

    render() {
        if (this.props.bicycles.length === 0) {
            return (<g className="no-bicycle"></g>);
        }
        const centerX = this.props.bicycles
                .map(this.centerX)
                .reduce(this.max, -5000);
        const maxY = this.props.bicycles
                .map(this.maxY)
                .reduce(this.max, -5000);
        const groundX = this.props.bicycles
                .map(this.groundX)
                .reduce(this.max, -5000);
        return (
                <g className='aligned-bicycles'>
                    {this.props.bicycles.map((bicycle, index) => {
                                const translate = {
                                    x: centerX - this.centerX(bicycle),
                                    y: maxY - this.maxY(bicycle)
                                };
                                return (
                                        <Bicycle key={bicycle.name} styleName={`bicycle-${index + 1}`} {...bicycle.points}
                                                 translate={translate} />
                                )
                            }
                    )}
                    <line x1={0} y1={maxY} x2={groundX} y2={maxY} className="ground" />
                </g>
        );
    }
}

Bicycles.propTypes = {
    bicycles: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        points: React.PropTypes.shape({
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
        }).isRequired
    })).isRequired
};
