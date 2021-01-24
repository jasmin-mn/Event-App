import React , {useEffect,useState} from 'react'
import styles from './Profilepage.module.css';
import {useHistory }from "react-router-dom"
import axios from 'axios'
// import {useForm} from "react-hook-form"


function Profilepage(e) {
    const [userData,setUserData] = useState({})
    const getUser = async()=>{
         
        
        
            // const res = await axios.get('http://localhost:7000/user/profile' , { withCredentials: true })
            // console.log('res : ',res);

         const response = await   fetch(
                'http://localhost:7000/user/profile',
                { credentials: 'include' } // could also try 'same-origin'
              )
              const data = await response.json();

              
              setUserData(data.user)
              console.log(data);
           
                
           
                
              
              
            
         


    }
    useEffect(()=>{
      getUser()
    },[])
    // const {register, handleUpdate} = useForm({ defaultValues: formData})
    const history=useHistory();

    const editRegister = async(updateData)=>{
        
        const config = {
            'Content-Type': 'application/json'
          
        }
        try{
            
            const result =  await axios.post('/user/profileUpdate', updateData, config )
            console.log(result);
            localStorage.setItem("registered", JSON.stringify(true))
            
            // history.push('/profile/:id')
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

            gender:formData.get("Female"),

            gender:formData.get("gender"),

            age:formData.get("age"),
            place:formData.get("place"),
            hometown:formData.get("hometown"),
            language:formData.get("language"),
            yourInterests:formData.get("yourInterests"),
            others:formData.get("others")


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
                    <input type="text" name="userName" value={(typeof userData.userName != 'undefined' ? userData.userName : '')} />
                </div>

               <div className={styles.formgroup}>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" lastName value={(typeof userData.firstName != 'undefined' ? userData.firstName : '')}     />
                </div>

               <div className={styles.formgroup}>
                    <label htmlFor="lastName">Last name</label>
                    <input  type="text" name="lastName" value={(typeof userData.lastName != 'undefined' ? userData.lastName : '')}     />
                </div>

                 <div className={styles.formgroupgender}>
                    <input  type="radio" name="gender" value="Female" />
                    <label htmlFor="female">Female</label>
                    </div>
                    <div className={styles.formgroupgender}>
                    <input type="radio" name="gender" value="Male" />
                    <label htmlFor="female">Male</label>
                    </div>
                    <div className={styles.formgroupgender}>
                    <input  type="radio" name="gender" value={(typeof userData.gender != 'undefined' ? userData.gender : '')}  />
                    <label htmlFor="female">N/A</label>
                </div>

                <div className={styles.formemail}>
                    <label htmlFor="email">Email Address</label>
                    <input  type="text" name="email" value={(typeof userData.email != 'undefined' ? userData.email : '')}   />
                </div>

                <div className={styles.formdate}>
                    <label htmlFor="age">Age</label>

                    <input type="text" name="age" value={(userData.user && userData.user.age)} />

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

