import React from 'react'
import styles from './Profilepage.module.css';
import {useHistory}from "react-router-dom"
import axios from 'axios'





function Profilepage(e) {
    const history=useHistory();
    const editRegister = async(updateData)=>{
        console.log(e);
        const config = {
            'Content-Type': 'application/json'

        }
        try{
            const result =  await axios.post('/user/profileUpdate', updateData, config )
            console.log(result);
            localStorage.setItem("registered", JSON.stringify(true))
            
            history.push('/profile/:id')
        }
        catch(error){
            alert(error.response.data.msg);
        } //
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data=  {
            userName:formData.get("userName"),
            firstName:formData.get("firstName"),
            lastName:formData.get("lastName"),
            email:formData.get("email"),
            gender:formData.get("gender"),
            dateOfBirth:formData.get("dateOfBirth"),
            place:formData.get("place"),
            hometown:formData.get("hometown"),
            language:formData.get("language"),
            yourInterests:formData.get("language"),
            othersyourInterests:formData.get("others")


        }
        
        try{
            editRegister(data)
            // const registered = localStorage.getItem("registered")
            // registered = JSON.parse(registered)
            
            // console.log(registered);

        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <div className={styles.profilecontainer}> 
            <h1 className={styles.profileheader}>Profile</h1> 
            <form onSubmit={handleUpdate} className={styles.profileform}>
                 <div className={styles.formusername}>
                    <label htmlFor="userName">User name</label>
                    <input type="text" name="userName"    />
                </div>

               <div className={styles.formgroup}>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName"    />
                </div>

               <div className={styles.formgroup}>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName"    />
                </div>

                 <div className={styles.formgroupgender}>
                    <input type="radio" name="female" value="Female" />
                    <label htmlFor="female">Female</label>
                    </div>
                    <div className={styles.formgroupgender}>
                    <input type="radio" name="male" value="Male" />
                    <label htmlFor="female">Male</label>
                    </div>
                    <div className={styles.formgroupgender}>
                    <input type="radio" name="N/A" value="N/A" />
                    <label htmlFor="female">N/A</label>
                </div>

                <div className={styles.formemail}>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email"  />
                </div>

                <div className={styles.formdate}>
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <input type="text" name="dateOfBirth"  />
                </div>
                <div className={styles.formplace}>
                    <label htmlFor="place">Place</label>
                    <input type="text" name="place"  />
                </div>
                <div className={styles.formhometown}>
                    <label htmlFor="hometown">Hometown</label>
                    <input type="text" name="hometown"  />
                </div>
                <div className={styles.formlang}>
                    <label htmlFor="language">Language</label>
                    <input type="text" name="language"  />
                </div>
                <div className={styles.forminterest}>
                    <label htmlFor="yourInterests">Your Interests</label>
                    <input type="text" name="yourInterests"  />
                </div>
                <div className={styles.formothers}>
                    <label htmlFor="others">Others</label>
                    <input type="text" name="others" />
                </div>
                <input type="submit" value="Save" className={styles.submitregister} />
            </form>

            
        </div>
    )
}

export default Profilepage

