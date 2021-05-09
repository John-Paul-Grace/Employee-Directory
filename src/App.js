import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import Navbar from "./components/Navbar";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employeesState, setEmployeesState] = useState([]);
  const [filteredEmployeesState, setFilteredEmployeesState] = useState([]);
  const [sortState, setSortState] = useState(false);

  const handleSort = (event) => {
    event.preventDefault();
    setSortState(!sortState);
  }

  const filter = (event) => {
    const search = event.target.value.toLowerCase();

    const filtered = employeesState.filter(employee => {
      let lastName = employee.name.last;

      lastName = lastName.substring(0, search.length);

      if (lastName.toLowerCase() === search) {
        return employee;
      }

      return null;
    });

    setFilteredEmployeesState(filtered);
  }

  useEffect(() => {
    API.getEmployees()
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setEmployeesState(data.results);
        setFilteredEmployeesState(data.results);
      });
  }, []);

  return (
    <div>
      <Navbar
        ascending={sortState}
        sortHandler={handleSort}
        searchHandler={filter}
      />
      <Container>
        <Row ascending={sortState}>
          {filteredEmployeesState.map(employee => {
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
