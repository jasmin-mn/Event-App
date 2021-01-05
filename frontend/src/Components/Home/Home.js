import React from 'react'
import styles from './Home.module.css';


function Home() {
    return (
        <div className={styles.main}>

            <div className={styles.upcoming_envents}>
                <div className={styles.upcoming_envents_head}>
                    <h2> Upcoming Events</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.upcoming_envents_body}>

                </div>
            </div>


            <div className={styles.envents_by_city}>
                <div className={styles.envents_by_city_head}>
                    <h2> Events by City</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.envents_by_citys_body}>

                </div>
            </div>


            <div className={styles.envents_by_Category}>
                <div className={styles.envents_by_Category_head}>
                    <h2> Events by Category</h2>
                    <p>See all Events</p>
                </div>

                <div className={styles.envents_by_Category_body}>

                </div>
            </div>

        </div>
    )
}

export default Home