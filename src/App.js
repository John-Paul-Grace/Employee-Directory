import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Navbar from "./components/Navbar";
import API from "./utils/API";

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
            <EmployeeCard employee={employeesState[0]}/>
        </div>
    );
}

export default App;
