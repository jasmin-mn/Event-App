import React, { useEffect, useState, useContext } from "react";
import styles from "./multiStep.module.css";



export default function EventPhoto2(props) {

  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [uploadedFile , setUploadedFile] = useState({});
  

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
