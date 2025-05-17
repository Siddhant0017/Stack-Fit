import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";
export const Data = createContext();

const WorkoutContext = ({ children }) => {
  const { user } = useAuthContext();
  //Get request
  const [workouts, setWorkouts] = useState(null);
  //Get Request Function
  const getWorkouts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/Workout", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = response.data;

      setWorkouts(response.data);
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };
  //post request
  const [form, setForm] = useState({ title: "", reps: "", load: "" });

  // Delete Record Function
  const deleteWorkout = async (_id) => {
    await axios.delete(`http://localhost:4000/api/Workout/${_id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    getWorkouts();
  };

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  //   Edit Button Function
  const toggleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
  };

  return (
    <>
      <Data.Provider
        value={{
          workouts,
          setWorkouts,
          getWorkouts,
          form,
          setForm,
          deleteWorkout,
          updateForm,
          setUpdateForm,
          toggleUpdate,
        }}
      >
        {children}
      </Data.Provider>
    </>
  );
};

export default WorkoutContext;
