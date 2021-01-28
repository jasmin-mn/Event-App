import React from 'react'
import styles from "./multiStep.module.css";
export default function language5(props) {
    return (
      <div className={styles.background}>
        <p className={styles.text}>
          Language
          <input
            value={props.getState("language")}
            name="language"
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
