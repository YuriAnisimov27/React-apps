import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksError, booksLoaded, booksRequested} from '../../actions';
import compose from '../../utils/compose';
import Spinner from '../spinner/spinner';
import './book-list.css';
import ErrorIndicator from '../error-indicator/error-indicator';

class BookList extends Component {
  componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksError(error));
  }

  render() {
    const {books, loading, error} = this.props;
    if (loading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;

    return (
      <ul className='book-list'>
        {books.map((book) => <li key={book.id}><BookListItem book={book}/></li>)}
      </ul>
    );
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error};
};

const mapDispatchToProps = {
  booksLoaded, booksRequested, booksError
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
