// src/components/GardenPlan.js
import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const GardenPlan = () => {
  return (
    <div>
      <h2>Créez votre Plan de Jardin</h2>
      <CanvasDraw
        brushColor={"green"}
        brushRadius={5}
        lazyRadius={0}
      />
    </div>
  );
};

export default GardenPlan;