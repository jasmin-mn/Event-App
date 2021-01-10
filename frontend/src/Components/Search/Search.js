import React, { useState, useEffect } from 'react'
import styles from './Search.module.css';
import axios from "axios";

function Search() {

    const [events, setEvents] = useState();


    const getEvents = async () => {
        try {
            const result = await axios.get('/event/search');
            console.log('Search Events:')
            console.log(result.data)

            if (result.data !== 0) {
                let mySearch = result.data.map((event) => {
                    // console.log(event);
                    return (
                        <div className={styles.events_container}>

                            <div className={styles.events_all}>
                                <img className={styles.events_bg} src={event.event_photo} alt="" />
                                <p>{event.dateEventstarted}</p>

                                <p>{event.event_name},
                                {event.category_id.map((category) => <>{category.name}</>)}</p>
                            </div>
                        </div>
                    )
                })
                setEvents(mySearch)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getEvents();
    }, []);


    return (
        <div className={styles.upcoming_envents}>

            <div className={styles.upcoming_envents_body}>
                {/* <h2> Upcoming Events</h2> */}

                {events}
            </div>
        </div>
    )

}




export default Search