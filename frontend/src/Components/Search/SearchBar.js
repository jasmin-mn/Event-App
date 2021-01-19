import React from 'react'
import styles from './Search.module.css';

const SearchBar = (props) => {

    return (
        <form onSubmit={props.onSubmit} className={styles.search_form} >
            <label htmlFor="search"></label>
            <input name="event_name" placeholder="Search for..." />
            <input name="location" placeholder="Location..." />
            <button className={styles.btn} type="submit">Search</button>
        </form>
    );
}

export default SearchBar