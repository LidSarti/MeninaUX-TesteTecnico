import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='sunny-container'>
      <div className='sun'></div>
      <h1 className='name'>Lídia Sarti</h1>
      <div className='cloud-container'>
        <div className='cloud cloud-small'/>
        <div className='cloud'/>
      </div>
     
    </div>
  );
};

export default Banner;
