import React, { useState } from "react";
import "../index.css";

const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({
    employeeName: "",
    position: "",
    department: "",
  });
  const handleName = (event) => {
    setEmployee({ ...employee, employeeName: event.target.value });
  };
  const handlePosition = (event) => {
    setEmployee({ ...employee, position: event.target.value });
  };
  const handleDepartment = (event) => {
    setEmployee({ ...employee, department: event.target.value });
  };

  const addEmployee = (event) => {
    event.preventDefault();
    if (
      !employee.employeeName.trim().length == 0 &&
      !employee.position.trim().length == 0 &&
      !employee.department.trim().length == 0
    ) {
      props.addWorker(employee);
    } else {
      window.confirm("You should fill all the fields in the form!");
    }
    setEmployee({ employeeName: "", position: "", department: "" });
  };
  return (
    <section className="formDiv">
      <form onSubmit={addEmployee}>
        <input
          type="text"
          placeholder="Name..."
          onChange={handleName}
          value={employee.employeeName}
        />
        <input
          type="text"
          placeholder="Position..."
          onChange={handlePosition}
          value={employee.position}
        />
        <input
          type="text"
          placeholder="Department..."
          onChange={handleDepartment}
          value={employee.department}
        />
        <button type="submit">Add Employee</button>
      </form>

      <p>Total Employees - {props.employees.length}</p>
      <p>You can add employees by filling the form above!</p>
    </section>
  );
};

export default EmployeeForm;
