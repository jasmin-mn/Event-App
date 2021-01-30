import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import styles from './Home.module.css';
import axios from "axios";


function HomeDefault() {

    const [events, setEvents] = useState();
    const [eventsByCity, setEventsByCity] = useState();
    const [eventsByCategory, setEventsByCategory] = useState();


    // get all Events
    const getAllEvents = async () => {

        try {
            const result = await axios.get('http://localhost:7000/event/viewAll');
            console.log('All Events:')
            console.log(result.data)

            if (result.data !== 0) {

                let myEvents = result.data.map((event) => {

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
                })
                setEvents(myEvents)
            }

        } catch (error) {
            console.log(error);
        }
    }



    // filter all Events by Location/City
    const getEventsByCity = async () => {
        try {
            const result = await axios.get('http://localhost:7000/event/viewByCity');
            console.log('Events by Location/City:')
            console.log(result.data)

            if (result.data !== 0) {
                let myEvents = result.data.map((event) => {
                    console.log(event);

                    const eventLink = `/viewBySelectedLocation/${event._id.location}`

                    return (
                        <Link to={eventLink} >
                            <div className={styles.events_container}>

                                <div className={styles.events_by_city}>
                                    <img className={styles.events_by_city_bg} src={event.event_photo} alt="" />
                                    <p className={styles.location_text}>{event._id.location}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
                setEventsByCity(myEvents)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // filter all Events by Category
    const getEventsByCategory = async () => {
        try {
            const result = await axios.get('http://localhost:7000/event/viewByCategory');
            //console.log('Events by Category:')
            console.log(88888, result.data)

            if (result.data && result.data.length !== 0) {
                const test = [1, 2].map(() => {
                    return (<h1>najbeen</h1>)
                });
                const myEvents = result.data.map((event) => {

                    const { _id, name, photo } = event._id[0];
                    const eventLink = `/viewBySelectedCategory/${_id}`;
                    console.log(1233434444, event);

                    return (
                        <Link to={eventLink} >
                           <div className={styles.events_container}>
                                <div className={styles.events_by_category}>
                                    <img className={styles.events_by_category_bg} src={photo} alt="" />
                                     <p className={styles.category_text}>{name}</p>
                                  </div>
                               </div>
                           </Link> 
                    )
                });
                console.log(1233, myEvents);
                setEventsByCategory(myEvents)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllEvents();
        getEventsByCity()
        getEventsByCategory()
    }, []);

    useEffect(() => {
        console.log(55675, eventsByCategory);
    }, [eventsByCategory])


    return (
        <>
            <div className={styles.upcoming_events}>
                <div className={styles.upcoming_events_head}>
                    <h2> Upcoming Events</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.upcoming_events_body}>
                    {events}
                </div>
            </div>


            <div className={styles.events_by_city}>
                <div className={styles.events_by_city_head}>
                    <h2> Events by Location</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.events_by_citys_body}>
                    {eventsByCity}
                </div>
            </div>


            <div className={styles.events_by_Category}>
                <div className={styles.events_by_Category_head}>
                    <h2> Events by Category</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.events_by_Category_body}>
                    {eventsByCategory}
                </div>
            </div>
        </>
    )
}

export default HomeDefault