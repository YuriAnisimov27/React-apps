import React from 'react';
import Todo from './Todo/Todo';


export default class App extends React.Component {
  state = {
    todos: [
      {id: 1, title: '300 Spartans'},
      {id: 2, title: 'Kill Bill'},
      {id: 3, title: 'Terminator 2'},
    ],
  }

  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  }

  render() {
    if (!this.state.todos.length) {
      return <h1>Нет Задач</h1>
    }

    return (
      <div>
        <h1>Список дел</h1>
        {this.state.todos.map(({title, id}) => {
          return (
            <Todo
              title={title}
              id={id}
              key={id}
              deleteTodo={this.deleteTodo}/>
          )
        })}
      </div>
    );
  }
}
