import React, { useContext } from 'react'
import styles from './Login.module.css';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import { UserStateContext } from '../../App';

const Login = (event) => {

    const { setLoggedIn } = useContext(UserStateContext)
    const history = useHistory();

    const sendLogin = async (allFormData) => {
     
        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const result = await axios.post('http://localhost:7000/user/login', allFormData, config)
            console.log(result)
            setLoggedIn(true)
            history.push('/userpage')
        } catch (error) {
            alert(error.response.data.msg);
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


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <h1
                className={styles.user}> Login
            </h1>
            <form onSubmit={handleSubmit}  >
                <div className={styles.form}>
                    <label htmlFor="email"><i class="icon-envelope "></i></label>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div className={styles.container}>
                    <label htmlFor="password"><i class="icon-shield"></i></label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" className={styles.login} />
                <h2 className={styles.containerhelp}>
                    Need to <a href="/signup">sign up</a> for an account
                    or <a href="/forgotPassword" id="forgot_password_link" >reset</a> your password?
                    </h2>
            </form>
        </div>
    )
}

export default Login;