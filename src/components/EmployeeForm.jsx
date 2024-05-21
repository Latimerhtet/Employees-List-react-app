import React, { useRef, useState } from "react";
import "../index.css";

const EmployeeForm = (props) => {
  const employeeNameRef = useRef();
  const positionRef = useRef();
  const departmentRef = useRef();

  const addEmployee = (event) => {
    event.preventDefault();
    const employee = {
      employeeName: employeeNameRef.current.value,
      position: positionRef.current.value,
      department: departmentRef.current.value,
    };
    if (
      employee.employeeName.trim().length == 0 &&
      employee.position.trim().length == 0 &&
      employee.department.trim().length == 0
    ) {
      window.confirm("You should fill all the fields in the form!");
      return;
    }

    props.addWorker(employee);
    employeeNameRef.current.value = "";
    positionRef.current.value = "";
    departmentRef.current.value = "";
  };

  return (
    <section className="formDiv">
      <form onSubmit={addEmployee}>
        <input type="text" placeholder="Name..." ref={employeeNameRef} />
        <input type="text" placeholder="Position..." ref={positionRef} />
        <input type="text" placeholder="Department..." ref={departmentRef} />
        <button type="submit">Add Employee</button>
      </form>

      <p>Total Employees - {props.employees.length}</p>
      <p>You can add employees by filling the form above!</p>
    </section>
  );
};

export default EmployeeForm;
