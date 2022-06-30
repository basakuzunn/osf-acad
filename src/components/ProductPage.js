import React, { Component } from 'react';
import './ProductPage.css';
import f1 from './images and icons/facebook.png';
import g from './images and icons/g+.png';
import p from './images and icons/p.png';
import t from './images and icons/t.png';
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
import front from './images and icons/PG.front.jpg';
import back from './images and icons/PG.back.jpg';
import blue_back from './images and icons/PG.Mback.jpg';
import blue_front from './images and icons/PG.mfront.jpg';
import Footer from './Footer.js';
import delivery from './images and icons/Delivery.png';
import triangular from './images and icons/Triangular.png';
import clipboard from './images and icons/Clipboard.png';
import ReadMoreReact from 'read-more-react';
import MobileFooter from './MobileFooter';
import MobileFeturedProduct from './MobileFeaturedProduct'
import FeaturedProducts from './FeaturedProducts';
export default class productPage extends Component {
  state = {
    products: [
      {
        _id: '1',
        title: 'T-shirts',
        src: [front, back, blue_back, blue_front],
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        price: 299.99,
        color: ['#585d61', 'red', 'black'],
        count: 1,
      },
    ],
    index: 0,
  };

  handleTab = (index) => {
    this.setState({ index: index });
  };

  render() {
    const { products, index } = this.state;
    return (
      <div className='productPage'>
        <Breadcrumb className='productPage_breadcrumb'>
          <Breadcrumb.Item>
            <Link to='/' className='productPage_homeLink'>
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/' className='productPage_homeLink'>
              OSF Theme
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className='productPage_title'>
            Ruffle Front V-Neck Cardigan
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className='div_productTitle'>
          <div class='productLine'></div>
          <h5 className='productTitle'>Ruffle Front V-Neck Cardigan</h5>
          <div class='productLine'></div>
        </div>
        <Container className='product'>
          {products.map((item) => (
            <div className='details' key={item._id}>
              <div className='big-img'>
                <img src={item.src[index]} alt='' />
              </div>
              <div className='box'>
                <div className='row'>
                  <span>${item.price}</span>
                </div>
                <div className='colors'>
                  {item.color.map((color) => (
                    <button style={{ background: color }}></button>
                  ))}
                </div>
                <div>
                  <Button>add+-</Button>
                  <Button variant='success' className='cart'>
                    Add to Card
                  </Button>
                </div>
                <ReadMoreReact text={item.description} readMoreText={'READ MORE'} />
                <div className='thumb'>
                  {item.src.map((img, index) => (
                    <img
                      src={img}
                      alt=''
                      key={index}
                      onClick={() => this.handleTab(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Row className='mobileIconCols'>
            <Col>
            <h6 className='productShare'>
            Share</h6></Col>
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
          </Col></Row>
          <Tabs
            defaultActiveKey='profile'
            id='uncontrolled-tab-example'
            className='productTabs'
          >
            <Tab
              eventKey='Description'
              title='Description'
              className='productTabs_tab1'
            >
              <div className='productTabs_tabDiv1'>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. <br />
                <br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
              </div>
              <br />
              <div className='productTabs_tabDiv2'>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu.
              </div>
            </Tab>
            <Tab
              eventKey='Additional'
              title='Additional Information'
              className='productTabs_tab1'
            >
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, <br />
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
              vulputate eget, arcu.
            </Tab>
            <Tab
              eventKey='Reviews'
              title='Reviews (3)'
              className='productTabs_tab1'
            >
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu.
            </Tab>
          </Tabs>
        </Container>
        <FeaturedProducts/>
        <MobileFeturedProduct/>
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
        <Footer />
        <MobileFooter/>
      </div>
    );
  }
}
