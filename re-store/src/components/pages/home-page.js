import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
  const boooks = [
    {id: 1, title: 'HTML', author: 'Cherchesov'},
    {id: 2, title: 'CSS', author: 'Onopko'},
    {id: 3, title: 'JS', author: 'Arshavin'},
  ];
  return (
    <BookList books={boooks} />
  );
};

export default HomePage;
