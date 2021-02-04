import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Login from '../Login/Login';
import ShareButtons from '../ShareButtons/ShareButtons';
import AttendEvent from '../AttendEvent/AttendEvents';
import moment from "moment";

import { ModalBoxContext } from '../ModalBox/ModalBox';

import styles from './EventView.module.css';
import axios from 'axios';
import { UserStateContext } from '../../App';



const EventView = (props) => {

    const { addModalBox } = useContext(ModalBoxContext);

    const { loggedInState } = useContext(UserStateContext)

    const [eventDetails, setEventDetails] = useState({});
    const [attended, setAttended] = useState(false);
    const [isHost, setIsHost] = useState(false);
    const { eventId } = useParams();

    const loggedIn = JSON.parse(window.localStorage.getItem("loggedIn") ? true : false);

    const getEventDetails = async () => {

        try {

            const result = await axios
                .get(`http://localhost:7000/event/viewOneEvent/${eventId}`);
            console.log('result', result.data);

            if (result.data) {

                if (result.data.user_id === loggedInState) {
                    setIsHost(true)
                }

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
        if (loggedIn) {

            try {
                const result = await axios
                    .get(`http://localhost:7000/event/attendEvents/${eventId}`, { withCredentials: true });
                console.log("event view", result.data);

                if (result.data.user) {
                    setAttended(true)
                    addModalBox(
                        <>
                            <p>Thank you for joining this Event.</p>
                        </>
                    )

                }


            } catch (error) {
                console.log(error);
            }
        } else { props.history.push("/login") }

    }

    const getLeaveEvent = async () => {

        if (loggedIn) {

            try {

                const result = await axios
                    .get(`http://localhost:7000/event/leaveEvents/${eventId}`, { withCredentials: true });
                console.log('leave event', result.data);

                if (result.data.user) {
                    setAttended(false)
                    addModalBox(
                        <>
                            <p>You have leaved this Event.</p>
                        </>
                    )
                }

            } catch (error) {
                console.log(error);
            }

        } else { props.history.push("/login") }

    }

    const getSaveEvent = async () => {
        if (loggedIn) {

            try {
                const result = await axios
                    .get(`http://localhost:7000/event/savedEvents/${eventId}`, { withCredentials: true });
                console.log('save event', result);

            } catch (error) {
                console.log(error);
            }
        } else { props.history.push("/login") }

    }

    const getDeleteEvent = () => {

    }

    const date = moment(eventDetails.dateEventstarted).format('MMMM Do YYYY, h:mm:ss a')

    return (

        <div className={styles.events_show}>

            <div className={styles.events_}>

                <img className={styles.events_show_bg} src={eventDetails.event_photo} alt="" />
                <h1 className={styles.event_name}>{eventDetails.event_name}</h1>
                <p className={styles.event_date}>Date: {date}</p>
                <hr />
                <div className={styles.events_actions}>
                    <div className={styles.host_container}>
                        <img className={styles.host_photo} src={eventDetails.user_id && eventDetails.user_id.photo} alt="" />
                        <p>Hosted by: <br /> {eventDetails.user_id && eventDetails.user_id.firstName} {eventDetails.user_id && eventDetails.user_id.lastName}</p>
                    </div>

                    <div>

                        {attended ?
                            <button onClick={getLeaveEvent} className={styles.leave_btn}>Leave Event</button>
                            :
                            <button onClick={getAttendEvent} className={styles.join_btn}>Join Event</button>
                        }

                        {isHost ?
                            <button onClick={getDeleteEvent} className={styles.save_btn}>Delete Event</button>
                            : null}

                        {/* <button onClick={getSaveEvent} className={styles.save_btn}>Save Event</button> */}

                        <button className={styles.share_btn}>Share Event</button>
                    </div>

                </div>

            </div>
            <hr />
            <div>
                <h1>Description</h1>
                <p>{eventDetails.description}</p>

            </div>
        </div>

    )
}

export default EventView