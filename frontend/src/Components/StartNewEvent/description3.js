import React from 'react'
import styles from "./multiStep.module.css";

export default function description3(props) {

  return (

    <div className={styles.background}>

      <div>

        <p className={styles.text}>write a description:</p>

        <textarea
        className={styles.description}
          value={props.getState("description")}
          name="description"
          onChange={props.handleChange}
        />

      </div>

      <div className={styles.button}>
        <button onClick={props.prev}>Previous</button>
        {props.hasNext() && <button onClick={props.next}>Next</button>}
      </div>
    </div>
  );
}
