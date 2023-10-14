import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="Search-container">
      <div className="search-wrapper">
        <input type="text" className='Inp-Search' placeholder='Search' />
        <AiOutlineSearch className='search-icon' />
      </div>
      <img src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg" alt="" className='Search-img' />
    </div>
  );
}

export default SearchBar;
