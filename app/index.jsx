import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { Bicycle } from './components/bicycle'
import { TopBar } from './components/topBar'
import { GeometryForm } from './components/geometryForm'
import { computeRearTriangle, computeFrontAxle, computeFrontFrame } from './bicycleMath';

export class BicycleGeometry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bicycle: {
        rimDiameter: 622,
        wheelDiameter: 709,
        chainStayLength: 450,
        bbDrop: 75,
        seatTubeLength: 510,
        seatTubeAngle: 73,
        wheelbase: 1038.9,
        headTubeLength: 165,
        headTubeAngle: 71.5,
        forkLength: 405,
        forkOffset: 50
      }
    };
  }
  computeBikePoints(props) {
    const wheelRadius = props.wheelDiameter / 2;
    const rearAxle = {
      x: wheelRadius,
      y: 0
    }
    const {bb, seatTubeTop} = computeRearTriangle(
      rearAxle,
      props.chainStayLength,
      props.bbDrop,
      props.seatTubeAngle,
      props.seatTubeLength);
    const frontAxle = computeFrontAxle(rearAxle, props.wheelbase);
    const {forkCrown, headTubeBottom, headTubeTop} = computeFrontFrame(
      frontAxle,
      props.headTubeLength,
      props.headTubeAngle,
      props.forkLength,
      props.forkOffset,
      20);
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
  updateBicycle(bicycleProps) {
    this.setState({bicycle: bicycleProps});
  }
  render() {
    const bicycleProps = this.computeBikePoints(this.state.bicycle)
    return (
      <Grid>
        <Row className='top-bar'>
          <Col xs={12} md={12}>
            <TopBar/>
          </Col>
        </Row>
        <Row className='main'>
          <Col xs={6} md={6}>
            <svg viewBox="0 0 2000 2000" preserveAspectRatio="xMinYMin meet">
              <Bicycle
                {...bicycleProps}
              />
            </svg>
          </Col>
          <Col xs={6} md={6}>
            <GeometryForm
              onChange={(props) => this.updateBicycle(props)}
              bicycle={{...this.state.bicycle}}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

render(<BicycleGeometry/>, document.querySelector("#bicycle-geometry"));
