import React, { useState } from "react";
import styles from "./Resetpasswordpage.module.css";
import axios from 'axios';

function Resetpasswordpage() {
    const [password,setPassword] = useState("");
    const changePw = (e)=>{
      setPassword(e.target.value)
    }
  
  const sendResetPw = async(data) =>{
    const config = {
      headers: {'Content-Type': 'application/json'}
    
  };
  try{
    const result = await axios.post('/user/resetPassword', data, config);
    console.log(result);
  } catch(error){
    console.log(error);
  }
}
const submitResetpw = async(e)=>{
  e.preventDefault();
  sendResetPw({password})

}


  return (
    <div className={styles.containerresetpw}>
      <h1>Resetpassword</h1>
      <form onSubmit = {submitResetpw}>
        <div className={styles.formpassword}>
          <label htmlFor="password"><i class="icon-shield"></i></label>
          <input type="password" onChange={changePw} name="password" placeholder = " Enter your new Password"/>
          </div> 
          
          <div className={styles.formpasswordnew}>
          <label htmlFor="password"><i class="icon-shield"></i></label>
          <input type="password" onChange={changePw} name="password" placeholder = " Confirm your new Password"/>
          </div>
          <input type="submit" value="Resetpassword" className={styles.submitresetpw} />
       

      </form>
    </div>
  );

  }
export default Resetpasswordpage;
