
import styles from "./multiStep.module.css";

import React from 'react'

export default function Eventtype7(props) {
    return (
      <div className={styles.background}>
        <form>
          Eventtype:
          <input
            type="radio"
            value="Online"
            name="eventtype"
            onChange={props.handleChange}
          />
          <input
            type="radio"
            value="Present"
            name="eventtype"
            onChange={props.handleChange}
          />
        </form>

        <div className={styles.button}>
          <button onClick={props.prev}>Previous</button>
          {props.hasNext() && <button onClick={props.next}>Next</button>}
        </div>
      </div>
    );
}
