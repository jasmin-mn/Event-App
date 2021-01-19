import React from 'react'
import styles from './Home.module.css';
import axios from 'axios';



const EventView = async ({ event }) => {
    const result = await axios.get(`/viewOneEvent/${event}`);
    console.log(result);

    return (
        // <h1> EventView</h1>
        <div className={styles.events_all}>
            <img className={styles.events_bg} src={event.event_photo} alt="" />
            <p className={styles.events_date}>{event.dateEventstarted}</p>
            <p className={styles.events_name_category}>{event.event_name},
                                {event.category_id.map((category) => <>{category.name}</>)}</p>
        </div>
    )
}

export default EventView