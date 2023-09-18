import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import { getTodoFunction } from '../redux/actions';


const TodoList = () => {
    const dispatch = useDispatch()

    const todos = useSelector((store) => {
        return store.todos
    }
    )


    useEffect(() => {
        dispatch(getTodoFunction())

    }, [])

    return (
        <div className="todo-list-container">

            <h2 className="todo-list-title">Todo List</h2>
            <TodoForm />
            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} id={todo.id} />
                ))}
            </ul>

        </div>
    );
};

export default TodoList;
