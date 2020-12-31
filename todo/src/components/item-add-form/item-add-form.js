import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    const {onAdded} = this.props;

    return (
      <div className="item-add-form">
        <input type="text"
               className="form-control"
               placeholder="add new todo"/>
        <button type="button" className="btn btn-primary" onClick={() => onAdded('hello')}>
          Add ToDo
        </button>
      </div>
    );
  }
};
