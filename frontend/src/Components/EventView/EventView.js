import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShareButtons from '../ShareButtons/ShareButtons';
import styles from './EventView.module.css';
import axios from 'axios';


const EventView = () => {

    const [eventDetails, setEventDetails] = useState({});
    const { eventId } = useParams();

    const getEventDetails = async () => {

        try {
            const result = await axios.get(`http://localhost:7000/event/viewOneEvent/${eventId}`);
            console.log(result.data);
            if (result.data) {

                setEventDetails(result.data)

            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEventDetails();

    }, []);


    return (

        <div className={styles.events_show}>

            <div>

                <img className={styles.events_show_bg} src={eventDetails.event_photo} alt="" />
                <h1>{eventDetails.event_name}</h1>
                <p>Date: {eventDetails.dateEventstarted}</p>

                <div className={styles.events_actions}>
                    <div>
                        <img className={styles.host_photo} src={eventDetails.user_id && eventDetails.user_id.photo} alt="" />
                        <p>Hosted by: {eventDetails.user_id && eventDetails.user_id.firstName} {eventDetails.user_id && eventDetails.user_id.lastName}</p>
                    </div>

                    <div>
                        <Link><button className={styles.btn}>Attend Event</button></Link>
                        <Link><button className={styles.btn}>Save Event</button></Link>
                        <Link to={ShareButtons}><button className={styles.btn}>Share Event</button></Link>
                    </div>
                </div>

            </div>

            <div>
                <h1>Description</h1>
                <p>{eventDetails.description}</p>

            </div>
        </div>
    )
}

export default EventView