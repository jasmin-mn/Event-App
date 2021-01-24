import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Home.module.css';
import axios from 'axios';


const EventView = () => {

    const [eventDetails, setEventDetails] = useState({});
    const { eventId } = useParams();

    const getEventDetails = async () => {

        try {
            const result = await axios.get(`http://localhost:7000/event/viewOneEvent/${eventId}`);

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

    // const { firstName, lastName, photo } = eventDetails.user_id._id;

    return (
        <div className={styles.events_show}>

            <div>

                <img className={styles.events_show_bg} src={eventDetails.event_photo} alt="" />
                <h1>{eventDetails.event_name}</h1>
                <p>Date: {eventDetails.dateEventstarted}</p>

                <div className={styles.events_actions}>
                    <div>
                       Host_photo {/* <img className={styles.host_photo} src={photo} alt="" />
                        <p>Hosted by: {firstName} {lastName}</p> */}
                    </div>

                    <div>
                        <button className={styles.btn}>Join</button>
                        <button className={styles.btn}>Save</button>
                        <button className={styles.btn}>Share</button>
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