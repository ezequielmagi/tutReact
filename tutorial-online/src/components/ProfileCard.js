import React from 'react';
import perfilPic from '../assets/img/perfil.jpg'
import './profileCard.css'

export default function ProfileCard( { name , skill } ) {
  return (
    <>
      <div className="profileCardContainer">
        <div className="profileContainer--imgContainer">
          <img src={ perfilPic } alt="foto de perfil" />
        </div>
        <div className="profileContainer--data">
          <p className='profileTitle'>Name:</p>
          <p>{ name }</p>
          <p className='profileTitle'>Skills:</p>
          <p>{ skill }</p>
        </div>
      </div>
    </>
  );
}
