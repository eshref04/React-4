

import React from 'react';
import "./TodoItems.css";

const TodoItems = ({ text, completed, onToggleCompleted }) => {
  return (
    <>
      <div className='input'>
        <label className="cr-wrapper">
          <input
            className='TodoCheckbox'
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
          />
          <div className="cr-input"></div>
          <span>{text}</span> 
        </label>
      </div>
    </>
  );
};

export default TodoItems;






