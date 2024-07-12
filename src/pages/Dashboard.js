import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Dashboard = ({ handleLogout }) => {
  return (
    <Container className="mt-5">
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <Button variant="secondary" onClick={() => handleLogout(false)}>
        Back to Login
      </Button>
    </Container>
  );
};

export default Dashboard;
