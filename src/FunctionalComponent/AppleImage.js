import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AppleImage = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const appleimage = process.env.PUBLIC_URL + '/images/apple.png'

  const handleClick = () => {
    setCount(count + 1);

    const newTop = Math.random() * 80 + 10 + '%';
    const newLeft = Math.random() * 80 + 10 + '%';

    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="text-center"><br />
           <h3>Count: {count}</h3>
          <div
            style={{
              position: 'relative',
              width: '400px',
              height: '450px',
              border: '2px solid #000',
              margin: '0 auto',
              overflow: 'hidden'
            }}
          >
            <img
              src={appleimage}
              alt="Apple"
              onClick={handleClick}
              style={{
                height:'120px',
                width:"150px",
                position: 'absolute',
                cursor: 'pointer',
                top: position.top,
                left: position.left,
                transition: 'top 0.5s, left 0.5s'
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppleImage;
