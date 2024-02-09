import React from 'react';
import Navbar from '../components/NavBar';

const NotFound = () => {
    return (
        <div className='not-found'>
            <Navbar></Navbar>
            <div className='not-title'>
                <h1>404</h1>
                <p>Not Found</p>
                <p>Oops ! The page you requested could not be found !</p>
                <div className='join-padding'></div>
            </div>
        </div>
    );
}
 
export default NotFound;