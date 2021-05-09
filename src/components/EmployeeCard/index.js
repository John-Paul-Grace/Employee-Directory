import React from "react";
import "./style.css";

function EmployeeCard({ employee }) {
  return (
    <div className="card width-18 border-primary">
      <div className="centered">
        <img src={employee.picture.large} className="card-img-top width-90per mt-2" alt="..." />
      </div>
      
      <div className="card-body bg-grey mx-2 mb-2 mt-1">
        <h5 className="card-title font-weight-bold">{employee.name.last}, {employee.name.first}</h5>

        <div className="card-title subTitleStyle">Email: <span className="textStyle">{employee.email}</span></div>

        <div className="card-title subTitleStyle">Phone: <span className="textStyle">{employee.cell}</span></div>

        <div className="card-title subTitleStyle">
          Location: <span className="textStyle">{employee.location.city}, {employee.location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
