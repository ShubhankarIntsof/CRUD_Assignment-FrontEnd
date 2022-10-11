import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const URL = 'https://localhost:44334/api/Person';

  function handleCreate(e) {
    if (firstName != null && lastName != null && address != null) {
      console.log(firstName + ' ' + lastName + ' ' + address);
      e.preventDefault();
      try {
        const res = fetch(URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            first_Name: firstName,
            last_Name: lastName,
            address: address,
          }),
        });
      } catch (err) {
        console.log('ERRR' + err);
        confirmAlert({
          title: 'Error',
          message: 'Something went Wrong',
          buttons: [
            {
              label: 'OK',
              onClick: () => {},
            },
          ],
        });
      }
      navigate('/');
    } else {
      alert('Please fill all details');
    }
  }

  return (
    <div>
      <h3>Create</h3>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setlastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="textArea"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <div> </div>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleCreate(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Create;
