import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import f1 from './images and icons/facebook.png';
import g from './images and icons/g+.png';
import p from './images and icons/p.png';
import t from './images and icons/t.png';
import './Footer.css';

export default class Library extends Component {
  
  render() {
    return (
      <footer className='footerDisplay'>
        <Row className='footerDisplay'>
          <Col>
            <p className='footerCopyR'>
              © Copyright 2022. All Rights Reserved.
            </p>
            <p className='footerContact'>contact</p>
            <p className='footerAddress'>
              Headquarters:
              <br /> 5600, Blvd. des Galeries, Bur 530
              <br /> Québec, Québec G2K 2H6 <br /> <br />
              <a href='mailto:contact@osf-global.com'>
                contact@osf-global.com{' '}
              </a>{' '}
              <br /> <br />
              <a href='tel:+1 (888) 548-4344'>+1 (888) 548-4344</a>
            </p>
          </Col>
          <Col>
            <p className='footerCategories'>
              Categoriest
              <br /> <br />
              <Button
                variant='light'
                className='footerSubCategories'
              >
                Alcohol
              </Button>
              <Button variant='light' className='footerSubCategories'>
                Art
              </Button>
              <Button variant='light' className='footerSubCategories'>
                Books
              </Button>
              <Button variant='light' className='footerSubCategories'>
                Drink
              </Button>
              <Button variant='light' className='footerSubCategories'>
                Electronics
              </Button>
            </p>
          </Col>
          <Col className='footerCategories'>
            <br />
            <br />
            <Button variant='light' className='footerSubCategories'>
              Home
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Jewelry
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Kids & Baby
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Men's Fashion
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Mobile
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Motorcycles
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Movies
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Music
            </Button>
          </Col>
          <Col className='footerCategories'>
            <br />
            <br />
            <Button variant='light' className='footerSubCategories'>
              Sport
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Toys
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Travel
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Women's Fashion
            </Button>
          </Col>
          <Col>
            <p className='footerCategoriesAbout'> About</p>
            <Button variant='light' className='footerSubCategories'>
              About us
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Delivery
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Testimonials
            </Button>
            <Button variant='light' className='footerSubCategories'>
              Contact
            </Button>
          </Col>
          <Col className='iconCols'>
            <Button variant='light'>
              <img src={f1} alt='facebook' className='facebookIcon' />
            </Button>
          </Col>
          <Col className='iconCols'>
            <Button variant='light'>
              <img src={g} alt='google' />
            </Button>
          </Col>
          <Col className='iconCols'>
            <Button variant='light'>
              <img src={t} alt='twitter' />
            </Button>
          </Col>
          <Col className='iconLastCols'>
            <Button variant='light'>
              <img src={p} alt='pinterest' />
            </Button>
          </Col>
        </Row>
      </footer>
    );
  }
}
