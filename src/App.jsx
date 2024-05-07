

import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const text = event.target.value.trim();
      if (text !== '') {
        setTodos([...todos, { text, completed: false }]);
        event.target.value = ''; 
      }
    }
  };

  const handleRemoveCompleted = () => {
    const filteredTodos = todos.filter(todo => !todo.completed);
    setTodos(filteredTodos);
  };

  return (
    <>
      <div className='background'> 
        <div className='container'>
          <div className='todo'>
            <div className='head'><h2>TODO</h2><i className="fa-solid fa-moon"></i></div>
            <input type="text" placeholder='Create a new todo…' onKeyPress={handleKeyPress} />
          </div>
          <TodoList todos={todos} setTodos={setTodos} filter={filter} />

          <div className='input__foot'>
            <button className='all' onClick={() => setFilter('All')}>All</button>
            <button className='active' onClick={() => setFilter('Active')}>Active</button>
            <button className='completed' onClick={() => setFilter('Completed')}>Completed</button>
            <button className='clearAll' onClick={handleRemoveCompleted}>Clear Completed</button>
          </div>  
        </div>
      </div>
    </>
  );
}

export default App;





















