import React, { useContext, useState } from 'react'

import styles from './Login.module.css';
import { useHistory } from "react-router-dom"
import axios from 'axios';

import { UserStateContext } from '../../App';

const Login = (event) => {

    const {setLoggedIn }=useContext(UserStateContext)

const history=useHistory();
const sendLogin = async (allFormData)=>{
    const config = {
        headers : {
            'Content-Type' : 'application/json'

        }
        try {
            const result = await axios.post('/user/login', allFormData, config)
            console.log(result)

        } catch (error) {
            console.log(error);
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)

        const data = {
            email: formData.get("email"),
            password: formData.get("password")

        }
        try {
            sendLogin(data);

            // if the user successfully logs in
            // save the item "loggedIn" into localstorage, set it to true

            window.localStorage.setItem("loggedIn", JSON.stringify(true))

            history.push('/userpage')


        } catch (error) {

            console.log(error);
        }


    }
    try{
        sendLogin(data);

        // if the user successfully logs in
        // save the item "loggedIn" into localstorage, set it to true
   
       
   setLoggedIn(true)
        history.push('/userpage')
       
   
       }catch(error){
   
           console.log(error);
       }
   

    }








    return (
        <div className={styles.container}>
            <h1>
                User <span className={styles.user}> Login </span>
            </h1>
            <form onSubmit={handleSubmit}  >

                <div className={styles.form}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" />
                </div>

                <div className={styles.container}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className={styles.formlink}>
                    {/* <a href = "localhost:7000/user/signup" target = "register">Register</a> */}
                    <a href="localhost:7000/user/forgotPassword/" target="_blank">Forgot Password</a>

                </div>



                <input type="submit" value="Login" className={styles.login} />
            </form>

        </div>
    )
}

export default Login;