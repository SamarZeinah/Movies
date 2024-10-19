// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../../../assets/tmovie.png';
// import { NavLink, Link } from 'react-router-dom';
// import styles from './Header.module.css';
// import { useState } from 'react';
// const { Logoimg, links } = styles;

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     if (scrollY > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <Navbar data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand className={Logoimg}>
//           <img src={Logo} width={60} height={60} alt="tMovies Logo" />
//           <Link to="/">tMovies</Link>
//         </Navbar.Brand>
//         <Nav className="ms-auto">
//           <Nav.Link className={links} as={NavLink} to="/">Home</Nav.Link>
//           <Nav.Link className={links} as={NavLink} to="/Movies">Movies</Nav.Link>
//           <Nav.Link className={links} as={NavLink} to="/tv-series">Tv Series</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;


import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../assets/tmovie.png';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const { Logoimg, links,nav } = styles;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
    backgroundColor: isScrolled ? 'black' : 'transparent' // أو أي لون تريد أن يكون خلفية في البداية
  };

  return (
    <Navbar style={navbarStyles} data-bs-theme="dark">
    <Container>
      <Navbar.Brand className={Logoimg}>
        <img src={Logo} width={50} height={50} alt="tMovies Logo" />
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

};

export default Header;

