import React from 'react'
import styles from './Footer.module.css';


export default function Footer() {

    return (
        <div className={styles.footer}>
            <p>
                <a href="#">Home</a> |
                <a href="#">Login</a> |
                <a href="#">Sign up</a> |
                <a href="#">Contact us</a> | <a href="#">About</a> |
                <a href="#">Terms of Use</a>
            </p>
            <p>&copy; 2021 EventsMGR Team</p>
        </div>
    )
}


