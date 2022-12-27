import React from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaMap,
  FaPhone,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserData = ({ index, user }) => {
  const navigate = useNavigate();
  const { picture: { large }, name: { title, first, last }, email, phone, location: { city, state, country } } = user;

  return (
    <div className='container'>
      <img
        src={large} 
        alt='random user'
        className='user-img'
      />

      <div className='values-list'>
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
            <button className='btn' onClick={() => navigate(`/user-details/${index}`)}>View User Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserData