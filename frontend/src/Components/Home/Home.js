import React, { useState, useEffect } from 'react'
import styles from './Home.module.css';
import axios from "axios";


function Home() {

    const [events, setEvents] = useState();
    const [eventsByCity, setEventsByCity] = useState();
    const [eventsByCategiry, setEventsByCategiry] = useState();


    // get all Events
    const getAllEvents = async () => {
        try {
            const result = await axios.get('/event/viewAll');
            console.log('All Events:')
            console.log(result.data)

            if (result.data !== 0) {
                let myEvents = result.data.map((event) => {
                    console.log(event);
                    return (
                        <dev className={styles.events_container}>

                            <div className={styles.events_all}>
                                <img className={styles.events_bg} src={event.event_photo} alt="" />
                                <p>{event.dateEventstarted}</p>
                                <p>{event.group_name}, {event.category_id[0]}</p>
                            </div>
                        </dev>
                    )
                })
                setEvents(myEvents)
                
            }

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getAllEvents();
       
    }, []);


    // filter all Events by Location/City
    const getAEventsByCity = async () => {
        try {
            const result = await axios.get('/event/viewByCity');
            console.log('Events by Location/City:')
            console.log(result.data)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getAEventsByCity()

    }, []);


    // filter all Events by Category
    const getAEventsByCategory = async () => {
        try {
            const result = await axios.get('/event/viewByCategory');
            console.log('Events by Category:')
            console.log(result.data)

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getAEventsByCategory()

    }, []);

    return (
        <div className={styles.main}>

            <div className={styles.upcoming_envents}>
                <div className={styles.upcoming_envents_head}>
                    <h2> Upcoming Events</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.upcoming_envents_body}>
                     {events}
                </div>
            </div>


            <div className={styles.envents_by_city}>
                <div className={styles.envents_by_city_head}>
                    <h2> Events by City</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.envents_by_citys_body}>

                </div>
            </div>


            <div className={styles.envents_by_Category}>
                <div className={styles.envents_by_Category_head}>
                    <h2> Events by Category</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.envents_by_Category_body}>

                </div>
            </div>

        </div>
    )
}

export default Home