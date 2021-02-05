import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {BookstoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context';
import BookstoreService from './services/bookstore-service';
import ErrorBoundry from './components/error-boundry/error-boundry';
import App from './components/app/app';
import store from './store';
import './index.css';


const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
