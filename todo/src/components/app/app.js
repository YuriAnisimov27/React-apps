import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {
  startId = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make App'),
      this.createTodoItem('Build Tests'),
    ],
    term: ''
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.startId++
    };
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = todoData.filter(el => el.id !== id);
      return {
        todoData: newTodoData
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newTodoData = [...todoData, newItem];
      return {
        todoData: newTodoData
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onSearchItem = (text) => {
    const newArr = [...this.state.todoData].filter(el => el.label.toLowerCase().startsWith(text));
    this.setState(() => {
      return {
        term: text ? newArr : ''
      };
    });
  };

  onSelectFilter = (flag) => {
    let newArr;
    if (flag === 'Done') {
      newArr = [...this.state.todoData].filter(el => el.done);
    } else if (flag === 'Active') {
      newArr = [...this.state.todoData].filter(el => !el.done);
    } else {
      newArr = [...this.state.todoData];
    }
    this.setState(() => {
      return {
        term: newArr
      };
    });
  };

  render() {
    const todoData = this.state.term || this.state.todoData;
    const doneTodos = this.state.todoData.filter(el => el.done).length;
    const allMoreTodos = this.state.todoData.length - doneTodos;

    return (
      <div className="todo-app">
        <AppHeader toDo={allMoreTodos} done={doneTodos}/>
        <div className="top-panel d-flex">
          <SearchPanel onSearchItem={this.onSearchItem}/>
          <ItemStatusFilter onSelectFilter={this.onSelectFilter}/>
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <ItemAddForm onAdded={this.addItem}/>
      </div>
    );
  }
};
