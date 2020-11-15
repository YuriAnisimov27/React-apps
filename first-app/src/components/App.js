import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AddTodo from './AddTodo/AddTodo';
import Todos from './Todos/Todos';
import axios from 'axios';
import Navbar from './Navbar/Navbar';


export default class App extends React.Component {
  state = {
    todos: null,
  };

  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.setState({todos: res.data});
      });
  }

  render() {
    return (
      <div className='container'>
        <Navbar/>

        <Switch>
          <Route exact path='/' render={() => {
            return <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>;
          }}/>

          <Route exact path='/add' render={() => <AddTodo addTodo={this.addTodo}/>}/>
        </Switch>

      </div>
    );
  }
}
