import axios from "axios";
import React from "react";
import styles from "./multiStep.module.css";


function FinalStep(props) {
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
        <p>Category:{props.state.category}</p>
        <p>date:{props.state.date}</p>
      </div>
      <div className={styles.button}>
        <button onClick={props.prev}>Previous</button>
        <button onClick={Submit}>Senden</button>
      </div>
    </div>
  );
}

export default FinalStep;
