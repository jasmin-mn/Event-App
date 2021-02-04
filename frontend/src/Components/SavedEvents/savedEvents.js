import React, { useState, useEffect } from 'react';
import styles from './SavedEvent.module.css';
import { Link } from "react-router-dom"
import moment from "moment";

import axios from 'axios';


export default function SavedEvents() {

    const [events, setEvents] = useState([]);
    // const { eventId } = useParams();

    const getSavedEvent = async () => {

        try {
            const result = await axios
                .get(`http://localhost:7000/event/showSavedEvents`, { withCredentials: true });
            console.log(result.data);

            if (result.data !== 0) {

                let myEvents = result.data.map((event) => {

                    // console.log(event);

                    let category = event.category_id.map((category) => <>{category.name}</>);
                    let eventLink = `/viewOneEvent/${event._id}`
                    const date = moment(event.dateEventstarted).format('MMMM Do YYYY, h:mm:ss a')

                    return (
                        <Link to={eventLink} >
                            <div className={styles.events_container}>
                                <div className={styles.events_all}>
                                    <img className={styles.events_bg} src={event.event_photo} alt="" />
                                    <p className={styles.events_date}>{date}</p>
                                    <p className={styles.events_name_category}>{event.event_name},{category}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
                setEvents(myEvents)
            }


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSavedEvent();
    }, []);

    return (
        <div className={styles.main}>
            <p>SavedEvent</p>
            {events}
        </div>
    )
}
