import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded} from '../../actions';
import './book-list.css';
import compose from '../../utils/compose';

class BookList extends Component {
  componentDidMount() {
    const {bookstoreService} = this.props;
    const data = bookstoreService.getBooks();
    console.log('data', data);

    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
    return (
      <ul className='book-list'>
        {books.map((book) => <li key={book.id}><BookListItem book={book}/></li>)}
      </ul>
    );
  }
}

const mapStateToProps = ({books}) => {
  return {
    books
  };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
