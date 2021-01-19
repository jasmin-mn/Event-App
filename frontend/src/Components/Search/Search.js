import React, { useState, useEffect, useContext } from 'react'
import SearchBar from './SearchBar';
import styles from './Search.module.css';
import axios from "axios";
// import { NotificationsContext } from '../Notifications/Notifications';

const Search = () => {

    const [events, setEvents] = useState([]);
    const [serchInputs, setSerchInputs] = useState(true);

    // const { addNotificationToQueue } = useContext(NotificationsContext);

    const getEvents = async (searchEvents) => {

        const config = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' }
        }

        try {
            const result = await axios.post('http://localhost:7000/search', searchEvents, config);
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
                });

                setEvents(mySearch)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)
        const data = {
            event_name: formData.get("event_name"),
            location: formData.get("location")
        }

        console.log(data);


        try {
            if (data.event_name === "" && data.location === "") {

                // addNotificationToQueue("Unfortunately, no events were found.")
                setEvents([])
                setSerchInputs(false)

            } else {
                setSerchInputs(true)
                getEvents(data)
            }

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <div className={styles.search}>
                <p>Search for your next Event</p>
                <SearchBar onSubmit={handleSubmit} />
            </div>


            <div className={styles.search_results}>
                {!serchInputs && 'Unfortunately, no events were found.'}
                {events}

            </div>
        </>
    );
}

export default Search