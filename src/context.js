import React, { useState, useEffect, useMemo, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // get users from localStorage
  const usersFromLocalStorage = () => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      return JSON.parse(savedUsers);
    } else {
      return [];
    }
  };

  const [users, setUsers] = useState(usersFromLocalStorage());
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState('default');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  // sort cards by ascending or descending order
  const sortedData = useMemo(() => {
    let result = users;

    if (sortType === 'descending') {
      result = [...users].sort((a, b) => {
        return b.name.first.localeCompare(a.name.first);
      });
    } else if (sortType === 'ascending') {
      result = [...users].sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
    }

    return result;
  }, [users, sortType]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let userData;
  
      try {
        const response = await fetch('https://randomuser.me/api/?results=12');
        userData = await response.json();
        localStorage.setItem('users', JSON.stringify(userData.results));
  
        setUsers(userData.results); 
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        userData = [];
      }
    })();
  }, [])

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // get single user details
  const getUserDetailsById = (id) => {
    const user = sortedData.find((user) => user.login.uuid === id);
    return user;
  };

  return (
    <AppContext.Provider
      value={{
        setSortType,
        isLoading,
        sortedData,
        isModalOpen,
        openModal,
        closeModal,
        searchTerm,
        setSearchTerm,
        getUserDetailsById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };