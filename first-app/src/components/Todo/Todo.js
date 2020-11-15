import React, {Component} from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='todo'>
        <p>{this.props.title}</p>
        <button
          className='btn btn-outline-danger'
          onClick={() => this.props.deleteTodo(this.props.id)}>
          Удалить
        </button>
      </div>
    );
  }
};
