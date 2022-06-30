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
                href='./company'
              >
                Alcohol
              </Button>
              <Button variant='light' className='footerSubCategories' href='./company'>
                Art
              </Button>
              <Button variant='light' className='footerSubCategories' href='./company'>
                Books
              </Button>
              <Button variant='light' className='footerSubCategories' href='./company'>
                Drink
              </Button>
              <Button variant='light' className='footerSubCategories' href='./company'>
                Electronics
              </Button>
            </p>
          </Col>
          <Col className='footerCategories'>
            <br />
            <br />
            <Button variant='light' className='footerSubCategories' href='./company'>
              Home
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Jewelry
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Kids & Baby
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Men's Fashion
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Mobile
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Motorcycles
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Movies
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Music
            </Button>
          </Col>
          <Col className='footerCategories'>
            <br />
            <br />
            <Button variant='light' className='footerSubCategories' href='./company'>
              Sport
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Toys
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Travel
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Women's Fashion
            </Button>
          </Col>
          <Col>
            <p className='footerCategoriesAbout'> About</p>
            <Button variant='light' className='footerSubCategories' href='./company'>
              About us
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Delivery
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Testimonials
            </Button>
            <Button variant='light' className='footerSubCategories' href='./company'>
              Contact
            </Button>
          </Col>
          <Col className='iconCols'>
            <Button variant='light' href="http://www.facebook.com/">
              <img src={f1} alt='facebook' className='facebookIcon'   />
            </Button>
          </Col>
          <Col className='iconCols'>
            <Button variant='light'  href="http://www.google.com/">
              <img src={g} alt='google' />
            </Button>
          </Col>
          <Col className='iconCols'>
            <Button variant='light'  href="http://www.twitter.com/">
              <img src={t} alt='twitter' />
            </Button>
          </Col>
          <Col className='iconLastCols'  >
            <Button variant='light' href="http://www.pinterest.com/">
              <img src={p} alt='pinterest' />
            </Button>
          </Col>
        </Row>
      </footer>
    );
  }
}
