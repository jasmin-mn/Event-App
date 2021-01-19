import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import styles from './Search.module.css';
import axios from "axios";

const Search = () => {

    const [events, setEvents] = useState();

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
                })
                setEvents(mySearch)
            }
            // else {
            //     return <p> Unfortunately, no events were found. <br />Try another keyword </p>
            // }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEvents();
    }, []);


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
                return <p> Unfortunately, no events were found. <br />Try another keyword </p>
            } else {
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

                {events}
            </div>
        </>
    );
}

export default Search