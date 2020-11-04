import React from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css';

const App = () => {

  const data = [
    {
      label: 'Don\'t Worry, Be Happy)',
      important: true,
      id: 1
    },
    {
      label: 'Greed Is Good',
      important: false,
      id: 2
    },
    {
      label: 'Terminator 2',
      important: false,
      id: 3
    }
  ];

  return (
    <div className='app'>
      <AppHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;
