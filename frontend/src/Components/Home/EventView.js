import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Home.module.css';
import axios from 'axios';


const EventView = (props) => {

    const [eventDetails, setEventDetails] = useState();

    const { eventId } = useParams();
    console.log(eventId);
    console.log(props);

    const getEventDetails = async () => {

        try {
            const result = await axios.get(`http://localhost:7000/event/viewOneEvent/${eventId}`);
            console.log(result);
            const data = result.data;

            if (data !== 0) {
                console.log(data);

                let details = data.map((event) => {

                    console.log(data);

                    let category = event.category_id.map((category) => <>{category.name}</>);

                    return (
                        <div className={styles.events_container}>
                            <div className={styles.events_all}>
                                <img className={styles.events_bg} src={event.event_photo} alt="" />
                                <p className={styles.events_date}>{event.dateEventstarted}</p>
                                <p className={styles.events_name_category}>{event.event_name},{category}</p>
                            </div>
                        </div>
                    )
                });

                setEventDetails(details)
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getEventDetails();

    }, []);


    return (
        <div>
            <h1> {eventId} </h1>
            <h1> event view page</h1>
            {eventDetails}
        </div>
    )
}

export default EventView