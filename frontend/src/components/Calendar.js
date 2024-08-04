import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Calendar() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const result = await axios('/api/plants');
      setPlants(result.data);
    };

    fetchPlants();
  }, []);

  return (
    <div>
      <h2>Calendar</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant._id}>{plant.name}: Sow from {plant.sowingPeriod}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
