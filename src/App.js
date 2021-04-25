import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        console.log(employeesState);
    }, [employeesState]);

    return (
        <Navbar />
    );
}

export default App;
