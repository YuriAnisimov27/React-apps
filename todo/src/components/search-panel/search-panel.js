import React from 'react';
import './search-panel.css';


const SearchPanel = ({onSearchItem}) => {
  return (
    <input type="text"
           className="form-control search-input"
           placeholder="type to search" onChange={(e) => onSearchItem(e.target.value.toLowerCase())}/>
  );
};

export default SearchPanel;
