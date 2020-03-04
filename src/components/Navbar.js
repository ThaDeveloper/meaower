import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isActive: false
  };
  handleMenuTogle = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  render() {
    const { isActive } = this.state;
    return (
      <div className='nav-wrapper'>
        <nav className='navbar'>
          <div className='logo'>
            <NavLink to='/'>Meaower</NavLink>
          </div>
          <div
            className={'menu-toggle' + (isActive ? ' is-active' : '')}
            id='mobile-menu'
            onClick={() => this.handleMenuTogle()}
          >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
          <ul className={'nav' + (isActive ? ' mobile-nav' : '')}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='nav-active'
                className='link'
              >
                Vote
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/votes'
                activeClassName='nav-active'
                className='link'
              >
                Votes
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/browse'
                activeClassName='nav-active'
                className='link'
              >
                Browse
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/favorites'
                activeClassName='nav-active'
                className='link'
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
