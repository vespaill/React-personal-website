import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Header from './header';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {
    links: ['about me', 'class', 'projects']
  };

  render() {
    const { links } = this.state;

    return (
      <div className="bg-nero pb-3 mb-5">
        <div className="container">
          <Header>Victor Espaillat</Header>
          <Navbar expand="md">
            <Navbar.Toggle
              style={{ backgroundColor: 'white' }}
              className="mx-auto"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
              <Nav className="mr-auto">
                {links.map(link => (
                  <NavLink
                    key={link}
                    className="link nav-item"
                    activeClassName="active-link"
                    to={`/${link.replace(/\s/g, '').toLowerCase()}`}
                  >
                    {`${link}.`}
                  </NavLink>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {/* <nav className="navbar navbar-expand-md mb-3 ">
          <div className="container">
            <button
              id="nav-btn"
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDiv"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <h1>button</h1>
            </button>
            <div id="navbarDiv" className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                {links.map(link => (
                  <li key={link} className="nav-item">
                    <NavLink
                      className="link"
                      activeClassName="active-link"
                      to={`/${link.replace(/\s/g, '').toLowerCase()}`}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      {`${link}.`}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav> */}
      </div>
    );
  }
}

export default NavBar;
