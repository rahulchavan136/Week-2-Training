import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import useTempConverter from "./useTempConvertor"

const TempConverter = () => {
  const { temperature, unit, setTemperature, setUnit, convertTemperature } = useTempConverter();

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <Container className='text-center mt-5'>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label><strong>Enter Temperature:</strong></Form.Label>
            <Form.Control
              type="number"
              value={temperature}
              onChange={handleTemperatureChange}
            />
          </Form.Group><br />
          <Form.Group>
            <Form.Label><strong>Select Unit:</strong></Form.Label>
            <Form.Control
              as="select"
              value={unit}
              onChange={handleUnitChange}
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
            </Form.Control>
          </Form.Group><br />
          <Form.Group>
            <Form.Label><strong>Converted Temperature:</strong></Form.Label>
            <Form.Control
              type="text"
              value={convertTemperature(temperature, unit)}
              readOnly
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default TempConverter;
