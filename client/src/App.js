import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const refreshTasks = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Ahora</h1>
      <TaskForm refreshTasks={refreshTasks} />
      <TaskList />
    </div>
  );
};

export default App;
