import React from 'react'
import styles from './Register.module.css';
import { useHistory } from "react-router-dom"
import axios from 'axios'


const Register = (e) => {

    const history = useHistory();
    const sendRegister = async (registerData) => {
        const config = {
            'Content-Type': 'application/json'

        }
        try {
            const result = await axios.post('/user/register', registerData, config)
            console.log(result);
        }
        catch (error) {
            console.log(error);
        } //
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {
            userName: formData.get("User Name"),
            firstName: formData.get("Firstname"),
            lastName: formData.get("Lastname"),
            email: formData.get("Email Address"),
            password: formData.get("Password")
            // password:formData.get("Confirm Password")

        }
        try {
            sendRegister(data)
            // const registered = localStorage.getItem("registered")
            // registered = JSON.parse(registered)
            localStorage.setItem("registered", JSON.stringify(true))
            history.push('/login')
            // console.log(registered);

        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <div className={styles.formcontainer}>
            <h1>
                User <span className={styles.textregister}> Register </span>
            </h1>
            <form onSubmit={handleSubmit} >
                <div className={styles.formgroup}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" username="username" />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="fname">Firstname</label>
                    <input type="text" name="fname" />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="lname">Lastname</label>
                    <input type="text" name="lname" />
                </div>

                {/* <div className={styles.formgroupgender}>
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name="gender" value="Female" />
                    <input type="radio" name="gender" value="Male" />
                </div> */}

                <div className={styles.formgroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password" />
                </div>
                <input type="submit" value="Register" className={styles.submitregister} />
            </form>

        </div>
    )
}

export default Register;