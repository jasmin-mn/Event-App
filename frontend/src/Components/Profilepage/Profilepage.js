import React, { useEffect, useState } from "react";
import styles from "./Profilepage.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Profilepage(e) {
  // delete 
  const [deleteId, setDeleteId] = useState()

  useEffect(()=>{
    getData() 

  },[])
   const getData = async(deleteData)=>{
     const response = await axios.get("http://localhost:7000/user/profile")
     setDeleteId(response.data)
   }
  

   const removeData = (id)=>{
     axios.delete("http://localhost:7000/user/deleteAccount").then(response =>{
       const del = deleteId.filter(deleteId=> id !== deleteId.id )
       setDeleteId(del)

     })
   }

   const renderHeader = (e)=>{
    const headerElement = ['id','email']
    
   }
// end of delete part
  const [userData, setUserData] = useState({
    photo: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    place: "",
    hometown: "",
    gender: "",
    language: "",
    yourInterests: "",
    other: "",
  });
  

  const {
    photo,
    userName,
    firstName,
    lastName,
    email,
    age,
    place,
    hometown,
    gender,
    language,
    yourInterests,
    others,
  } = userData;
  const getUser = async (update) => {
    const config = {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    };

    const response = await axios.get(
      "http://localhost:7000/user/profile",
      config
    );
    console.log(response.data);

    setUserData(response.data.user);
  };
  useEffect(() => {
    getUser();
  }, []);
  
  const history = useHistory();

  const editRegister = async (updateData) => {
    const config = {
      withCredentials: true,
      headers: { 
                 "Content-Type" :"application/json"
    },
    };
    try {
      const result = await axios.post(
        "http://localhost:7000/user/profileUpdate",

        updateData,
        config
      );
      console.log(result);
      localStorage.setItem("registered", JSON.stringify(true));
    } catch (error) {
      console.log(error);
    } 
  };
  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) =>{
    setUserData({...userData, photo: e.target.files[0]});
    console.log(userData.photo);
  }
  const handleUpdate = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('photo',userData.photo)
   
    try {
      editRegister(userData);
      // const registered = localStorage.getItem("registered");
      // registered = JSON.parse(registered);
      

      // console.log(registered);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.profilecontainer}>
      <h1 className={styles.profileheader}>Profile</h1>

      <div className={styles.deletecontainer}>
        <p>
          Are you sure you wanted to delete your account? <br />If you choose to
          delete your account, you have to register again.
        </p>
        <button
          onClick={removeData}
          className={styles.deletecontainer1}
        >
          Delete Account
        </button>
      </div>

      <form onSubmit={handleUpdate} className={styles.profileform} encType='multipart/form-data'>
        <div className={styles.photo} > Click to upload Image
        { userData.photo && <img src={`"${userData.photo.name}"`} /> }
        <input className={styles.photoInput}
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
        // value={photo}
        
        />

        </div>
        <div className={styles.formusername}>
          <label htmlFor="userName">User name</label>
          <input 
            type="text"
            name="userName"
            onChange={changeHandler}
            value={userName}
          />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            onChange={changeHandler}
            value={firstName}
          />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            onChange={changeHandler}
            value={lastName}
          />
        </div>

        <div className={styles.formgroupgender}>
          <input
            type="radio"
            name="gender"
            onChange={changeHandler}
            value={gender}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className={styles.formgroupgender}>
          <input
            type="radio"
            name="gender"
            onChange={changeHandler}
            value={gender}
          />
          <label htmlFor="female">Male</label>
        </div>
        <div className={styles.formgroupgender}>
          <input
            type="radio"
            name="gender"
            onChange={changeHandler}
            value={gender}
          />
          <label htmlFor="female">N/A</label>
        </div>

        <div className={styles.formemail}>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={email}
          />
        </div>

        <div className={styles.formdate}>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" onChange={changeHandler} value={age} />
        </div>
        <div className={styles.formplace}>
          <label htmlFor="place">Place</label>
          <input
            type="text"
            name="place"
            onChange={changeHandler}
            value={place}
          />
        </div>
        <div className={styles.formhometown}>
          <label htmlFor="hometown">Hometown</label>
          <input
            type="text"
            name="hometown"
            onChange={changeHandler}
            value={hometown}
          />
        </div>
        <div className={styles.formlang}>
          <label htmlFor="language">Language</label>
          <input
            type="text"
            name="language"
            onChange={changeHandler}
            value={language}
          />
        </div>
        <div className={styles.forminterest}>
          <label htmlFor="yourInterests">Your Interests</label>
          <input
            type="text"
            name="yourInterests"
            onChange={changeHandler}
            value={yourInterests}
          />
        </div>
        <div className={styles.formothers}>
          <label htmlFor="others">Others</label>
          <input
            type="text"
            name="others"
            onChange={changeHandler}
            value={others}
          />
        </div>
        <input type="submit" value="Save" className={styles.submitregister} />
      </form>
    </div>
  );
}

export default Profilepage;
