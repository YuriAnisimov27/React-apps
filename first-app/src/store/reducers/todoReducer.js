import {ADD_TODO, DELETE_TODO, GET_TODOS} from '../actions';

const initialState = {todos: null};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [action.todo, ...state.todos]};
    case GET_TODOS:
      return {...state, todos: action.todos};
    case DELETE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.id)};
    default:
      return state;
  }
};

export default reducer;
