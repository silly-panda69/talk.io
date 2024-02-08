import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const Join = () => {
    const navigate=useNavigate();
    const goBack=()=>{
        navigate("/");
    }
    return (
        <div className='join'>
            <Navbar></Navbar>
            <div className='join-home'>
                <input type="text" placeholder='Name...'/>
                <input type="text" placeholder='Room Code...'/>
                <div className='join-button'>
                    <button onClick={goBack}>Cancel</button>
                    <button>Join</button>
                </div>
                <div className='join-padding'>
                </div>
            </div>
        </div>
    );
}
 
export default Join;