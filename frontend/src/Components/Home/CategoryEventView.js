import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import styles from './Home.module.css';
import axios from 'axios';


const CategoryEventView = (props) => {

    const { categoryId } = useParams();
    console.log(categoryId);
    console.log(props);

    const [events, setEvents] = useState();
    const [categoryName, setCategoryName] = useState();


    const getEvents = async () => {

        try {
            const result = await axios.get(`http://localhost:7000/event/viewBySelectedCategory/${categoryId}`);

            const data = result.data;

            if (data !== 0) {
                console.log(data);

                let details = data.map((event) => {

                    let category = event.category_id.map((category) => <>{category.name}</>);
                    setCategoryName(category)

                    let eventLink = `/viewOneEvent/${event._id}`

                    return (
                        <div className={styles.events_container}>
                            <div className={styles.events_all}>

                                <Link to={eventLink} >
                                    <img className={styles.events_bg} src={event.event_photo} alt="" />
                                </Link>

                                <p className={styles.events_date}>{event.dateEventstarted}</p>
                                <p className={styles.events_name_category}>{event.event_name},{category}</p>
                            </div>
                        </div>
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

            <h1> All Events in {categoryName} Category</h1>

            <div className={styles.eventsByCategory}>
                {events}
            </div>
        </div>

    )
}

export default CategoryEventView