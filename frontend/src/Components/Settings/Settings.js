import React from 'react'
import styles from './Settings.module.css'
import axios from 'axios';

const Settings = (e)=> {

    const deleteAccount = async(info)=>{
        const config = {
            headers: {
                'Authorization': 'authorizationToken'
            }
        }

    
    
    try {
        const result = await axios.delete('http://localhost:7000/user/deleteAccount/:id', info, config)
            console.log(result)
            // setLoggedIn(true)
    } catch (error) {
        console.log(error);
        
    }
}

    const handleDeleteSubmit = async(e)=>{
        e.preventDefault();
        const userDelete = new userDelete(e.target)
        // const dataDelete= {
        //     _id:userDelete.remove("email")
            

        // }

    }
    try {
        deleteAccount()
        
    } catch (error) {
        
    }


    return (
        <div className={styles.containersetting}> Settings
            <div className={styles.deletecontainer}> 
            <p>Are you sure you wanted to delete your account?
                If you choose to delete your account, you 
                have to register again.</p>
            <button onClick={handleDeleteSubmit}className={styles.deletecontainer1}>Delete Account</button>
            </div>
            
        </div>
    )
}

export default Settings;
