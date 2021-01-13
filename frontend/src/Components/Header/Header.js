import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png';
import styles from './Header.module.css';


import { UserStateContext } from '../../App';

export default function Header() {
 
    const { loggedInState } = useContext(UserStateContext);




    
    return (
        
        <div className={styles.header}>

            <div className={styles.nav}>
                <img id="logo" src={logo} alt={"logo"} />
                {loggedInState ?(

                <ul className={styles.nav_list}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/Profile'}>Profile</Link>

                       
                        



                    </li>

                    <li>
                        <Link to={'/Messages'}>Messages</Link>
                    </li>
                    <li>
                        <Link to={'/notification'}>Notification</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>

                </ul>
              
                
                ):(<>


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

                <div className={styles.header_bg}>
                    <div className={styles.header_text}>
                        <p>Enjoy fun Coding events, learning workshops classes from home</p>
                        <button className={styles.btn}>Join us</button>
                    </div>
                </div>

                </>)}

            </div>
            

           
        </div>
    )
                }