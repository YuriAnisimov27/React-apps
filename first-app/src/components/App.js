import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Todos from './Todos/Todos';
import Navbar from './Navbar/Navbar';
import AddTodo from './AddTodo/AddTodo';
import {addTodo, getTodos} from '../store/actions/todoActions';


class App extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className='container'>
        <Navbar/>

        <Switch>
          <Route exact path='/' render={() => <Todos todos={this.props.todos}/>}/>
          <Route exact path='/add' render={() => <AddTodo addTodo={addTodo}/>}/>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

export default withRouter(connect(mapStateToProps, {getTodos})(App));
