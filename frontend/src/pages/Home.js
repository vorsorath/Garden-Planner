// src/pages/Home.js
import React from 'react';
import SeedCalendar from '../components/Calendar';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <h1>Bienvenue dans votre Planificateur de Jardin</h1>
      <SeedCalendar />
      <TaskList />
    </div>
  );
};

export default Home;