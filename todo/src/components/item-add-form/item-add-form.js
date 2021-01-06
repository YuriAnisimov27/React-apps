import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    labelText: ''
  };

  onLabelChange = (event) => {
    this.setState({labelText: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdded(this.state.labelText);
    this.setState({labelText: ''});
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="add new todo"
          onChange={this.onLabelChange}
          value={this.state.labelText}/>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onSubmit}>
          Add ToDo
        </button>
      </form>
    );
  }
};
