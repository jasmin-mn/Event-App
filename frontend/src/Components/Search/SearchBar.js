import React from 'react'
import Search from './Search'
import styles from './Search.module.css';

const SearchBar = () => {

    return (
        <form className={styles.search_form} >
            <label htmlFor="search"></label>
            <input name="event" placeholder="Search for..." />
            <input name="location" placeholder="Location..." />
            <button className={styles.btn} type="submit">Search</button>
        </form>
    );
}

export default SearchBar