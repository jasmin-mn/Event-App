import React from 'react'
import styles from "./multiStep.module.css";
export default function location4(props) {
    return (
      <div className={styles.background}>
        <p>
          Location
          <input
            value={props.getState("location")}
            language="location"
            onChange={props.handleChange}
          />
        </p>
        <div className={styles.button}>
          <button onClick={props.prev}>Previous</button>
          {props.hasNext() && <button onClick={props.next}>Next</button>}
        </div>
      </div>
    );
}
