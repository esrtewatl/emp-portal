import React from 'react';
import './Card.css';

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h3 className="employee-name">{employee.name}</h3>
      <p className="employee-position">{employee.position}</p>
      <p className="employee-department">{employee.department}</p>
      <p className="employee-email">{employee.email}</p>
    </div>
  );
}

export default EmployeeCard;
