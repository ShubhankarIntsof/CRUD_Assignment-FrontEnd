import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import { Form, Button } from 'react-bootstrap';
function Create(props) {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [address, setAddress] = useState();

  const URL = 'https://localhost:44334/api/Person';

  return (
    <Form>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>
      <div> </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default Create;
