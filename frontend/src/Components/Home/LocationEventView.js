import React from 'react';
import Default from "./Default";
import styles from './Home.module.css';
import axios from 'axios';


const LocationEventView = (props) => {

    const { eventLocation } = props.match.params;
    console.log(props);

    return (
        <div>
            <h1> {eventLocation} </h1>
            <h1> eventLocation view page</h1>
        </div>


    )
}

export default LocationEventView