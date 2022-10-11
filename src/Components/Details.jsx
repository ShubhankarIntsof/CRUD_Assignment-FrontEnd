import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Details() {
  let { id } = useParams();
  const URL = 'https://localhost:44334/api/Person/';
  const [data, setData] = useState('');

  const navigate = useNavigate();

  function navTable(e) {
    navigate('/');
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL + id)
      .then((res) => res.json())

      .then((response) => {
        const r = JSON.stringify(response);
        setData(JSON.parse(r));
        console.log('Response ' + data.first_Name);
      });
  };
  return (
    <div style={{ margin: '10px' }}>
      <h3>Details</h3>
      <Card style={{ marginTop: '45px' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>First Name</h5>
            {data.first_Name}
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Last Name</h5>
            {data.last_Name}
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Address</h5>
            {data.address}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Button
        style={{ marginTop: '25px' }}
        onClick={(e) => navTable(e)}
      >
        Back
      </Button>
    </div>
  );
}
export default Details;
