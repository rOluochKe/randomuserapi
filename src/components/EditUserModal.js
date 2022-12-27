import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const EditUserModal = ({ children, id }) => {
  const { isModalOpen, openModal, closeModal, getUserDetailsById, sortedData } = useGlobalContext();

  const user = getUserDetailsById(id);

  const [firstName, setFirstName] = useState(user.name.first)
  const [lastName, setLastName] = useState(user.name.last)
  const [userEmail, setUserEmail] = useState(user.email)
  const [userPhone, setUserPhone] = useState(user.phone)
  const [userCity, setUserCity] = useState(user.location.city)
  const [userState, setUserState] = useState(user.location.state)
  const [userCountry, setUserCountry] = useState(user.location.country)
  const [successMessage, setSuccessMessage] = useState("");

  // update user details from localStorage
  const updateUserDetailsFromLocalStorage = () => {
    sortedData.map((userDetail) => {
      if (userDetail.login.uuid === id) {
        let nameOutput = userDetail.name = {
          ...userDetail.name,
          first: firstName,
          last: lastName,
        }
  
        let locationOutput = userDetail.location = {
          ...userDetail.location,
          city: userCity,
          state: userState,
          country: userCountry,
        }

        return {
          ...userDetail,
          name: nameOutput,
          location: locationOutput,
          phone: userPhone,
          email: userEmail, 
        };
      }
      return  {
        ...userDetail
      }
    });
  }

  const handleUpdateDetails = (e) => {
    e.preventDefault();
    updateUserDetailsFromLocalStorage();

    setSuccessMessage("User details updated success!");
    setTimeout(() => {
      closeModal();
    }, 1000);
  }

  return (
    <>
      <div onClick={openModal}>{children}</div>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <h2>Edit User Details</h2>

          {successMessage && <div className="success">{successMessage}</div>}

          <button className='close-modal-btn' onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>

          <form onSubmit={handleUpdateDetails}>
            <div className='edit-form-input'>
              <div className='first-column'>
                <label>Firstname</label>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Firstname'
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                />
              </div>
              <div className='second-column'>
                <label>Lastname</label>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Lastname'
                  value={lastName}
                  onChange={(e)=> setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className='edit-form-input'>
              <div className='first-column'>
                <label>Email</label>
                <input
                  type='text'
                  className='form-input'
                  placeholder='email'
                  value={userEmail}
                  onChange={(e)=> setUserEmail(e.target.value)}
                />
              </div>
              <div className='second-column'>
                <label>Phone</label>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Phone'
                  value={userPhone}
                  onChange={(e)=> setUserPhone(e.target.value)}
                />
              </div>
            </div>

            <div className='edit-form-input'>
              <div className='first-column'>
                <label>City</label>
                <input
                  type='text'
                  className='form-input'
                  placeholder='City'
                  value={userCity}
                  onChange={(e)=> setUserCity(e.target.value)}
                />
              </div>
              <div className='second-column'>
                <label>State</label>
                <input
                  type='text'
                  className='form-input'
                  placeholder='State'
                  value={userState}
                  onChange={(e)=> setUserState(e.target.value)}
                />
              </div>
            </div>

            <div className='edit-form-input'>
              <div className='first-column'>
                <label>Country</label>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Country'
                  value={userCountry}
                  onChange={(e)=> setUserCountry(e.target.value)}
                />
              </div>
            </div>

            <button className='btn edit-btn'>Update Details</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserModal