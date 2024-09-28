import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TODO from "./TODO.jsx";
import EditPage from "./Pages/EditPage"; 

const API_KEY = "dNbgCpX5WLaTP9WsH_3Y1Ya7n--Otb4-uKyvgb27xV54sqop5w";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", term: "2024-10-01", name: "John", surname: "Doe", additionalInfo: "Details for Task 1" },
    { id: 2, title: "Task 2", term: "2024-10-10", name: "Jane", surname: "Doe", additionalInfo: "Details for Task 2" }
  ]);

  return (
    <Router>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/edit">Edit Task</Link>
      </nav>

    <Routes>
        <Route path="/" element={<TODO tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit/:id" element={<EditPage tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </Router>
  );
}

export default App;