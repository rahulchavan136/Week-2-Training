import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './AppleBasket.css'; 

class AppleBasket extends Component {
  state = {
    applesLeft: 3,
    applesRight: 7,
    images: [
        process.env.PUBLIC_URL + '/images/image1.jpg',
        process.env.PUBLIC_URL + '/images/image2.jpg',
        process.env.PUBLIC_URL + '/images/image3.jpg',
        process.env.PUBLIC_URL + '/images/image4.jpg',
        process.env.PUBLIC_URL + '/images/image5.webp',
        process.env.PUBLIC_URL + '/images/image6.webp',
        process.env.PUBLIC_URL + '/images/image7.jpg',
        process.env.PUBLIC_URL + '/images/image8.jpg',
        process.env.PUBLIC_URL + '/images/image9.jpg',
        process.env.PUBLIC_URL + '/images/image10.jpg'
      ],
    currentImageIndex: 0
  };

  handleArrowClick = (direction) => {
    this.setState(prevState => {
      let newCurrentImageIndex = prevState.currentImageIndex;
      let newApplesLeft = prevState.applesLeft;
      let newApplesRight = prevState.applesRight;

      if (direction === 'left') {
        if (prevState.currentImageIndex > 0) {
          newCurrentImageIndex = prevState.currentImageIndex - 1;
        }
        if (newApplesRight > 0) {
          newApplesLeft += 1;
          newApplesRight -= 1;
        }
      } else if (direction === 'right') {
        if (prevState.currentImageIndex < prevState.images.length - 1) {
          newCurrentImageIndex = prevState.currentImageIndex + 1;
        }
        if (newApplesLeft > 0) {
          newApplesLeft -= 1;
          newApplesRight += 1;
        }
      }

      return {
        currentImageIndex: newCurrentImageIndex,
        applesLeft: newApplesLeft,
        applesRight: newApplesRight
      };
    });
  };

  render() {
    const { applesLeft, applesRight, images, currentImageIndex } = this.state;

    return (
      <Container className="apple-basket text-center">
        <Row className="align-items-center">
          <Col xs={3}>
            <div>
              <span className="apple-counter">{applesLeft}</span> apple
            </div>
          </Col>
          <Col xs={6}>
            <Button variant="secondary" onClick={() => this.handleArrowClick('left')}>←</Button>
            <Image src={images[currentImageIndex]} fluid className="mx-3 apple-image" />
            <Button variant="secondary" onClick={() => this.handleArrowClick('right')}>→</Button>
          </Col>
          <Col xs={3}>
            <div>
              <span className="apple-counter">{applesRight}</span> apple
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={6}>
            <div className="basket-name">basket1</div>
          </Col>
          <Col xs={6}>
            <div className="basket-name">basket2</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AppleBasket;
