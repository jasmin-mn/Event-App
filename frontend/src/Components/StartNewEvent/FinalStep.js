import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./multiStep.module.css";


function FinalStep(props) {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    getCat()
  }, [])

  const getCat = async () => {

    try {
      const result = await axios.get("http://localhost:7000/category/view");
      if (!result) {
        console.log('server error');
      }
      console.log("cat result", result.data);

      const catName = (result.data.filter((item) => item._id === props.state.category));
      console.log('catName', catName[0].name);

      setCat(catName[0].name)

    } catch (error) {
      console.log('server error');
    }
  };

  const Submit = async () => {
    const config = {
      method: "POST",
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    };

    try {
      const result = await fetch("http://localhost:7000/event/startNewEvent", {
        body: JSON.stringify(props.state),
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      // const result = await axios.post(
      //   "http://localhost:7000/event/startNewEvent",
      //   props.state,

      //   config
      // );
      console.log(345435, result);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.finalStep}>
      <div className={styles.text}>
        <p>Enter a name for your Event:{props.state.name}</p>
        <p>Upload a Photo for your Event:{props.state.photo}</p>
        <p>description:{props.state.description}</p>
        <p>Location:{props.state.location}</p>
        <p>Language:{props.state.language}</p>
        <p>Member:{props.state.member}</p>
        <p>Eventtype:{props.state.eventtype}</p>
        <p>Category:{cat}</p>
        <p>Date:{props.state.date}</p>
        <p>Time:{props.state.time}</p>
      </div>
      <div className={styles.button}>
        <button onClick={props.prev}>Previous</button>
        <button onClick={Submit}>Senden</button>
      </div>
    </div>
  );
}

export default FinalStep;
