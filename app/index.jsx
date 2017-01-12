import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {
  render
}
from 'react-dom'
import {
  Grid,
  Row,
  Col,
  Button
}
from 'react-bootstrap'
import {
  Bicycles
}
from './components/bicycles'
import {
  TopBar
}
from './components/topBar'
import {
  MeasurementsTable
}
from './components/measurementsTable'
import {
  computeRearTriangle,
  computeFrontAxle,
  computeFrontFrame,
  computeCenterFront,
  computeReach,
  computeStack,
  computeWheelbase,
  computeTrail,
  computeTotalLength,
  computeBBHeight
}
from './bicycleMath';
import bicycles from './bicycles';

export class BicycleGeometry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycles: bicycles,
      selectedBicycles: [],
      tmpSelected: bicycles[0].name
    };
    this.selectBicycle = this.selectBicycle.bind(this);
    this.unSelectBicycle = this.unSelectBicycle.bind(this);
    this.selectTmp = this.selectTmp.bind(this);
    this.addToSelection = this.addToSelection.bind(this);
  }
  computeBikePoints(props) {
    const wheelRadius = props.wheelDiameter / 2;
    const rearAxle = {
      x: wheelRadius,
      y: 0
    }
    const {
      bb,
      seatTubeTop
    } = computeRearTriangle(
      rearAxle,
      props.chainStayLength,
      props.bbDrop,
      props.seatTubeAngle,
      props.seatTubeLength);
    const frontAxle = computeFrontAxle(rearAxle, props.wheelbase);
    const {
      forkCrown,
      headTubeBottom,
      headTubeTop
    } = computeFrontFrame(
      frontAxle,
      props.headTubeLength,
      props.headTubeAngle,
      props.forkLength,
      props.forkOffset,
      props.headsetBottomHeight ? props.headsetBottomHeight : 0);
    return {
      rimDiameter: props.rimDiameter,
      wheelDiameter: props.wheelDiameter,
      rearAxle: rearAxle,
      frontAxle: frontAxle,
      bb: bb,
      seatTubeTop: seatTubeTop,
      forkCrown: forkCrown,
      headTubeBottom: headTubeBottom,
      headTubeTop: headTubeTop
    }
  }
  getComputed(points, props) {
    return {
      wheelbase: computeWheelbase(points.frontAxle, points.rearAxle),
      centerFront: computeCenterFront(points.bb, points.frontAxle),
      stack: computeStack(points.bb, points.headTubeTop),
      reach: computeReach(points.bb, points.headTubeTop),
      forkTrail: computeTrail(props.headTubeAngle, props.forkOffset, props.wheelDiameter),
      totalLength: computeTotalLength(points.frontAxle.x, props.wheelDiameter),
      bbHeight: computeBBHeight(points.bb.y, props.wheelDiameter)
    }
  }
  selectTmp(event) {
    this.setState({tmpSelected: event.target.value});
  }
  addToSelection() {
    const name = this.state.tmpSelected;
    this.selectBicycle(name);
  }
  selectBicycle(name) {
    console.debug('Selecting ', name);
    const candidates = this.state.bicycles.filter(b => b.name === name);
    if (candidates.length !== 1) {
      console.warn('Cannot find', name, 'in the list of available bicycles');
      return;
    }
    const bicycle = candidates[0];
    if (this.state.selectedBicycles.filter(b => b.name === bicycle.name).length !== 0) {
      console.warn("bicycle already selected");
      return;
    }
    bicycle.points = this.computeBikePoints(bicycle.measures);
    bicycle.computed = this.getComputed(bicycle.points, bicycle.measures);
    this.setState({
      selectedBicycles: this.state.selectedBicycles.concat([bicycle])
    });
  }
  unSelectBicycle(name) {
    console.debug("Unselecting ", name);
    const selectedBicycles = this.state.selectedBicycles.filter(b => b.name !== name);
    this.setState({
      selectedBicycles: selectedBicycles
    });
  }
  /*updateBicycle(bicycleProps) {
    this.setState({
      bicycle: bicycleProps
    });
  }*/
  render() {
    const options = this.state.bicycles.map(bicycle => (
      <option key={bicycle.name} value={bicycle.name}>{bicycle.brand} {bicycle.model} {bicycle.size}</option>
    ));
    return (
      <Grid>
        <Row className='top-bar'>
          <Col xs={12} md={12}>
            <TopBar/>
          </Col>
        </Row>
        <Row className='controls'>
          <Col xs={6} md={6} >
            <select value={this.state.tmpSelected} onChange={this.selectTmp}>
              {options}
            </select>
            <Button onClick={this.addToSelection}>Add</Button>
          </Col>
        </Row>
        <Row className='drawing'>
          <Col xs={6} xsOffset={3} md={6} mdOffset={3}>
            <svg viewBox="0 0 2000 1000" preserveAspectRatio="xMinYMin meet">
              <Bicycles bicycles={this.state.selectedBicycles} />
            </svg>
          </Col>
        </Row>
        <Row className='tables'>
          <Col xs={12} md={12}>
            <MeasurementsTable unselect={this.unSelectBicycle} bicycles={this.state.selectedBicycles}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

render(<BicycleGeometry/>, document.querySelector("#bicycle-geometry"));
