import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './style.css'
import UncontrolledExample from '../../UI/carousel/Carousel';

export default function GameStore() {
  return (
    <div className='gameStoreWrapper'>
      <Container>
  <Row className='gameStore'>
    <Col lg={8} style={{ height: '60vh' }}>
      <UncontrolledExample />
    </Col>
    <Col lg={4} style={{height: '60vh'}}>
      <Col lg={12} style={{height: '40vh', background: 'white'}} className='insideBig'>
        INSIDE 1
      </Col>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={6} style={{height: '16vh', background: 'grey'}} className='insideSmall1'>
          inside small 1
          </Col>
          <Col sm={5} style={{height: '16vh', background: 'grey'}} className='insideSmall'>
          inside small 2
          </Col>
        </Row>
      </Container>
      
      
    </Col>
  </Row>
  <Row className='gameStore'>
    <Col lg={12} style={{ height: '20vh' }}>
      2 block
    </Col>
    <Col lg={12} style={{ height: '20vh' }}>
      3 block
    </Col>
  </Row>
</Container>
    </div>
  )
}
