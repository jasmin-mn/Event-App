import React from "react";
import styles from "./multiStep.module.css";
export default function Date9(props) {
  return (
    <div className={styles.background}>
      <p>
        date:
        <input
          value={props.getState("date")}
          name="date"
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
