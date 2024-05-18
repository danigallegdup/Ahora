import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../api/tasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleComplete = async (id) => {
    const task = tasks.find((task) => task._id === id);
    await updateTask(id, { ...task, completed: !task.completed });
    setTasks(tasks.map((task) => (task._id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
            <button onClick={() => handleComplete(task._id)}>Complete</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
