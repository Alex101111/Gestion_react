import React, { useState } from 'react';
import MyButton from './buttons/MyButton';

const Goals = () => {
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const [editIndex, setEditIndex] = useState(null);

  const handleButtonClick = () => {
    if (newGoal.trim() !== '') {
      if (editIndex !== null) {
        const updatedGoals = [...goals];
        updatedGoals[editIndex] = newGoal;
        setGoals(updatedGoals);
        setEditIndex(null);
      } else {
        setGoals([...goals, newGoal]);
      }
      setNewGoal('');
    }
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const handleEditGoal = (index) => {
    setEditIndex(index);
    setNewGoal(goals[index]);
  };

  return (
    <div>
      <h1>Sample Goals List</h1>
      <MyButton onClick={handleButtonClick} label={editIndex !== null ? "Edit Goal" : "Add Goal"} />
      <input
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="Enter a new goal"
      />
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
              />
            ) : (
              goal
            )}
            {index === editIndex ? (
              <MyButton onClick={() => handleButtonClick()} label="Save" />
            ) : (
              <button onClick={() => handleEditGoal(index)}>Edit</button>
            )}
            <button onClick={() => handleDeleteGoal(index)} style={{ color: 'red', padding: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
