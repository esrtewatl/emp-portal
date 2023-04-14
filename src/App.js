import React, { useState, useEffect } from "react";
import EmployeeDashboard from "./EmployeeDashboard";
import DailyEventsForum from "./DailyEventsForum";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error(error));

    fetch("https://api.example.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
     
      <EmployeeDashboard employees={employees} posts={posts} />
      <DailyEventsForum />
    
    </div>
  );
}

export default App;
