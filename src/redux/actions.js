import axios from 'axios'

export const getTodoFunction = () => (dispatch) => {
    dispatch({ type: 'GET_TODOS_REQUEST' });
    axios.get(`http://localhost:3004/todos`)
        .then(function (res) {

            dispatch({ type: 'GET_TODOS_SUCCESS', payload: res.data });

        })
        .catch(function (error) {

            dispatch({ type: 'GET_TODOS_ERROR' });
        })
}

export const addTodoFunction = (title) => (dispatch) => {
    dispatch({ type: 'GET_TODOS_REQUEST' });
    return axios.post('http://localhost:3004/todos', { title }).then((res) => {

        dispatch({ type: 'ADD_TODOS_SUCCESS', payload: res.data });
    }).catch((err) => {
        dispatch({ type: 'GET_TODOS_ERROR' });
    });
};

export const deleteTodoFunction = (id) => (dispatch) => {

    dispatch({ type: 'GET_TODOS_REQUEST' });
    return axios.delete(`http://localhost:3004/todos/${id}`).then(() => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    }).catch((err) => {
        dispatch({ type: 'GET_TODOS_ERROR' });
    });
};
export const editTodoFunction = (id, newText) => (dispatch) => {

    dispatch({ type: 'GET_TODOS_REQUEST' });
    return axios.put(`http://localhost:3004/todos/${id}`, { title: newText }).then((res) => {
        dispatch({ type: 'EDIT_TODO', payload: res.data });
    }).catch((err) => {
        dispatch({ type: 'GET_TODOS_ERROR' });
    });
};