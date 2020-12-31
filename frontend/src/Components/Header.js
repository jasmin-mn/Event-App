import React from 'react'
import { Link } from "react-router-dom";
import logo from '../Images/logo.png'


export default function Nav() {

    return (
        <div id='header'>

            <div>
                <img id="logo" src={logo} alt={"logo"} />

                <ul className='nav'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>

                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>Sign up</Link>
                    </li>

                </ul>

            </div>

            <div>
                <p>Enjoy fun Coding events, learning workshops classes from home</p>
                <button>Join us</button>
            </div>
        </div>
    )
}
