import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoFunction } from '../redux/actions';


const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            console.log(text, "txttttt")
            dispatch(addTodoFunction(text));

            setText('');
        }
    };


    return (
        <div className="todo-form-container">
            <input
                type="text"
                placeholder="Add a new todo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input-field"
            />
            <button
                onClick={handleAddTodo}
                className="add-button"
            >
                Add
            </button>
        </div>
    );
};

export default TodoForm;
