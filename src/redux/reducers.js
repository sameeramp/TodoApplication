const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_TODOS_REQUEST':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'GET_TODOS_SUCCESS':
            return {
                ...state,
                todos: payload,
                isError: false,
                isLoading: false,
            }
        case 'GET_TODOS_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false,
            }

        case 'ADD_TODOS_SUCCESS':
            return {
                ...state,
                todos: [...state.todos, payload],
                isError: false,
                isLoading: false,
            };
        case 'REMOVE_TODO':
            const updatedTodos = state.todos.filter((todo) => todo.id !== payload);
            return {
                ...state,
                todos: updatedTodos,
                isError: false,
                isLoading: false,
            };
        case 'EDIT_TODO':
            const editedTodo = payload;
            const updatedTodo = state.todos.map((todo) =>
                todo.id === editedTodo.id ? editedTodo : todo
            );
            return {
                ...state,
                todos: updatedTodo,
                isError: false,
                isLoading: false,
            };

    }
    return state;
};

export { reducer };
