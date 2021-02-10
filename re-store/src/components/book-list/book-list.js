import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../../actions';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import compose from '../../utils/compose';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
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

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
