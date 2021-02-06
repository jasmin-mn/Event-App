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

      <div className={styles.finalShow1}>
        <div className={styles.finalShow2}>
          <h4>Event name:{props.state.name}</h4>
          <h4>Event Photo:{props.state.photo}</h4>
          <h4>Location:{props.state.location}</h4>
          <h4>Language:{props.state.language}</h4>
          <h4>No. Member:{props.state.member}</h4>
          <h4>Event Type:{props.state.eventtype}</h4>
          <h4>Category:{cat}</h4>
          <h4>Date:{props.state.date}</h4>
          <h4>Time:{props.state.time}</h4>
        </div>
        <h4>Description:{props.state.description}</h4>
      </div>

      <div className={styles.button}>
        <button onClick={props.prev}>Previous</button>
        <button onClick={Submit}>Save</button>
      </div>
    </div>
  );
}

export default FinalStep;
