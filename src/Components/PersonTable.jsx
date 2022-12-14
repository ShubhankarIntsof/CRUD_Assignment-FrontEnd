import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
function PersonTable() {
  const [data, setData] = useState([]);
  const URL = 'https://localhost:44334/api/Person';
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function handleDetails(e, i) {
    console.log(i);
    navigate('/details/' + i);
  }
  function handleEdit(e, i) {
    console.log(i);
    navigate('/edit/' + i);
  }

  function Delete(i) {
    const request = { method: 'DELETE' };
    fetch(URL + '/' + i, request)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log('Delete Successful');
        fetchData();
      });
  }

  function handleDelete(e, i) {
    console.log('Delete Clicked' + i);

    confirmAlert({
      title: 'Confirm to Delete',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            Delete(i);
          },
        },
        {
          label: 'No',
          onClick: () => {
            //fetchData();
          },
        },
      ],
    });
  }

  function navCreate(e) {
    navigate('/create');
  }
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
      <h3 style={{ marginTop: '20px' }}>Persons</h3>

      <Button
        style={{ marginTop: '15px', marginBottom: '15px' }}
        onClick={(e) => navCreate(e)}
      >
        Create
      </Button>

      <div>
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
                <td>
                  <div>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={(e) => {
                        handleDetails(e, item.id);
                      }}
                    >
                      Details
                    </Button>

                    <> | </>
                    <Button
                      variant="warning"
                      type="submit"
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                    >
                      Edit
                    </Button>

                    <> | </>
                    <Button
                      variant="danger"
                      type="submit"
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PersonTable;
