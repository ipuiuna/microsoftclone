import React from 'react';
import MenuBtn from '../MenuBtn';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
  return (
    <div className='container'>
      <MenuBtn />
      <nav className='main-nav'>
        <img
          src='https://i.ibb.co/wwLhz98/logo.png'
          alt='Microsoft logo'
          className='logo'
        />

        <ul className='main-menu'>
          <li>
            {/*eslint-disable-next-line */}
            <a>Office</a>
          </li>
          <li>
            {/*eslint-disable-next-line */}
            <a>Windows</a>
          </li>
          <li>
            {/*eslint-disable-next-line */}
            <a>Surace</a>
          </li>
          <li>
            {/*eslint-disable-next-line */}
            <a>Xbox</a>
          </li>
          <li>
            {/*eslint-disable-next-line */}
            <a>Deals</a>
          </li>
          <li>
            {/*eslint-disable-next-line */}
            <a>Suppport</a>
          </li>
        </ul>

        <ul className='right-menu'>
          <li>
            {/*eslint-disable-next-line */}
            <a>
              <i className='fas fa-search' />
            </a>
          </li>
          <li>
            {/*eslint-disable-next-line */}
            <a>
              <i className='fas fa-shopping-cart' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
