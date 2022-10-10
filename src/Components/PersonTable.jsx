import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
function PersonTable() {
  const [data, setData] = useState([]);
  const URL = 'https://localhost:44334/api/Person';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        const r = JSON.stringify(response);
        setData(JSON.parse(r));
        console.log('Response ' + r);
      });
  };

  return (
    <>
      <h3>Persons</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> </th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{i}</td>
              <td>{item.id}</td>
              <td>{item.first_Name}</td>
              <td>{item.last_Name}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default PersonTable;
