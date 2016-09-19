import React from 'react';
import { FormControl, FormGroup, ControlLabel, Col, Panel } from 'react-bootstrap';

export class GeometryForm extends React.Component {
  constructor(props) {
    super(props);
    this.forkFormConfiguration = [
      {
        prop: 'wheelbase',
        placeholder: 'in mm',
        title: 'Wheelbase'
      },
      {
        prop: 'forkLength',
        placeholder: 'in mm',
        title: 'Fork length'
      },
      {
        prop: 'forkOffset',
        placeholder: 'in mm',
        title: 'Fork offset'
      }
    ];
    this.frameFormConfiguration = [
      {
        prop: 'seatTubeLength',
        placeholder: 'in mm',
        title: 'Seat tube length'
      },
      {
        prop: 'seatTubeAngle',
        placeholder: 'in degrees',
        title: 'Seat tube angle'
      },
      {
        prop: 'headTubeAngle',
        placeholder: 'in degrees',
        title: 'Headtube angle'
      },
      {
        prop: 'headTubeLength',
        placeholder: 'in mm',
        title: 'Headtube length'
      },
      {
        prop: 'chainStayLength',
        placeholder: 'in mm',
        title: 'Chainstay length'
      },
      {
        prop: 'bbDrop',
        placeholder: 'in mm',
        title: 'Bottom bracket drop'
      }
    ];
    this.wheelFormConfiguration = [
      {
        prop: 'rimDiameter',
        placeholder: 'in mm',
        title: 'Rim diameter'
      },
      {
        prop: 'wheelDiameter',
        placeholder: 'in mm',
        title: 'Wheel diameter'
      }
    ];
    this.generateFormElements = this.generateFormElements.bind(this);
  }
  generateFormElements(el) {
    return (
      <FormGroup key={el.prop} controlId={el.prop}>
        <ControlLabel>{el.title}</ControlLabel>
        <FormControl
          type="text"
          onChange={(e) => this.onChange(el.prop, e)}
          placeholder={el.placeholder}
          value={this.props.bicycle[el.prop]} />
      </FormGroup>
    );
  }
  onChange(prop, e) {
    const value = parseFloat(e.target.value);
    let returnObj = Object.assign({}, this.props.bicycle)
    returnObj[prop] = value;
    this.props.onChange(returnObj);
  }
  render() {
    return (
      <form>
        <Col xs={6} md={6}>
          <Panel header="Frame">
            {this.frameFormConfiguration.map(this.generateFormElements)}
          </Panel>
        </Col>
        <Col xs={6} md={6}>
          <Panel header="Wheel">
            {this.wheelFormConfiguration.map(this.generateFormElements)}
          </Panel>
          <Panel header="Fork">
            {this.forkFormConfiguration.map(this.generateFormElements)}
          </Panel>
        </Col>
      </form>
    )
  }
}

GeometryForm.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  bicycle: React.PropTypes.shape({
    rimDiameter: React.PropTypes.number,
    wheelDiameter: React.PropTypes.number,
    chainStayLength: React.PropTypes.number,
    bbDrop: React.PropTypes.number,
    seatTubeLength: React.PropTypes.number,
    seatTubeAngle: React.PropTypes.number,
    wheelbase: React.PropTypes.number,
    headTubeLength: React.PropTypes.number,
    headTubeAngle: React.PropTypes.number,
    forkLength: React.PropTypes.number,
    forkOffset: React.PropTypes.number,
    onChange: React.PropTypes.func
  })
}