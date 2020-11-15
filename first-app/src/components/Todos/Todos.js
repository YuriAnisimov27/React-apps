import React, {Component} from 'react';
import './Todos.css';
import Todo from '../Todo/Todo';

export default class Todos extends Component {

  render() {
    return (
      <div>
        <h2>Список дел</h2>

        {this.props.todos
          ? this.props.todos.map(({title, id}) => {
            return (
              <Todo
                title={title}
                id={id}
                key={id}
                deleteTodo={this.props.deleteTodo}/>
            );
          })
          : <h1>Загрузка</h1>
        }
      </div>
    );
  }
};
