import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoFunction, editTodo, editTodoFunction, removeTodo } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const TodoItem = ({ todo, id }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedText(todo.text);
    };

    const handleSaveClick = () => {
        dispatch(editTodoFunction(todo.id, editedText));

        setIsEditing(false);
    };

    const handleEditClick = () => {
        setIsEditing(true);

    };

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleCheckboxChange = () => {
        setCompleted(!completed);
    };
    const handleDelete = () => {

        dispatch(deleteTodoFunction(id))
    }
    return (
        <div className={`todo-item ${isEditing ? 'editing' : ''}`}>
            <div className="todo-item-content">
                <p className={`text-lg ${completed ? 'completed-text' : ''}`}>{id}.</p>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={completed}
                    onChange={handleCheckboxChange}
                />
                {isEditing ? (
                    <div className="editing-container">
                        <input
                            type="text"
                            className="editing-input"
                            value={editedText}
                            onChange={handleTextChange}
                        />
                        <div className="editing-buttons">
                            <button onClick={handleSaveClick}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button onClick={handleCancelClick}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                ) : completed ? (
                    <p className={`text-lg completed-text`}>{todo.title}</p>
                ) : (
                    <p className={`text-lg`}>{todo.title}</p>
                )}
            </div>
            {!isEditing && (
                <div className="action-buttons">

                    <button onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    {!completed && !isEditing && (
                        <button onClick={handleEditClick}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default TodoItem;
