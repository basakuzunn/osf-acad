import React, { Component } from 'react';
import layer_158 from './images and icons/Layer_158.png';
import layer_159 from './images and icons/Layer_159.png';
import layer_160 from './images and icons/Layer_160.png';
import layer_161 from './images and icons/Layer_161.png';
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  CardGroup,
  Carousel,
} from 'react-bootstrap';

export default class FeaturedProducts extends Component {
  render() {
    return (
      <div className='mobileFeaturedProducts'>
        <Row className='mobileFeaturedProducts'>
          <h1 className='featuredProductTitle'> Featured Products</h1>
          <p className='featuredProductText'>
            Unde omnis iste natus error sit voluptatem
          </p>
        </Row>
        <Row className='featuredProducts'>
          <Carousel id='sampleSlide' className='imgSlider' >
            <Carousel.Item interval={5000}>
              <Col>
                <Card className='sliderCard'>
                  <Card.Img
                    className='sliderFirstImg'
                    variant='top'
                    src={layer_158}
                  />
                  <Card.Body className='sliderCardBody'>
                    <Card.Text>
                      Kristina Dam Oak Table With White Marble
                      <p className='featureCardTextP'> Awesome</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <Col className='sliderFirstCard'>
                <Card className='sliderCard'>
                  <Card.Img
                    className='sliderFirstImg'
                    variant='top'
                    src={layer_159}
                  />
                  <Card.Body className='sliderCardBody'>
                    <Card.Text>
                      Kristina Dam Oak Table With White Marble
                      <p className='featureCardTextP'> Marketing</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <Col className='sliderFirstCard'>
                <Card className='sliderCard'>
                  <Card.Img
                    className='sliderFirstImg'
                    variant='top'
                    src={layer_160}
                  />
                  <Card.Body className='sliderCardBody'>
                    <Card.Text>
                      Kristina Dam Oak Table With White Marble
                      <p className='featureCardTextP'> Awesome</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Col className='sliderFirstCard'>
                <Card className='sliderCard'>
                  <Card.Img
                    className='sliderFirstImg'
                    variant='top'
                    src={layer_161}
                  />
                  <Card.Body className='sliderCardBody'>
                    <Card.Text>Hezy Theme</Card.Text>
                    <p className='featureCardTextP'> Marketing</p>
                  </Card.Body>
                </Card>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    );
  }
}
