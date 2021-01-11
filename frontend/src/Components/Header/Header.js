import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png';
import styles from './Header.module.css';

export default function Header() {

    return (
        <div className={styles.header}>

            <div className={styles.nav}>
                <img id="logo" src={logo} alt={"logo"} />

                <ul className={styles.nav_list}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/about'}>About us</Link>
                    </li>

                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>Signup</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>Contact us</Link>
                    </li>

                </ul>

            </div>

            <div id={styles.header_bg}>
                <div className={styles.header_text}>
                    <p>Enjoy fun Coding events, learning workshops classes from home</p>
                    <button className={styles.btn}>Join us</button>
                </div>
            </div>
        </div>
    )
}