import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import layer_3 from './images and icons/Layer_3.png';
import layer_4 from './images and icons/Layer_4.png';
import layer_5 from './images and icons/Layer_5.png';
import sales1 from './images and icons/sales1.jpeg';
import layer_148 from './images and icons/Layer_148.png';
import layer_162 from './images and icons/Layer_162.png';
import delivery from './images and icons/Delivery.png';
import triangular from './images and icons/Triangular.png';
import clipboard from './images and icons/Clipboard.png';
import f from './images and icons/f.png';
import Footer from './Footer.js';
import MobileFooter from './MobileFooter';
import MobileFeaturedProduct from './MobileFeaturedProduct'
import './Home.css';
import { Row, Col, Container, Button, Card, CardGroup } from 'react-bootstrap';
import product from './ProductPage';
import categories from './Categories';
import CookieConsent from 'react-cookie-consent';
import PopularItems from './PopularItems';
import FeaturedProducts from './FeaturedProducts';

export default function Home(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container fluid>
        <Row className='carouselRow'>
          <Col className='home' >
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={false}
              className='homePage-carousel'
            >
              <Carousel.Item interval={100000}>
                <img
                  className='d-block w-100'
                  src={layer_3}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h2 className='firstSlide'>
                    Control and manage any device with cloud solutions
                  </h2>
                  <p className='firstSlide'>
                    Improve business performance and the user experience with
                    the right mix of IoT technology and processes.
                  </p>
                  <Button
                    variant='link'
                    className='firstSlideButton'
                    href='/categories'
                  >
                    View more
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={100000}>
                <img
                  className='d-block w-100'
                  src={layer_4}
                  alt='Second slide'
                />

                <Carousel.Caption>
                  <h3 className='secondSlide'>
                    Control and manage any device with cloud solutions
                  </h3>
                  <p className='secondSlide'>
                    Improve business performance and the user experience with
                    the right mix of IoT technology and processes.
                  </p>
                  <Button
                    variant='link'
                    className='secondSlideButton'
                    href='product'
                  >
                    View More
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={100000}>
                <img
                  className='d-block w-100'
                  src={layer_5}
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3 className='thirdSlide'>
                    Control and manage any device with cloud solutions
                  </h3>
                  <p className='thirdSlide'>
                    Improve business performance and the user experience with
                    the right mix of IoT technology and processes
                  </p>
                  <Button
                    variant='link'
                    className='thirdSlideButton'
                    href='product'
                  >
                    View More
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <img className='saleImg' src={sales1} alt='Third slide' />
            <br />
            <p className='salesContent'>
              Follow us on Facebook
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit
              <br />
              <Button variant='outline-primary' href="http://www.facebook.com/">
                <img className='f' src={f} alt='facebook' />
                <p className='facebookText'>Follow</p>
              </Button>
            </p>
          </Col>
        </Row>
        {/*Popular Items */}
        <PopularItems addToCart = {props.addToCart} addToWishlist = {props.addToWishlist} />
        <div className='mobileImg'>
      <img  src={layer_162} alt='ımg'/></div>
        {/*Banner */}
        <Row className='banner'>
          <Card className='bannerCard'>
            <Card.Img variant='top' src={layer_148} className='bannerImg' />
            <Card.ImgOverlay>
              <Card.Title className='bannerImgTitle'>
                {' '}
                Banner OSF Theme
              </Card.Title>
              <Card.Text className='bannerImgText'>
                Sed ut perspiciatis unde omnis iste natus error sit volup
                <br />
                -tatem accusantlium
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
        {/*Featured Product Slider*/}
        <MobileFeaturedProduct/>
        <FeaturedProducts/>
        <Row className='staticContent'>
          <Col>
            <img className='contentImg' src={delivery} alt='delivery' />
            <h6>FOCUS</h6>
            <p className='contentP'>
              Our unwavering focus on superior service delivery and building
              next generation competencies
            </p>
          </Col>
          <Col>
            <img className='contentImg' src={triangular} alt='triangular' />
            <h6>METHOD</h6>
            <p className='contentP'>
              A standardized methodology designed to deliver measurable business
              results and predictable costs
            </p>
          </Col>
          <Col>
            <img className='contentImg' src={clipboard} alt='clipboard' />
            <h6>KNOWLEDGE</h6>
            <p className='contentP'>
              A highly skilled, proactive workforce that reliably improves each
              client’s ROI while mitigating their business risk
            </p>
          </Col>
        </Row>
        <MobileFooter/>
        <Footer />
      </Container>
      <CookieConsent
        debug={true}
        style={{
          backgroundColor: '#ffffff',
          color: 'black',
          textAlign: 'left',
          borderRadius: '10px',
        }}
        className='cookieConsent'
      >
        <h4 style={{ color: '#84bc22' }}>This website uses cookies </h4>
        <br />
        OSF uses its own and third-party cookies for statical purposes, to know
        your preferences, for website performance <br /> and interaction with
        social media offering publicity tailored to your interests. If you
        continue browsing, we consider that you accept its use. <br />
        You can expand this information consulting our{' '}
        <a href='/cookies' style={{ color: '#84bc22' }}>
          {' '}
          Cookies Policy Page
        </a>
        .
      </CookieConsent>
    </>
  );
}
