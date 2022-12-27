import React from 'react';
import { useGlobalContext } from '../context';

const SortUserData = () => {
  const { setSortType } = useGlobalContext();

  return (
    <div className='filter-data'>
      <h2>sort by</h2>
      <select
        defaultValue='default'
        onChange={(e) => setSortType(e.target.value)}
        className='form-input'
      >
        <option disabled value='default'>Select option</option>
        <option value='ascending'>Name A - Z</option>
        <option value='descending'>Name Z - A</option>
      </select>
    </div>
  )
}

export default SortUserData