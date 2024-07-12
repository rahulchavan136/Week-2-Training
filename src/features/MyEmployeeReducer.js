import React, { useReducer, useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const initialState = {
  employees: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== action.payload)
      };
    default:
      return state;
  }
};

const MyEmployeeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleAddEmployee = () => {
    const newEmployee = { id: Date.now(), name, date };
    dispatch({ type: 'ADD_EMPLOYEE', payload: newEmployee });
    setName('');
    setDate('');
  };

  const handleDeleteEmployee = (id) => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Create Employee</h1>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Employee Name"
          /><br />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Joining Date"
          />
        </Form.Group><br />
        <Button variant="primary" onClick={handleAddEmployee}>Add Employee</Button>
      </Form>
      <hr />
      <h3>Employee List</h3>
      <ListGroup>
        {state.employees.map(employee => (
          <ListGroup.Item key={employee.id}>
            <span>{employee.name} - {employee.date}</span>&nbsp; &nbsp; 
            <Button variant="danger" className="ml-2" onClick={() => handleDeleteEmployee(employee.id)}> Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MyEmployeeReducer;
