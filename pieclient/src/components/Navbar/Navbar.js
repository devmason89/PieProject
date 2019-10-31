import React from 'react';
import './Navbar.css';
import piePic from '../../assets/apple-pie.png';
//must import react if using js, import css files
//haven't been using the word import (es5) bc we were doing backend (not shown to end user)
//require is (ES6)
import Logout from './Logout/Logout';

//set up a functional component aka function

const Navbar = () => {
    return(
        <div>
            <nav id="nav">
                <img id="piePic" src={piePic} alt="pie" />
                <Logout/>
            </nav>
        </div>
    )

}

export default Navbar;

//must export the name of the file to be used elsewhere