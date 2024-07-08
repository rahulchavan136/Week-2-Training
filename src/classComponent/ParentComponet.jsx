import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '',
      textColor: '',
      fontFamily: '',
      fontSize: '',
      styleProps: {}
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  applyStyles = () => {
    const { backgroundColor, textColor, fontFamily, fontSize } = this.state;
    this.setState({
      styleProps: {
        backgroundColor,
        color: textColor,
        fontFamily,
        fontSize
      }
    });
  };
 
  render() {
    return (
      <Container className='mt-5'>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="backgroundColor">
                <Form.Label>Background Color:</Form.Label>
                <Form.Control as="select" name="backgroundColor" onChange={this.handleInputChange}>
                  <option value="">Select</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="textColor">
                <Form.Label>Text Color:</Form.Label>
                <Form.Control as="select" name="textColor" onChange={this.handleInputChange}>
                  <option value="">Select</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="yellow">Yellow</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="fontFamily">
                <Form.Label>Font Family:</Form.Label>
                <Form.Control as="select" name="fontFamily" onChange={this.handleInputChange}>
                  <option value="">Select</option>
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="fontSize">
                <Form.Label>Font Size:</Form.Label>
                <Form.Control as="select" name="fontSize" onChange={this.handleInputChange}>
                  <option value="">Select</option>
                  <option value="14px">14px</option>
                  <option value="18px">18px</option>
                  <option value="24px">24px</option>
                </Form.Control>
              </Form.Group><br />
              <Button variant="danger" onClick={this.applyStyles}>Apply Style</Button>
              <br />
            </Form>
          </Col>
        </Row>
        <Row>
          
          <Col md={12}><br />
          <div style={{border:"1px solid black"}}>
          <br />
            <ChildComponent styleProps={this.state.styleProps} />
            <br />
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ParentComponent;
