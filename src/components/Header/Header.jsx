import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logo from '../../assets/images/logo.svg';
const Header = () => {
  return (
    <header>
      <nav className={css.header}>
      <div className={css.logo}>
        <img className='logo' src={logo} alt="logo" />
      </div>
        <NavLink className={css.headerText} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerText} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={css.headerText} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
