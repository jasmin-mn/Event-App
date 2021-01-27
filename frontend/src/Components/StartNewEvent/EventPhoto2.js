import styles from "./multiStep.module.css";

import React from 'react'

export default function EventPhoto2(props) {
    return (
      <div className={styles.background}>
        <p>
          Upload your Photo:
          <input
            value={props.getState("photo")}
            name="photo"
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
