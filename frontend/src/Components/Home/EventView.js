import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Home.module.css';
import axios from 'axios';


const EventView = () => {

    const [eventDetails, setEventDetails] = useState({});
    const { eventId } = useParams();

    const getEventDetails = async () => {

        try {
            const result = await axios.get(`http://localhost:7000/event/viewOneEvent/${eventId}`);
  
            if (result.data) {
                setEventDetails(result.data)
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
         getEventDetails();

    }, []);

    return (
        <div>
            <h1> {eventId} </h1>
            <h1> event view page</h1>

            {eventDetails.event_name}
            {eventDetails.event_name}

        </div>
    )
}

export default EventView