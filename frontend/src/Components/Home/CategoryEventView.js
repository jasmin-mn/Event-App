import React from 'react';
import { useParams } from 'react-router-dom';

import Default from "./Default";
import styles from './Home.module.css';
import axios from 'axios';


const CategoryEventView = (props) => {

    const { eventCategory } = useParams();
    console.log(eventCategory);
    console.log(props);

    return (
        <div>
            <h1> {eventCategory} </h1>
            <h1>  eventCategory view page</h1>
        </div>


    )
}

export default CategoryEventView