import React from 'react'
import style from "./Navbar.module.scss"
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav className={style.navBar}>
        <ul className={style.navList}>
        <li><NavLink className={style.link} to="/">FORSIDE</NavLink></li>
        <li><NavLink className={style.link} to="/products">PRODUKTER</NavLink></li>
        <h2>bageriet</h2>
        <li><NavLink className={style.link} to="/contact">KONTAKT</NavLink></li>
        <li><NavLink className={style.link} to="/login">LOGIN</NavLink></li>
      </ul>
    </nav>
  );
}

