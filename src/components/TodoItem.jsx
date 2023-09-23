// TodoItem.js
import React from 'react';
import "./style.css"

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className='todoitem'><ul>
            <li>
                <span className={todo.completed ? 'completed' : ''}>
                    {todo.text}</span>
                <button className='buttons' onClick={() => onToggle(todo.id)}>Toggle</button>
                <button className='buttons delete' onClick={() => onDelete(todo.id)}>Delete</button>
            </li>  </ul>
        </div>
    );
}

export default TodoItem;
