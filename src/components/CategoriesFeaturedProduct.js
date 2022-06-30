import React, { Component } from 'react'
import layer_158 from './images and icons/Layer_158.png';
import layer_159 from './images and icons/Layer_159.png';
import layer_160 from './images and icons/Layer_160.png';
import layer_161 from './images and icons/Layer_161.png';
import { Row, Col, Container, Button, Card, CardGroup,Carousel } from 'react-bootstrap';
import './CategoriesFeaturedProduct.css';

export default class CategoriesFeaturedProduct extends Component {
  render() {
    return (
      <div className='featuredProductDisplay'><Row className='featuredProducts'>
      
    </Row>
    <Row className='categoriesfeaturedProducts'>
      <div className='categoriesPopularItems'>
        <div class='featuredLine1'></div>
        <h5 className='CategoriesFeaturedLineTitle'>POPULAR ITEMS</h5>
        <div class='featuredLine2'></div>
      </div>
      <Carousel id='sampleSlide' className='imgSlider' indicators={false}>
        <Carousel.Item interval={5000}>
          <CardGroup className='featuredCardGroup'>
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
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CardGroup className='featuredCardGroup'>
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
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </Row></div>
    )
  }
}
