import React, { useState} from 'react'
import styles from './Login.module.css';

const Login = () => {
   
   const login = () =>{
       

     // if the user successfully logs in
     // save the item "loggedIn" into localstorage, set it to true

     localStorage.setItem("loggedIn", true)

   }

    return (
        <div className ={styles.container}>
            <h1>
                User <span className={styles.user}> Login </span>                
            </h1>
            <form  >
                
                <div className={styles.form}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email"    />
                </div>

                <div className={styles.container}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  />
                </div>
                <div className={styles.formlink}>
                {/* <a href = "localhost:7000/user/signup" target = "register">Register</a> */}
                <a href = "localhost:7000/user/forgotPassword/" target = "_blank">Forgot Password</a>
                
                </div>
                

                
                <input type="submit" value="Login" className={styles.login} />
            </form>
            
        </div>
    )
}

export default Login;