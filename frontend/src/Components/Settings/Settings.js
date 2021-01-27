import React, {useState, useEffect} from "react";
import styles from "./Settings.module.css";
import axios from "axios";

const Settings = () => {
  const [deleteId, setDeleteId] = useState()

  useEffect(()=>{
    getData() 

  },[])
   const getData = async()=>{
     const response = await axios.get("http://localhost:7000/user/profile")
     setDeleteId(response.data)
   }

   const removeData = (id)=>{
     axios.delete(`${"http://localhost:7000/user/deleteAccount"}/${id}`).then(response =>{
       const del = deleteId.filter(deleteId=> id !== deleteId.id )
       setDeleteId(del)

     })
   }

  //  const renderHeader = (e)=>{
  //   const config = {
  //     headers: {
  //       'Authorization': "authorizationToken"
  //     }
  //   };
  //  }

  return (
    <div className={styles.containersetting}>
      {" "}
      Settings
      <div className={styles.deletecontainer}>
        <p>
          Are you sure you wanted to delete your account? If you choose to
          delete your account, you have to register again.
        </p>
        <button
          onClick={removeData}
          className={styles.deletecontainer1}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
