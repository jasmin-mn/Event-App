import React from 'react';
import Default from "./Default";
import styles from './Home.module.css';
import axios from 'axios';


const CategoryEventView = (props) => {

    const { eventCategory } = props.match.params;
    console.log(props);

    return (
        <div>
            <h1> {eventCategory} </h1>
            <h1> Group event view page</h1>
        </div>


    )
}

export default CategoryEventView