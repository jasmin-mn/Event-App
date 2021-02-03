import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ShareButtons from '../ShareButtons/ShareButtons';
import AttendEvent from '../AttendEvent/AttendEvents';
import styles from './EventView.module.css';
import axios from 'axios';
import { UserStateContext } from '../../App';



const EventView = () => {

    const { loggedInState } = useContext(UserStateContext)

    const [eventDetails, setEventDetails] = useState({});
    const [attended, setAttended] = useState(false);
    const { eventId } = useParams();

    const getEventDetails = async () => {

        try {
            const result = await axios
                .get(`http://localhost:7000/event/viewOneEvent/${eventId}`);
            console.log('result', result.data);
            if (result.data) {

                const user = result.data.participants.includes(loggedInState)

                if (user) {
                    setAttended(true)
                }

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
                // alert("thank you for joining this Event")
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getLeaveEvent = async () => {
        try {
            const result = await axios
                .get(`http://localhost:7000/event/leaveEvents/${eventId}`, { withCredentials: true });
            console.log('leave event', result.data);

            if (result.data.user) {
                setAttended(false)
                // alert("you have leaved this Event")
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

            // alert("this Event have been saved")

        } catch (error) {
            console.log(error);
        }
    }




    // const date = eventDetails.dateEventstarted.toLocaleDateString()

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
                        {attended ?
                            <button onClick={getLeaveEvent} className={styles.leave_btn}>Leave Event</button>
                            :
                            <button onClick={getAttendEvent} className={styles.join_btn}>Join Event</button>
                        }

                        <button onClick={getSaveEvent} className={styles.save_btn}>Save Event</button>

                        <button className={styles.share_btn}>Share Event</button>
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