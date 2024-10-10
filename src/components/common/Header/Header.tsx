import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../assets/tmovie.png';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const { Logoimg, links } = styles;

const Header = () => {
  return (
    <Navbar data-bs-theme="dark">
      <Container>
        <Navbar.Brand className={Logoimg}>
          <img src={Logo} width={30} height={30} alt="tMovies Logo" />
          <Link to="/">tMovies</Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className={links} as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link className={links} as={NavLink} to="/Movies">Movies</Nav.Link>
          <Nav.Link className={links} as={NavLink} to="/tv-series">Tv Series</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
