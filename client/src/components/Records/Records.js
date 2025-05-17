import React, { useContext, useEffect } from 'react';
import { Data } from '../../Context/WorkoutContext';
import {useAuthContext} from "../../Hooks/useAuthContext";
import './records.css';

const Records = () => {
  const {user} = useAuthContext();
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } = useContext(Data);
 
  useEffect(() => {
    if(user){
      getWorkouts();
    }
  }, [user, getWorkouts]);

  return (
    <div className="records-container">
      <div className="records-header">
        <h2>Your Workout Records</h2>
        <p>Track your fitness journey with these workout records</p>
      </div>

      {workouts && workouts.length > 0 ? (
        <div className="records-grid">
          {workouts.map((item) => (
            <div className="record" key={item._id}>
              <h1>{item.title}</h1>
              <p><span>Reps:</span> {item.reps}</p>
              <p><span>Load:</span> {item.load}</p>
              <div className="record-actions">
                <button className="record-btn edit-btn" onClick={() => toggleUpdate(item)}>Edit</button>
                <button className="record-btn delete-btn" onClick={() => deleteWorkout(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-records">
          No workout records found. Start adding your workouts!
        </div>
      )}
    </div>
  );
};

export default Records;