// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import "../App.css";

function TodoList({ todos, onToggle, onDelete, onAdd}) {
    return (
        <div className='todoitembox'>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
}

export default TodoList;
