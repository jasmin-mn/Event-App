import React, { useState, useEffect } from 'react'
import styles from './Search.module.css';
import axios from "axios";

function Search() {

    const [events, setEvents] = useState();


    const getEvents = async (searchEvents) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const result = await axios.post('/search', searchEvents, config);
            console.log('Search Events:')
            console.log(result.data)

            if (result.data !== 0) {
                let mySearch = result.data.map((event) => {
                    console.log(event);
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


    const handelSubmit = (events) => {
        events.preventDefault();

        const formData = new FormData(events.target)
        const data = {
            event: formData.get("event"),
            location: formData.get("location")
        }

        try {
            getEvents(data)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className={styles.search}>

            <p>Search for your next Event</p>

            <form onSubmit={handelSubmit} className={styles.search_form} >

                <label htmlFor="search"></label>
                <input name="event" placeholder="Search for..." />
                <input name="location" placeholder="Location..." />

                <button className={styles.btn} type="submit">Search</button>

            </form>

            <>{events}</>

        </div>
    );
}




export default Search