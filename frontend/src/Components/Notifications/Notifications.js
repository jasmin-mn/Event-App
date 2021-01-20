import React, { useState, createContext } from 'react'
import styles from './Notifications.module.css';


export const NotificationsContext = createContext();

export default function Notifications(props) {

    const [notifications, setNotifications] = useState([]);

    const addNotificationToQueue = (message) => {

        setNotifications([...notifications, message]);
        
        setTimeout(() => {
            setNotifications([...notifications.slice(1)]);
        }, 3000);
    };

    return (
        <NotificationsContext.Provider value={{ addNotificationToQueue }}>
            {notifications.map((msg) => {
                return (
                    <p className={styles.notifications}>{msg}</p>
                )
            })}
            {props.children}
        </NotificationsContext.Provider>
    )
}


