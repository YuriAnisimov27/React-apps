import axios from 'axios';
import {ADD_TODO, DELETE_TODO, GET_TODOS} from './index';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo
  };
};

export const getTodos = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch({type: GET_TODOS, todos: res.data});
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}
