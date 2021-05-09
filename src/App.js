import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import Navbar from "./components/Navbar";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employeesState, setEmployeesState] = useState([]);
  const [sortState, setSortState] = useState(false);

  const handleSort = (event) => {
    event.preventDefault();
    setSortState(!sortState);
  }

  useEffect(() => {
    API.getEmployees()
      .then(res => res.json())
      .then(data => {
        setEmployeesState(data.results);
      });
  }, []);

  return (
    <div>
      <Navbar ascending={sortState} handler={handleSort}/>
      <Container>
        <Row ascending={sortState}>
          {employeesState.map(employee => {
            return (
              <Col key={employee.name.last}>
                <EmployeeCard employee={employee} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
