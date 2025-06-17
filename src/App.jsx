import './App.css';
import React, { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task ));
  };

  

  return (
    <div className="task-container">
      <h1>Task list</h1>
      <AddTaskForm onAdd={addTask} />
      {tasks.map(task => (
        <Task 
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      ))}

    </div>
  );
};

export default App;
