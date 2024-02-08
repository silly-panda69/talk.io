import React from 'react';
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1);
    }
    return (
        <div className='join'>
            <Navbar></Navbar>
            <div className='join-home'>
                <input type="text" placeholder='Name...'/>
                <div className='join-rounds'>
                    <p>Select number of rounds !</p>
                    <div className='join-radio-grp'>
                        <div className='join-radio'>
                            <input type="radio" name="" id="" />
                            <p>3</p>
                        </div>
                        <div className='join-radio'>
                            <input type="radio" name="" id="" />
                            <p>5</p>
                        </div>
                        <div className='join-radio'>
                            <input type="radio" name="" id="" />
                            <p>9</p>
                        </div>
                    </div>
                </div>
                <div className='new-btn'>
                    <button>Create Room</button>
                    <button onClick={goBack}>Cancel</button>
                </div>
                <div className='join-padding'>
                </div>
            </div>
        </div>
    );
}
 
export default New;