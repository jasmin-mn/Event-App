// import React from 'react'
import React, { useState} from 'react'
import styles from './Register.module.css'

function Register()  {

 
     
    return (
        <div className ={styles.formcontainer}>
            <h1>
                User <span className={styles.textregister}> Register </span>                
            </h1>
            <form >
                <div className={styles.formgroup}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" username="username"    />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="fname">Firstname</label>
                    <input type="text" fname="fname"    />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="lname">Lastname</label>
                    <input type="text" lname="lname"    />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" gender="gender">Female</input>
                    <input type="radio" gender="gender">Male</input>
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email"  />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"   />
                </div>

                <div className={styles.formgroup}>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2"  />
                </div>
                <input type="submit" value="Register" className={styles.submitregister} />
            </form>
            
        </div>
        )
}

export default Register;