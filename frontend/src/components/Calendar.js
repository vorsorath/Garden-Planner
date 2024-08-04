// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SeedCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Ajoutez ici le code pour afficher les semis/plantes pour cette date
  };

  return (
    <div>
      <h2>Calendrier des Semis</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      {/* Afficher les informations relatives à la date sélectionnée */}
    </div>
  );
};

export default SeedCalendar;