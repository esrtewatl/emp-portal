import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import SearchBar from './SearchBar';
import './Dashboard.css';

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://employee-portal-2df4c-default-rtdb.firebaseio.com/employees.json')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
}

export default EmployeeDashboard;
