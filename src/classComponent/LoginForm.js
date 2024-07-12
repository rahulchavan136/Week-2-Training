import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === 'admin' && password === 'password') {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  };

  render() {
    return (
      <Container className="mt-5">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter password"
            />
          </Form.Group>

          <Button className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <LoginResult isLoggedIn={this.state.isLoggedIn} />
      </Container>
    );
  }
}

const LoginResult = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn ? (
      <div className="alert alert-success mt-3">Login Successful!</div>
    ) : (
      <div className="alert alert-danger mt-3">Login Failed!</div>
    )}
  </div>
);

export default LoginForm;
