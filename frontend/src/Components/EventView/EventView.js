import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShareButtons from '../ShareButtons/ShareButtons';
import AttendEvent from '../AttendEvent/AttendEvents';
import styles from './EventView.module.css';
import axios from 'axios';


const EventView = () => {

    const [eventDetails, setEventDetails] = useState({});
    const [attended, setAttended] = useState(false);
    const [attendBtn, setAttendBtn] = useState('Join this Event');
    const { eventId } = useParams();

    const getEventDetails = async () => {

        try {
            const result = await axios
                .get(`http://localhost:7000/event/viewOneEvent/${eventId}`);
            console.log(result.data);
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


    const getAttendEvent = async () => {
        try {
            const result = await axios
                .get(`http://localhost:7000/event/attendEvents/${eventId}`, { withCredentials: true });
            console.log("event view", result.data);
            if (result.data.user) {
                setAttended(true)
                setAttendBtn('Leave this Event')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getSaveEvent = async () => {
        try {
            const result = await axios
                .get(`http://localhost:7000/event/savedEvents/${eventId}`, { withCredentials: true });
            console.log('save event', result);
        } catch (error) {
            console.log(error);
        }
    }


    const getLeaveEvent = async () => {
        try {
            const result = await axios
                .get(`http://localhost:7000/event/leaveEvents/${eventId}`, { withCredentials: true });
            console.log('leave event', result);
        } catch (error) {
            console.log(error);
        }
    }



    return (

        <div className={styles.events_show}>

            <div>

                <img className={styles.events_show_bg} src={eventDetails.event_photo} alt="" />
                <h1>{eventDetails.event_name}</h1>
                <p>Date: {eventDetails.dateEventstarted}</p>

                <div className={styles.events_actions}>
                    <div>
                        <img className={styles.host_photo} src={eventDetails.user_id && eventDetails.user_id.photo} alt="" />
                        <p>Hosted by: {eventDetails.user_id && eventDetails.user_id.firstName} {eventDetails.user_id && eventDetails.user_id.lastName}</p>
                    </div>

                    <div>
                        <button onClick={getAttendEvent} className={styles.btn}>{attendBtn}</button>

                        <button onClick={getSaveEvent} className={styles.btn}>Save Event</button>

                        <button className={styles.btn}>Share Event</button>
                        <button onClick={getLeaveEvent} className={styles.btn}>Leave Event</button>
                    </div>
                </div>

            </div>

            <div>
                <h1>Description</h1>
                <p>{eventDetails.description}</p>

            </div>
        </div>
    )
}

export default EventView