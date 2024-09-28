import React, { useState } from "react";
const API_KEY = "L9_wnzcpfMp9NQBLL3i6oKjzOcNChiyXm-pqB5zaeNB7BLiFMg"

function TODO() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChanges(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
            const taskToAdd = {
                task: newTask,
            };
            fetch(`/api/v1/todo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`, 
                },
                body: JSON.stringify(taskToAdd), 
            })
            .then(res => {
                if (!res.ok) throw new Error("FUUUUUUUUUU");
                return res.json();
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }
    }

    function deleteTask(index) {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter the Task..."
                    value={newTask}
                    onChange={handleInputChanges}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>isCompleted</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TODO;