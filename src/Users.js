import React from 'react';
import UserData from './components/UserData';
import SearchForm from './components/SearchForm'
import SortUserData from './components/SortUserData'
import { useGlobalContext } from './context';

const Users = () => {
  const { isLoading, searchTerm, sortedData } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <>
      <div className='filter-header'>
        <SearchForm />
        <SortUserData />
      </div>

      <section className='users'>
        {sortedData.length ? (
          sortedData
          .filter(user => (
            `
              ${user.name.first} 
              ${user.name.last} 
              ${user.email} 
              ${user.phone} 
              ${user.location.city}
              ${user.location.state}
              ${user.location.country}
            `.toLowerCase().includes(searchTerm)
            ))
          .map((user) => {
            return (
              <article className='user' key={user.login.uuid} data-testid="users-list">
                <UserData index={user.login.uuid} user={user} />
              </article>
            )
          })
        ) : (
          <h2>No record found!</h2>
        )}
      </section>
    </>
  )
}

export default Users