import React, { useState } from 'react';
import { Row, Col, Button, Card, CardGroup } from 'react-bootstrap';
import heart from './images and icons/heart1.png';
import plus from './images and icons/plus1.png';
import data from './productData';

export default function PopularItems() {
  function dubArr(arr) {
    const arrCopy = [...arr];
    return arrCopy.concat(arr);
  }

  const [numOfElement, setnumOfElement] = useState(16);
  const [slice, setSlice] = useState(data.cardData.slice(0, numOfElement));

  const loadMore = () => {
    setnumOfElement(numOfElement);
    const tempArr = dubArr(slice);
    setSlice(tempArr);
  };

  return (
    <div className='lg-productItems'>
      <Row className='ProductItemsImg'>
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
                      <Button variant='outline-dark'>$659.55| BUY NOW</Button>
                    ) : (
                      ''
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </CardGroup>
      </Row>
      <Row className='ProductItemsImg'>
        <Col>
          <Button onClick={() => loadMore()}>LOAD MORE</Button>
        </Col>
      </Row>
    </div>
  );
}
