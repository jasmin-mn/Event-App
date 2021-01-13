import React, { useState } from "react";
import styles from './Forgotpasswordpage.module.css'
import axios from 'axios';
// import FlashMessage from 'react-flash-message'


function Forgotpasswordpage() {
  const [email, setEmail ] = useState();
  const changeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const sendData = async(data)=>{
    const config = {
      headers : {  
      'Content-Type': 'application/json'
    }
      
    };
    try {
      // const result = await fetch('/user/forgotPassword',{
      //   method : 'POST',
      //   headers : { 'Content-Type': 'application/json'},
      //   body : JSON.stringify(email)
      // })
      const result =await axios.post('/user/forgotPassword',data , config);
      console.log(result);
      
      
    } catch (error) {
      console.log(error);
    }

  }
  const submitForm = async(e)=>{

    e.preventDefault();
    sendData({email})
     
  }
  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit= {submitForm}> 
        <div className={styles.forgotpassword}>
          <label htmlFor="email">Email Address</label>
          <input type="email" onChange={changeEmail} name="email" placeholder = " Enter your email" />
          <input type="submit" value="Submit" className={styles.submitforgotpw} />
        </div>
      </form>
    </div>
  );
}

export default Forgotpasswordpage;
