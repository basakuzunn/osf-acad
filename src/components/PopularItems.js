import React, { useState } from 'react';
import { Row, Col, Button, Card, CardGroup } from 'react-bootstrap';
import heart from './images and icons/heart1.png';
import plus from './images and icons/plus1.png';
import cardBackground from './images and icons/cardBackground.png'
import cardIcon from './images and icons/cardIcon.png'
import data from './data.';
import ProductPage from './ProductPage';
import { Link } from 'react-router-dom';
import './ProductItems.css'

export default function PopularItems() {
  function dubArr(arr) {
    const arrCopy = [...arr];
    return arrCopy.concat(arr);
  }

  const [numOfElement, setnumOfElement] = useState(7);
  const [slice, setSlice] = useState(data.cardData.slice(0, numOfElement));

  const loadMore = () => {
    setnumOfElement(numOfElement);
    const tempArr = dubArr(slice);
    setSlice(tempArr);
  };

  return (
    <div className='popularItem-mobile'>
      <Row>
        <div className='popularItems'>
          <div class='line'></div>
          <h5 className='itemsTitle'>Popular Items</h5>
          <div class='line'></div>
        </div>
      </Row>
      <Row className='itemsImg'>
        <CardGroup className='cardImgs'>
          {slice.map((item, index) => {
            return (
              <Col>
                <Card className='firstImg' key={index}>
                  <Card.Img variant='top' src={item.img} />
                  {item.hover ? (
                    <div class='overlay'>
                      <div class='text'>
                        <img className='plus' src={plus} alt='ellipse' />

                        <img className='heart' src={heart} alt='ellipse' />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                  <Card.Body>
                    <Card.Text>
                      {item.title}
                      <br /> {item.isButton ? '' : <br />}
                      {item.desc}
                    </Card.Text>
                    {item.isButton ? (
                      <Button variant='outline-dark' as={Link} to={'/product'}>
                        $659.55| BUY NOW
                      </Button>
                    ) : (
                      ''
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

          <Col>
            <Card className='lastImg'>
              <Card.Img variant='top' src={cardBackground}/>
              <Card.ImgOverlay>
                <Card.Text className='lastImgP'>
                  My dragons are <br /> misbehaving again. Unbelieveable!
                  
                </Card.Text>
                <Card.Text className='lastImgP'><img alt='' src={cardIcon}/> 5H AGO</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </CardGroup>
      </Row>
      <Row className='itemsImg'>
        <Col>
          <Button onClick={() => loadMore()} variant='outline-secondary'>
            LOAD MORE
          </Button>
        </Col>
      </Row>
    </div>
  );
}
