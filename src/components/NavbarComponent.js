import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
  Modal,
  Collapse,
  Row,
  Col,
  Badge,
} from 'react-bootstrap';
import services from './images and icons/services.png';
import search from './images and icons/Search.png';
import profile from './images and icons/Profile.png';
import heart_ from './images and icons/Heart_Outline.png';
import bag from './images and icons/Bag.png';
import eye from './images and icons/Eye.png';
import './NavbarComponent.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Library from './Library';
import Company from './Company';
import ProductPage from './ProductPage';
import { useState, useEffect } from 'react';
import validator from 'validator';
import layer_2 from './images and icons/Layer_2.png';
import Categories from './Categories';
import NotFound from './NotFound';

export default function NavbarComponent(props) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [errorMessage, setErrorMessage] = useState('Validation control');

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage('Valid Password');
    } else {
      setErrorMessage('Not Valid Password');
    }
  };

  return (
    <Router>
      <div className='Navbar d-flex justify-content-center'>
        <Container>
          <Row>
            <Col className='navCol'>
              <Navbar bg='white' expand='lg'>
                <Nav.Link as={Link} to={'/'}>
                  <Navbar.Brand>
                    <Col>
                      <img alt='' src={layer_2} className='Logo' />
                    </Col>
                    <Col>
                      <p className='osfLogo'> OSF</p>
                      <p className='academyLogo'>Academy</p>
                    </Col>
                  </Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>
                    {/*Services */}

                    <>
                      <NavDropdown
                        renderMenuOnMount={true}
                        aria-controls='example-collapse-text'
                        title='SERVICES'
                        menuVariant='dark'
                        style={{
                          padding: '4px',
                          marginBottom: '30px',
                          marginLeft: '30px',
                          height: '60px',
                        }}
                        className='NavTitle'
                      >
                        <Collapse in={open}>
                          <div
                            id='example-collapse-text'
                            className='dropdown-menu-wrapper'
                          >
                            <div>
                              <ul>
                                <li className='dropdown-header'>
                                  <div className='menu-icon-wrapper'>
                                    <div>
                                      <NavDropdown.Item>
                                        <b>Product Categories</b>
                                      </NavDropdown.Item>
                                    </div>
                                  </div>
                                </li>

                                <NavDropdown.Item href='./company'>
                                  Accessories
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Alcohol
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Art
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Books
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Drink
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Electronic
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Flowers & Plants
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Food
                                </NavDropdown.Item>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li className='dropdown-header'>
                                  <div className='menu-icon-wrapper'>
                                    <div>
                                      <NavDropdown.Item>
                                        <br />
                                      </NavDropdown.Item>
                                    </div>
                                  </div>
                                </li>
                                <NavDropdown.Item href='./company'>
                                  Gadgets
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Garden
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Grocery
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Home
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Jewelry
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Kids & Baby
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Men's Fashion
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Mobile
                                </NavDropdown.Item>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li className='dropdown-header'>
                                  <div className='menu-icon-wrapper'>
                                    <div>
                                      <NavDropdown.Item href='./company'>
                                        <br />
                                      </NavDropdown.Item>
                                    </div>
                                  </div>
                                </li>

                                <NavDropdown.Item href='./company'>
                                  Motorcycle
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Movies
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Music
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Office
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Pets
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Romantic
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Sport
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Toys
                                </NavDropdown.Item>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li className='dropdown-header'>
                                  <div className='menu-icon-wrapper'>
                                    <div>
                                      <NavDropdown.Item href='./company'>
                                        <b>Sale</b>
                                      </NavDropdown.Item>
                                    </div>
                                  </div>
                                </li>

                                <NavDropdown.Item href='./company'>
                                  Accessories
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Alcohol
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Art
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Books
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Drink
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Electronics
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Flowers & Plants
                                </NavDropdown.Item>

                                <NavDropdown.Item href='./company'>
                                  Food
                                </NavDropdown.Item>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li className='dropdown-header'>
                                  <div className='menu-icon-wrapper'>
                                    <div>
                                      <NavDropdown.Item href='#'>
                                        <br />
                                      </NavDropdown.Item>
                                    </div>
                                  </div>
                                  <NavDropdown.Item href='./company'>
                                    <img
                                      alt=''
                                      src={services}
                                      className='serviceImg'
                                    />
                                  </NavDropdown.Item>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Collapse>
                      </NavDropdown>
                    </>
                    {/*Services */}
                    <Nav.Link
                      as={Link}
                      to={'/company'}
                      className='NavTitle'
                      style={{ padding: '10px', height: '60px' }}
                    >
                      COMPANY
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={'/library'}
                      className='NavTitle'
                      style={{ padding: '10px', height: '60px' }}
                    >
                      LIBRARY
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={'/contact'}
                      className='NavTitle'
                      style={{ padding: '10px', height: '60px' }}
                    >
                      CONTACT US
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={'/product'}
                      style={{ height: '0px', width: '0px' }}
                      className='nonDisplayable'
                    >
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={'/categories'}
                      style={{ height: '0px', width: '0px' }}
                      className='nonDisplayable'
                    ></Nav.Link>
                    <NavDropdown
                      className='Lang'
                      title='EN'
                      id='basic-nav-dropdown'
                      disabled
                    ></NavDropdown>
                    <NavDropdown
                      className='Lang'
                      title='$US'
                      id='basic-nav-dropdown'
                      disabled
                    ></NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col className='iconCol'>
              <div className='icons'>
                <img alt='' src={search} style={{ marginRight: '10px' }} />
                {/*Login Pop-up */}
                <Button variant='white' onClick={handleShow}>
                  <img
                    className='signIn'
                    alt=''
                    src={profile}
                    style={{ marginRight: '10px' }}
                  />
                </Button>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' autoFocus />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlTextarea1'
                      ></Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type={passwordShown ? 'text' : 'password'}
                          onChange={(e) => validate(e.target.value)}
                        />
                        {errorMessage === '' ? null : (
                          <span
                            style={{
                              color: '#84bc22 ',
                              fontSize: '15px',
                            }}
                          >
                            {errorMessage}
                          </span>
                        )}
                        <img
                          className='passwordImg'
                          alt='passwordHideAndShow'
                          src={eye}
                          onClick={togglePassword}
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicCheckbox'
                      ></Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                      LOGIN
                    </Button>
                  </Modal.Footer>
                  <p className='modalText'> I don't have an account</p>
                </Modal>
                {/*Login Pop-up */}
                <img alt='' src={heart_} style={{ marginRight: '10px' }} />
                <Badge
                  bg='light'
                  style={{
                    color: '#84bc22',
                    border: '2px solid #84bc22',
                    borderRadius: '50px',
                    width: '5px',
                    height: '18px',
                    marginLeft: '-20px',
                  }}
                >
                {props.wishlistCount}
                </Badge>
                <img alt='' src={bag} style={{ marginLeft: '10px' }} />
                <Badge
                  bg='light'
                  style={{
                    color: '#84bc22',
                    border: '2px solid #84bc22',
                    borderRadius: '50px',
                    width: '5px',
                    height: '18px',
                    marginLeft: '-10px',
                  }}
                >
                {props.cartCount}
                </Badge>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Routes>
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/product' element={<ProductPage addToCart = {props.addToCart} deleteFromCart = {props.deleteFromCart}/>}/>
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/library' element={<Library />} />
          <Route exact path='/' element={<Home addToCart = {props.addToCart} addToWishlist = {props.addToWishlist}/>} />
        </Routes>
      </div>
    </Router>
  );
}
