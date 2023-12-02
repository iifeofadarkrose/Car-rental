import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className='container'>
      <div className='logoContainer'>
        <img className='logo' src={logo} alt="" height={164} width={164} />
      </div>
      <nav>
        <ul className={styles['navList']}>
          <li>
            <NavLink exact="true" to="/" activeclassname={styles.activeLink}>HomePage</NavLink>
          </li>
          <li>
            <NavLink to="/catalog" activeclassname={styles.activeLink}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeclassname={styles.activeLink}>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
