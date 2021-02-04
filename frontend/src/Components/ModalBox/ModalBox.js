import React, { useState, createContext } from 'react'
import styles from './ModalBox.module.css';


export const ModalBoxContext = createContext();

export default function ModalBox(props) {

    const [modalBox, setModalBox] = useState([]);

    const addModalBox = (message) => {

        setModalBox([...modalBox, message]);

        setTimeout(() => {
            setModalBox([...modalBox.slice(1)]);
        }, 6000);
    };

    return (
        <ModalBoxContext.Provider value={{ addModalBox }}>

            {modalBox.map((msg) => {

                return (
                    <>
                        <div id="myModal" className={styles.modal}>

                            <div className={styles.modalContent}>
                                <span classN={styles.close}>&times;</span>
                                <p className={styles.modalBox}>{msg}</p>
                            </div>

                        </div>
                    </>
                )
            })}

            {props.children}

        </ModalBoxContext.Provider>
    )
}


