import React, { useState } from 'react';
import { createTask } from '../api/tasks';

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, priority, estimatedTime });
    refreshTasks();
    setTitle('');
    setPriority('');
    setEstimatedTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Priority</label>
        <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} required />
      </div>
      <div>
        <label>Estimated Time</label>
        <input type="number" value={estimatedTime} onChange={(e) => setEstimatedTime(e.target.value)} required />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
