import React from 'react';
import {Container} from 'react-bootstrap';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer'; 
import styles from './mainlayout.module.css';
import {Outlet}from 'react-router-dom';
const {container, wrapperr} = styles;

const Mainlayout = () => {
  return (
    <Container  fluid className={container}>
        <Header/>
        <div className={wrapperr}>
            <Outlet/>
            </div>
        <Footer/>

    </Container>
  )
}

export default Mainlayout