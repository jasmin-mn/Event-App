import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function SavedEvents() {

  const [savedEvent, setSavedEvent] = useState({});
  const { eventId } = useParams();

  const getSavedEvent = async () => {

    try {
      const result = await axios
        .get(`http://localhost:7000/event/savedEvents/${eventId}`);
      console.log(result.data);

      if (result.data) {

        setSavedEvent(result.data)

      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSavedEvent();
  }, []);

  return (
    <div>
      <p>SavedEvent {eventId}</p>
      {savedEvent}
    </div>
  )
}
