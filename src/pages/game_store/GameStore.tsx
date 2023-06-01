import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './style.css';
import MainCarousel from '../../UI/carousel/Carousel';

export default function GameStore() {
  return (
    <div className='gameStoreWrapper'>
      <Container>
        <Row className='gameStore'>
          <Col lg={8}>
            <MainCarousel />
          </Col>
          <Col lg={4}>
            <Col lg={12} style={{ height: '50%', background: 'white' }} className='insideBig'>
              INSIDE 1
            </Col>
            <Container>
              <Row className="justify-content-md-center">
                <Col lg={12} style={{ height: '50%', background: 'grey' }} className='insideSmall1'>
                  inside small 1<p></p>
                  inside small 1<p></p>
                  inside small 1<p></p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className='gameStore'>
          <Col lg={12} style={{ height: '20vh' }}>
            2 block
            <Row className='justify-content-between'>
              <Col lg={3} className='miniWindow'>
              1
              </Col>
              <Col lg={5} className='miniWindow'>
              2
              </Col>
              <Col lg={3} className='miniWindow'>
              3
              </Col>
            </Row>
          </Col>
          <Col lg={12} style={{ height: '20vh' }}>
            3 block
          </Col>
        </Row>
      </Container>
    </div>
  )
}
