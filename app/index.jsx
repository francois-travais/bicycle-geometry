import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import { Bicycle } from './components/bicycle'
import { TopBar } from './components/topBar'
import { Grid, Row, Col } from 'react-bootstrap'

export class BicycleGeometry extends React.Component {
  render() {
    return (
      <Grid>
        <Row className='top-bar'>
          <Col xs={12} md={12}>
            <TopBar/>
          </Col>
        </Row>
        <Row className='main'>
          <Col xs={8} md={8}>
            <svg viewBox="0 0 2000 2000" preserveAspectRatio="xMinYMin meet">
              <Bicycle
                rimDiameter={622}
                wheelDiameter={709}
                chainStayLength={450}
                bbDrop={75}
                seatTubeLength={510}
                seatTubeAngle={73}
                wheelbase={1038.9}
                headTubeLength={165}
                headTubeAngle={71.5}
                forkLength={405}
                forkOffset={50}
                />
            </svg>
          </Col>
        </Row>
        <Row className='test'>
          <Col xs={12} md={12}>
            <h1>It Works!</h1>
            <p><a className="btn btn-primary btn-lg">Floriane!</a></p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

render(<BicycleGeometry/>, document.querySelector("#bicycle-geometry"));
