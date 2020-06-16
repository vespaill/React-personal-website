import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyle = {
  color: ' #6495ed',
  fontWeight: 'bold',
  textDecoration: 'none',
  fontFamily: 'cmu_serif_italic_upright'
};

class NavBar extends Component {
  state = {
    links: ['home', 'class', 'projects']
  };

  render() {
    return (
      <nav className="navbar navbar-expand mb-3">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {this.state.links.map(link => (
              <li key={link} className="nav-item">
                <NavLink
                  className="nav-item nav-link"
                  style={navLinkStyle}
                  activeStyle={{ color: '#f0ad4e' }}
                  to={`/${link}`}
                >
                  {`${link}.`}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
