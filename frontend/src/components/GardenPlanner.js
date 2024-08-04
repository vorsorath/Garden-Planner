import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialPlants = [
  { id: '1', name: 'Tomato' },
  { id: '2', name: 'Carrot' },
  { id: '3', name: 'Lettuce' },
];

function GardenPlanner() {
  const [plants, setPlants] = useState(initialPlants);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedPlants = Array.from(plants);
    const [reorderedItem] = updatedPlants.splice(result.source.index, 1);
    updatedPlants.splice(result.destination.index, 0, reorderedItem);

    setPlants(updatedPlants);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="plants">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {plants.map((plant, index) => (
              <Draggable key={plant.id} draggableId={plant.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {plant.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default GardenPlanner;
