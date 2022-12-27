import React from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaMap,
  FaPhone,
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
import EditUserModal from './EditUserModal';

const SingleUser = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { getUserDetailsById } = useGlobalContext();

  const user = getUserDetailsById(id);
  const { picture: { large }, name: { title, first, last }, email, phone, location: { city, state, country } } = user;

  // go to previous page
  let goBack = () => {
    navigate(-1);
  };

  return (
    <div className='single-user-container'>
      <div className='container'>
        <img
          src={large} 
          alt='random user'
          className='user-img'
        />

        <div className='values-list'>
          <div className='icon-container'>
            <button className='goback' onClick={goBack}>
              Go back
            </button>
          </div>

          <div>
            <div className='icon-container'>
              <button
                className='icon'
                data-label='name'
              >
                <FaUser />
              </button>
              <span className='user-info'>
                {title}. {first} {last}
              </span>
            </div>

            <div className='icon-container'>
              <button
                className='icon'
                data-label='email'
              >
                <FaEnvelopeOpen />
              </button>
              <span className='user-info'>
                {email}
              </span>
            </div>

            <div className='icon-container'>
              <button
                className='icon'
                data-label='street'
              >
                <FaMap />
              </button>
              <span className='user-info'>
                {city}, {state}, {country}
              </span>
            </div>

            <div className='icon-container'>
              <button
                className='icon'
                data-label='phone'
              >
                <FaPhone />
              </button>
              <span className='user-info'>
                {phone}
              </span>
            </div>

            <div className='icon-container'>
              <EditUserModal id={id}>
                <button className='btn'>Edit User Details</button>
              </EditUserModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SingleUser;