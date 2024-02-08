import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const backButton=()=>{
        navigate(-1);
    }
    return (
        <div className='navbar'>
            <div className='navbar-btn'>
                <button onClick={backButton}>{"<-"}</button>
            </div>
        </div>
    );
}
 
export default Navbar;