import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './style.css'

export default function GameStore() {
  return (
    <div className='gameStoreWrapper'>
      <Container>
        <Row className='gameStore'>
          <Col lg={3} style={{ height: '90vh' }}>
            1 block
          </Col>
          <Col lg={8} style={{ height: '20vh' }}>
            2 block
          </Col>
        </Row>
      </Container>
    
 

    </div>
  )
}
