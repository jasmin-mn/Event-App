import React from 'react';
import { useParams } from 'react-router-dom';
import Default from "./Default";
import styles from './Home.module.css';
import axios from 'axios';


const EventView = (props) => {

    const { eventId } = useParams();
    console.log(eventId);
    console.log(props);

    return (
        <div>
            <h1> {eventId} </h1>
            <h1> event view page</h1>

        </div>

        // <div className={styles.events_all}>
        //     <img className={styles.events_bg} src={event.event_photo} alt="" />
        //     <p className={styles.events_date}>{event.dateEventstarted}</p>
        //     <p className={styles.events_name_category}>
        //         {event.event_name},{event.category_id.map((category) => <>{category.name}</>)}</p>
        // </div>
    )
}

export default EventView