import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import styles from './Home.module.css';
import axios from 'axios';


const LocationEventView = (props) => {

    const { eventLocation } = props.match.params;
    console.log(props);
    console.log(eventLocation);

    const [events, setEvents] = useState();


    const getEvents = async () => {

        try {
            const result = await axios.get(`http://localhost:7000/event/viewBySelectedLocation/${eventLocation}`);

            const data = result.data;

            if (data !== 0) {

                let details = data.map((event) => {

                    // console.log(event);

                    let category = event.category_id.map((category) => <>{category.name}</>);

                    let eventLink = `/viewOneEvent/${event._id}`

                    return (
                        <Link to={eventLink} >
                            <div className={styles.events_container}>
                                <div className={styles.events_all}>
                                    <img className={styles.events_bg} src={event.event_photo} alt="" />
                                    <p className={styles.events_date}>{event.dateEventstarted}</p>
                                    <p className={styles.events_name_category}>{event.event_name},{category}</p>
                                </div>
                            </div>
                        </Link>
                    )
                });

                setEvents(details)
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getEvents();

    }, []);


    return (
        <div className={styles.main}>

            <h1> All Events in {eventLocation} </h1>

            <div className={styles.eventsByLocation}>
                {events}
            </div>

        </div>
    )
}

export default LocationEventView