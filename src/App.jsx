import React, { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeData from "./components/EmployeeData";
import "./index.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const addWorker = (employee) => {
    setEmployees([...employees, employee]);
  };
  return (
    <div className="main">
      <EmployeeForm addWorker={addWorker} employees={employees} />
      <EmployeeData employees={employees} />
    </div>
  );
};

export default App;
