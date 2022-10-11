import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import PersonTable from './Components/PersonTable';
import { Container } from 'react-bootstrap';
import Create from './Components/Create';
import Edit from './Components/Edit';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <React.StrictMode>
        <Container>
          <h3>Welcome</h3>
          <Link to="/create">
            <Button>Create</Button>
          </Link>

          <Routes>
            <Route path="/edit/:id" element={<Edit />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/" element={<PersonTable />} />
          </Routes>
        </Container>
      </React.StrictMode>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
