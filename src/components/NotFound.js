import React, { Component } from 'react';
import { Breadcrumb, Row,Col,Button, Container } from 'react-bootstrap';
import './NotFound.css';
import exclamation from './images and icons/Exclamation.png';
import search from './images and icons/Search.png';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';

export default class Company extends Component {
  render() {
    return (
      <div className='NotFoundPage'>
        <Breadcrumb className='NotFound_breadcrumb'>
          <Breadcrumb.Item>
            <Link to='/' className='NotFound_homeLink'>
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className='NotFound_404'>
            404
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className='div_404'>
          <div class='line'></div>
          <h5 className='notFound_404'>404</h5>
          <div class='line'></div>
        </div>
        <Container className='notFound_content'>
          <img alt='' src={exclamation} className='notFound_img' />
          <div className='notFound_h1'>Oops!</div>
          <p className='notFound_title'>
  
            Sorry, this page could not be found!
          </p>
          <p className='notFound_p'>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <div className='notFound_backHome'>
            <Link to='/' className='backHome'>
         
              Go back to Homepage
            </Link>
          </div>
          <h3 className='notFound_search'> Search our site</h3>
          <Button variant='outline-secondary' className='notFound_searchButton'>
       
            <p className='searchText'>SEARCH</p>
            <img alt='search icon' src={search} className='searchIcon'/>
          </Button>
        </Container>
      
      <div className='footerDiv'>
     <Footer/>
      </div></div>
    );
  }
}
