import React, { Component } from 'react';
import {
  Breadcrumb,
  Row,
  Col,
  Button,
  Container,
  Tab,
  Tabs,
  DropdownButton,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css';
import FeaturedProducts from './FeaturedProducts';
import ProductItems from './ProductItems';
import Footer from './Footer';
import MobileProductItems from './MobileProductItems';
import MobileFooter from './MobileFooter'
export default class Categories extends Component {
  render() {
    return (
      <div className='categoriesPage'>
        <Breadcrumb className='productPage_breadcrumb'>
          <Breadcrumb.Item>
            <Link to='/' className='productPage_homeLink'>
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className='productPage_title'>
            Category Landing
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className='filters'>
          <Row
            style={{
              marginBottom: '30px',
              width: '1100px',
              marginLeft: '20px',
            }}
            className='filterRow'
          >
            Price
            <Col>
              <DropdownButton
                className='categoryButton'
                variant='outline-secondary'
                title='$00.00 - $100.00'
              ></DropdownButton>
            </Col>
            Brands
            <Col>
              <DropdownButton
                className='categoryButton'
                variant='outline-secondary'
                title='Ukraine sport'
              >
                {' '}
              </DropdownButton>
            </Col>
            Size
            <Col>
              <DropdownButton
                className='categoryButton'
                variant='outline-secondary'
                title='Small'
              ></DropdownButton>
            </Col>
          </Row>
          <Row className='colorDiv'>
            Color
            <Col>
              <button className='color' variant='outline-secondary'></button>
              <button
                className='color'
                style={{ backgroundColor: ' #43c0cf' }}
                variant='outline-secondary'
              ></button>
              <button
                className='color'
                style={{ backgroundColor: ' #3d402f' }}
                variant='outline-secondary'
              ></button>
              <button
                className='color'
                style={{ backgroundColor: ' #4aaf00' }}
                variant='outline-secondary'
              ></button>
              <button
                className='color'
                style={{ backgroundColor: ' #315bbd' }}
                variant='outline-secondary'
              ></button>
              <button
                className='color'
                style={{ backgroundColor: ' #ec6115' }}
                variant='outline-secondary'
              ></button>
              <button
                className='color'
                style={{ backgroundColor: ' #dc041d' }}
                variant='outline-secondary'
              ></button>
              <button
                className='color'
                style={{ backgroundColor: ' #efead7' }}
                variant='outline-secondary'
              ></button>
            </Col>
            Sort by
            <Col className='sortBy'>
              <DropdownButton
                className='categoryButton'
                variant='outline-secondary'
                title='Price'
              ></DropdownButton>
            </Col>
            Show
            <Col>
              <DropdownButton
                className='categoryButton'
                variant='outline-secondary'
                title='16 per page'
              ></DropdownButton>
            </Col>
          </Row>
        </div>
        <div>
          {' '}
          <br />
          12,931 results in apparel
        </div>
        <div>
          <MobileProductItems />
          <ProductItems />
        </div>
        <div>
          <FeaturedProducts />
        </div>
        <div>
          <MobileFooter/>
          <Footer />
        </div>
      </div>
    );
  }
}
