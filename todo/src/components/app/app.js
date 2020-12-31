import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make App', important: true, id: 2},
      {label: 'build Test', important: false, id: 3},
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = todoData.filter(el => el.id !== id);
      return {
        todoData: newTodoData
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: Date.now()
    };
    this.setState(({todoData}) => {
      const newTodoData = [...todoData, newItem];
      return {
        todoData: newTodoData
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
        <ItemAddForm onAdded={this.addItem}/>
      </div>
    );
  }
};
