import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskToEdit = tasks.find(task => task.id === parseFloat(id));

  const [title, setTitle] = useState(taskToEdit.title);
  const [term, setTerm] = useState(taskToEdit.term);
  const [name, setName] = useState(taskToEdit.name);
  const [surname, setSurname] = useState(taskToEdit.surname);
  const [additionalInfo, setAdditionalInfo] = useState(taskToEdit.additionalInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...taskToEdit,
      title,
      term,
      name,
      surname,
      additionalInfo,
    };

    setTasks(prev => prev.map(task => task.id === updatedTask.id ? updatedTask : task));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <textarea
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default EditPage;