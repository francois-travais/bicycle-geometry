import React from "react";
import {Table, Button} from "react-bootstrap";

export class MeasurementsTable extends React.Component {
    constructor(props) {
        super(props);
        this.forkConfiguration = [
            {
                prop: 'wheelbase',
                unit: 'mm',
                title: 'Wheelbase'
            }, {
                prop: 'forkLength',
                unit: 'mm',
                title: 'Fork length'
            }, {
                prop: 'forkOffset',
                unit: 'mm',
                title: 'Fork offset'
            }, {
                prop: 'headsetBottomHeight',
                unit: 'mm',
                title: 'Headset bottom height'
            }];
        this.frameConfiguration = [
            {
                prop: 'seatTubeLength',
                unit: 'mm',
                title: 'Seat tube length'
            }, {
                prop: 'seatTubeAngle',
                unit: '°',
                title: 'Seat tube angle'
            }, {
                prop: 'headTubeAngle',
                unit: '°',
                title: 'Headtube angle'
            }, {
                prop: 'headTubeLength',
                unit: 'mm',
                title: 'Headtube length'
            }, {
                prop: 'chainStayLength',
                unit: 'mm',
                title: 'Chainstay length'
            }, {
                prop: 'bbDrop',
                unit: 'mm',
                title: 'Bottom bracket drop'
            }];
        this.wheelConfiguration = [
            {
                prop: 'rimDiameter',
                unit: 'mm',
                title: 'Rim diameter'
            }, {
                prop: 'wheelDiameter',
                unit: 'mm',
                title: 'Wheel diameter'
            }];
        this.computedConfiguration = [
            {
                prop: 'wheelbase',
                unit: 'mm',
                title: 'Wheelbase'
            }, {
                prop: 'centerFront',
                unit: 'mm',
                title: 'Center-Front'
            }, {
                prop: 'reach',
                unit: 'mm',
                title: 'Reach'
            }, {
                prop: 'stack',
                unit: 'mm',
                title: 'Stack'
            }, {
                prop: 'forkTrail',
                unit: 'mm',
                title: 'Trail'
            }, {
                prop: 'wheelFlop',
                unit: 'mm',
                title: 'Wheel flop'
            }, {
                prop: 'totalLength',
                unit: 'mm',
                title: 'Bike length'
            }, {
                prop: 'bbHeight',
                unit: 'mm',
                title: 'BB height'
            }];
        this.unselect = this.unselect.bind(this);
        this.drawRow = this.drawRow.bind(this);
        this.drawComputedRow = this.drawComputedRow.bind(this);
        this.subtlt = this.subtlt.bind(this);
    }

    drawRow(el) {
        return (
                <tr key={el.title}>
                    <td>{el.title} ({el.unit})</td>
                    {this.props.bicycles.map((bicycle) => (<td key={bicycle.name}>{bicycle.measures[el.prop]}</td>))}
                </tr>);
    }

    drawComputedRow(el) {
        return (
                <tr key={el.title}>
                    <td>{el.title} ({el.unit})</td>
                    {this.props.bicycles.map((bicycle) => (
                            <td key={bicycle.name}>{Math.round(bicycle.computed[el.prop])}{el.prop in bicycle.measures ?
                                    ` (${Math.round(bicycle.computed[el.prop] - bicycle.measures[el.prop])})` :
                                    ''}</td>))}
                </tr>);
    }

    unselect(name) {
        this.props.unselect(name);
    }

    subtlt(name) {
        return (<tr>
            <td colSpan={this.props.bicycles.length + 1} className="table-subtlt">{name}</td>
        </tr>);
    }

    render() {
        return (
                <Table striped bordered hover className="measurementsTable">
                    <thead>
                    <tr>
                        <th></th>
                        {this.props.bicycles.map((bicycle, index) => (<th key={bicycle.name}
                                                                          className={`bicycle-${index +
                                                                          1}`}>{bicycle.brand} {bicycle.model} {bicycle.size}
                            <Button bsSize="xsmall" onClick={() => this.unselect(bicycle.name)}>X</Button></th>))}
                    </tr>
                    </thead>
                    <tbody>
                    {this.subtlt('Computed')}
                    {this.computedConfiguration.map(this.drawComputedRow)}
                    {this.subtlt('Frame')}
                    {this.frameConfiguration.map(this.drawRow)}
                    {this.subtlt('Fork')}
                    {this.forkConfiguration.map(this.drawRow)}
                    {this.subtlt('Wheel')}
                    {this.wheelConfiguration.map(this.drawRow)}
                    </tbody>
                </Table>
        );
    }
}

MeasurementsTable.propTypes = {
    bicycles: React.PropTypes.arrayOf(React.PropTypes.shape({
        model: React.PropTypes.string.isRequired,
        brand: React.PropTypes.string.isRequired,
        size: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        measures: React.PropTypes.shape({
            rimDiameter: React.PropTypes.number.isRequired,
            wheelDiameter: React.PropTypes.number.isRequired,
            chainStayLength: React.PropTypes.number.isRequired,
            bbDrop: React.PropTypes.number.isRequired,
            bbHeight: React.PropTypes.number,
            seatTubeLength: React.PropTypes.number.isRequired,
            seatTubeAngle: React.PropTypes.number.isRequired,
            wheelbase: React.PropTypes.number.isRequired,
            headTubeLength: React.PropTypes.number.isRequired,
            headTubeAngle: React.PropTypes.number.isRequired,
            forkLength: React.PropTypes.number.isRequired,
            forkOffset: React.PropTypes.number.isRequired
        }).isRequired,
        computed: React.PropTypes.shape({
            wheelbase: React.PropTypes.number.isRequired,
            stack: React.PropTypes.number.isRequired,
            reach: React.PropTypes.number.isRequired,
            centerFront: React.PropTypes.number.isRequired,
            forkTrail: React.PropTypes.number.isRequired,
            totalLength: React.PropTypes.number.isRequired,
            bbHeight: React.PropTypes.number.isRequired,
            wheelFlop: React.PropTypes.number.isRequired
        }).isRequired
    })).isRequired,
    unselect: React.PropTypes.func.isRequired
};
