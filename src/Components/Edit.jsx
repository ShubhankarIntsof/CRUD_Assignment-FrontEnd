import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Edit() {
  let { id } = useParams();
  const URL = 'https://localhost:44334/api/Person/';
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [address, setAddress] = useState();
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL + id)
      .then((res) => res.json())

      .then((response) => {
        const r = JSON.stringify(response);
        const res = JSON.parse(r);
        setData(JSON.parse(r));
        console.log('Response ' + data.first_Name);
      });
  };

  function handleEdit(e) {
    console.log('ID ' + id);
    let firstName_, lastName_, Address_;
    if (firstName == null) {
      firstName_ = data.first_Name;
    } else {
      firstName_ = firstName;
    }
    if (lastName == null) {
      lastName_ = data.last_Name;
    } else {
      lastName_ = lastName;
    }
    if (address == null) {
      Address_ = data.last_Name;
    } else {
      Address_ = address;
    }

    if (firstName_ != null && lastName_ != null && Address_ != null) {
      console.log(firstName + ' ' + lastName + ' ' + address);
      e.preventDefault();
      try {
        fetch(URL + id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // first_Name: firstName,
            // last_Name: lastName,
            // address: address,

            first_Name: firstName_,
            last_Name: lastName_,
            address: Address_,
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
    navigate('/');
  }

  return (
    <div>
      <h3>Edit Form</h3>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            defaultValue={data.first_Name}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            defaultValue={data.last_Name}
            onChange={(e) => setlastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="textArea"
            placeholder="Enter Address"
            defaultValue={data.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <div> </div>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleEdit(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
