// Import our packages and components
import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import Navbar from "./components/Navbar";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  // This state will store the entire list of employees
  const [employeesState, setEmployeesState] = useState([]);

  // This state will store a list of employees that can be filtered.
  // This is the state that will actually be displayed
  const [filteredEmployeesState, setFilteredEmployeesState] = useState([]);

  // This state is a boolean value keeps track of whether we using ascending or descending order.
  const [sortState, setSortState] = useState(false);

  // This function toggles the sort state.
  const handleSort = (event) => {
    event.preventDefault();

    setSortState(!sortState);
  }

  // This function filters the full list of employees using the value in the search bar
  const filter = (event) => {
    // First, we get the search value as all lower case.
    const search = event.target.value.toLowerCase();

    // Second, we make a filtered array using our full list.
    const filtered = employeesState.filter(employee => {
      // Gets the last name value from the current employee object.
      let lastName = employee.name.last;

      // Gets the first x letters from the last name.
      // x is the length of the search value.
      lastName = lastName.substring(0, search.length);

      // If the first letters of the last name match the search, the employee
      // is added to the array. Otherwise, we move on to the next employee.
      if (lastName.toLowerCase() === search) {
        return employee;
      }
      return null;
    });

    // Third, we set our filteredEmployeesState to the filtered array.
    setFilteredEmployeesState(filtered);
  }

  // This functions runs once when the app starts.
  // It gets a list of random employees and sets them in our states.
  useEffect(() => {
    API.getEmployees()
      .then(res => res.json())
      .then(data => {
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
