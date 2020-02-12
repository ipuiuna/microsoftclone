import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MenuBtn = () => {
  const toggleMenu = () =>
    document.querySelector('.main-menu').classList.toggle('show');

  return (
    <div className='menu-btn' onClick={toggleMenu}>
      <i className='fas fa-bars fa-2x' />
    </div>
  );
};

export default MenuBtn;
