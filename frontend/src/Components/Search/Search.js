import React, { useState, useEffect } from 'react'
import styles from './Search.module.css';
import axios from "axios";

function Search() {

    const [events, setEvents] = useState();


    const getEvents = async (e) => {
        // e.preventDefault();

        try {
            const result = await axios.get('/search');
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
        <div className={styles.search}>

            <p>Search for your next Event</p>

            <form className={styles.search_form}>

                <label htmlFor="search"></label>
                <input name="event" placeholder="Search for..." value='' />
                <input name="location" placeholder="Location..." value='' />

                <button
                    className={styles.btn}
                    onSubmit={getEvents}
                    type="submit">Search</button>

            </form>

            <>{events}</>

        </div>
    );


}




export default Search