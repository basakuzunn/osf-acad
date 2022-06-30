import React, { Component } from 'react'
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

export default class MobileFilters extends Component {
  render() {
    return (
        <div className='Mobilefilters'>
        <Row
          style={{
            marginBottom: '30px',
            width: '1100px',
            marginLeft: '20px',
          }}
          className='filterRow'
        >
         
          <Row> Price
            <DropdownButton
              className='categoryButton'
              variant='outline-secondary'
              title='$00.00 - $100.00'
            ></DropdownButton>
          </Row>
         
          <Row> Brands
            <DropdownButton
              className='categoryButton'
              variant='outline-secondary'
              title='Ukraine sport'
            >
              {' '}
            </DropdownButton>
          </Row>
          
          <Row>Size
            <DropdownButton
              className='categoryButton'
              variant='outline-secondary'
              title='Small'
            ></DropdownButton>
          </Row>
        </Row>
        <Row className='colorDiv'>
         
          <Row style={{marginLeft:'18px'}} > Color
            <button className='color' variant='outline-secondary'></button>
            <button
              className='color'
              style={{ backgroundColor: ' #43c0cf' }}
              variant='outline-secondary'
            ></button>
            <button
              className='color'
              style={{ backgroundColor: ' #3d402f'}}
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
          </Row>
         
          <Row className='sortBy'> Sort by
            <DropdownButton
              className='categoryButton'
              variant='outline-secondary'
              title='Price'
            ></DropdownButton>
          </Row>
          
          <Row style={{marginLeft:'18px'}}>Show
            <DropdownButton
              className='categoryButton'
              variant='outline-secondary'
              title='16 per page'
            ></DropdownButton>
          </Row>
        </Row>
      </div>
    )
  }
}
