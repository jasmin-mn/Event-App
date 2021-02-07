import React, {useState, createContext } from 'react'
import styles from './ProfileModal.module.css'

export const ModalBoxContext = createContext()

export default function ProfileModal(props){
    const [modalB, setModalB] = useState([])
    const addMB = (msg) =>{
        setModalB([...modalB], msg)
        setTimeout(()=>{
            setModalB([...modalB.slice(1)])
        }, 3000)
    }

    return(
        <ModalBoxContext.Provider value ={{addMB}}>
            {modalB.map((noti)=>{
                return (
                    <> 
                    <div id= "mb" className={styles.modal}>
                        <div className={styles.modalContent}>
                            <span className={styles.close}>&times;</span>
                            <p className={styles.box}>{noti}</p>

                        </div>
                        
                    </div>
                    </>
                )
            })}
            {props.childen}

            </ModalBoxContext.Provider>

    )
}