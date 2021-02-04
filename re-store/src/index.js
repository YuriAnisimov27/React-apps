import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spinner from './components/spinner/spinner';


console.log('hello world')

ReactDOM.render(
  <React.StrictMode>
    <Spinner />
  </React.StrictMode>,
  document.getElementById('root')
);
