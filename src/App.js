import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Navbar from "./components/Navbar";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";

function App() {
    const [employeesState, setEmployeesState] = useState([]);

    useEffect(() => {
        API.getEmployees()
            .then(res => res.json())
            .then(data => {
                 setEmployeesState(data.results);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    {employeesState.map(employee => {
                        return (
                            <Col>
                                <EmployeeCard employee={employee} key={employee.email} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default App;
