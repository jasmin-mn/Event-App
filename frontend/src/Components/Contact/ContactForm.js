import React, { useState } from 'react';
import styles from './Contact.module.css';


const ContactForm = () => {

    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending...");

        const { name, phone, email, subject, message } = e.target.elements;

        let details = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };
        
        let response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");

        let result = await response.json();
        
        alert(result.status);
    };

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>

            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>

            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" />
            </div>

            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>

            <button className={styles.btn} type="submit">{status}</button>

        </form>
    );
};

export default ContactForm;
