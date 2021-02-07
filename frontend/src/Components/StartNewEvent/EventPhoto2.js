import styles from "./multiStep.module.css";
import React from 'react'



export default function EventPhoto2(props) {

  return (
    <div className={styles.background}>
      <p className={styles.text}>
        Upload your Photo:
          <input
          value={props.getState("photo")}
          name="photo"
          onChange={props.handleChange}
        />
      </p>

      <div className={styles.button}>
        <button className={styles.btn_previous} onClick={props.prev}>Previous</button>
        {props.hasNext() && <button className={styles.btn_next} onClick={props.next}>Next</button>}
      </div>
    </div>
  );
}
