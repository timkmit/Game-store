import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './style.css'

export default function GameStore() {
  return (
    <div className='gameStoreWrapper'>
      <Container>
  <Row className='gameStore'>
    <Col lg={12} style={{ height: '60vh' }}>
      1 block
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
