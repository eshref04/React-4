
import React from 'react';
import './TodoList.css';
import TodoItems from '../TodoItems/TodoItems';

const TodoList = ({ todos, setTodos, filter }) => {
  const handleToggleCompleted = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemoveCompleted = () => {
    const filteredTodos = todos.filter(todo => !todo.completed);
    setTodos(filteredTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <ul className='todo__body'>
      {filteredTodos.map((todo, index) => (
        <li key={index}>
          <TodoItems
            text={todo.text}
            completed={todo.completed}
            onToggleCompleted={() => handleToggleCompleted(index)}
          />
        </li>
      ))}
      <li className='todo__foot'></li>
    </ul>
  );
}

export default TodoList;







