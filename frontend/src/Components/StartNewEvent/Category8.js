import React from 'react'
import styles from "./multiStep.module.css";
export default function Category8(props) {
    return (
      <div className={styles.background}>
        <p>
          Categories:
          <input
            value={props.getState("category")}
            name="category"
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
