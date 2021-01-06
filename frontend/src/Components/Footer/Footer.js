import React from 'react'
import styles from './Footer.module.css';


export default function Footer() {

    return (
        <div className={styles.footer}>
            <p><a>Home</a> | <a>Login</a> | <a>Sign up</a> | <a>Contact us</a> | <a>About</a> | <a>Terms of Use</a></p>
            <p>&copy; 2021 EventsMGR Team</p>
        </div>
    )
}


