import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <nav className='navbar'>
          <div className='logo'>Meaower</div>
          <div className='menu-toggle' id='mobile-menu'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
          <ul className='nav'>
            <li className='nav-item active'>
              <Link to='/'>Vote</Link>
            </li>

            <li className='nav-item'>
              <Link to='/favorites'>Favorites</Link>
            </li>

            <li className='nav-item'>
              <Link to='/browse'>Browse</Link>
            </li>

            <li className='nav-item'>
              <Link to='/upload'>Upload</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
