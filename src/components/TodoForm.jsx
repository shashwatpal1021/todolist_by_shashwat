// TodoForm.js
import React, { useState } from 'react';
import "../App.css";

function TodoForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        onAdd(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className='inputbox'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button className='Addbutton' type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
