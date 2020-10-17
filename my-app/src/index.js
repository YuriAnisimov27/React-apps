import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = () => {
  return <h1 style={{'color': 'red'}}>Hello</h1>
}

const Field = () => {
  return <input type="text" placeholder='Type here'/>
}

const Btn = () => {
  const text = 'Log in'
  return <button>{text}</button>
}

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Btn />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
