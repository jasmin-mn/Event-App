import React from 'react'
import { Link } from "react-router-dom";
import logo from '../Images/logo.png'
import headerBg from '../Images/binary.jpg'


export default function Nav() {

    return (
        <div id='header'>

            <div id='nav'>
                <img id="logo" src={logo} alt={"logo"} />

                <ul className='nav_list'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>About us</Link>
                    </li>

                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>Sign up</Link>
                    </li>
                    
                    <li>
                        <Link to={'/contact'}>Contact us</Link>
                    </li>

                </ul>

            </div>

            <div id='header_bg'>
                <div className='header_text'>
                    <p>Enjoy fun Coding events, learning workshops classes from home</p>
                    <button className='btn'>Join us</button>
                </div>
            </div>
        </div>
    )
}
