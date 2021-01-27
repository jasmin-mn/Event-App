
import styles from "./multiStep.module.css";
import React from 'react'

export default function member6(props) {
    return (
      <div className={styles.background}>
        <p>
          member:
          <input
            value={props.getState("member")}
            name="member"
            onChange={props.handleChange}
            required={true}
          />
        </p>

        <div className={styles.button}>
          <button onClick={props.prev}>Previous</button>
          {props.hasNext() && <button onClick={props.next}>Next</button>}
        </div>
      </div>
    );
}
