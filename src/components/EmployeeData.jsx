import React from "react";
import user from "../assets/user.png";
import "../index.css";
const EmployeeData = ({ employees }) => {
  return (
    <div className="boxContainer">
      {employees.map((employee) => (
        <div className="box" key={employee.employeeName}>
          <div className="userNameImg">
            <h1 className="employeeName">{employee.employeeName}</h1>
            <img src={user} alt="user" />
          </div>
          <p>
            <b>Position:</b> {employee.position}
          </p>
          <p>
            <b>Department:</b> {employee.department}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeData;
