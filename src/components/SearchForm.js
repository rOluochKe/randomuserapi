import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search user</h2>
      <input
        type='text'
        className='form-input'
        placeholder='Search ...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchForm