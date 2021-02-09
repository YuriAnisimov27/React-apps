import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested} from '../../actions';
import compose from '../../utils/compose';
import Spinner from '../spinner/spinner';
import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested} = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const {books, loading} = this.props;
    if (loading) return <Spinner/>;

    return (
      <ul className='book-list'>
        {books.map((book) => <li key={book.id}><BookListItem book={book}/></li>)}
      </ul>
    );
  }
}

const mapStateToProps = ({books, loading}) => {
  return {books, loading};
};

const mapDispatchToProps = {
  booksLoaded, booksRequested
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
