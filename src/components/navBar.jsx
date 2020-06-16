import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                  className="link"
                  activeClassName="active-link"
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
