import React, {Component} from 'react';
import {connect} from 'react-redux'
import './AddTodo.css';
import {addTodo} from '../../store/actions/todoActions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onChange = (e) => {
    this.setState({title: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodo({id: Date.now, title: this.state.title})
      this.setState({title: ''})
    }
  }

  render() {
    return (
      <form className='add-todo' onSubmit={this.onSubmit}>
        <h2>Добавить задачу</h2>
        <div className='form-group'>
          <label htmlFor='title' >название задачи</label>
          <input className='form-control' type='text' value={this.state.title} onChange={this.onChange}/>
        </div>
        <button className='btn btn-outline-info' type='submit' >Добавить</button>
      </form>
    );
  }
};

export default connect(null, {addTodo})(AddTodo)
