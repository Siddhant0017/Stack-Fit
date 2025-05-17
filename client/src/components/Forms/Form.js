import React from "react";
import { useContext } from "react";
import axios from "axios";
import { Data } from "../../Context/WorkoutContext";
import "./Form.css";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Form = () => {
  const { user } = useAuthContext();
  const {
    form,
    setForm,
    workouts,
    setWorkouts,
    getWorkouts,
    updateForm,
    setUpdateForm,
  } = useContext(Data);

  // Update Form Field
  const updateFormField = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Create Workout Record
  const createWorkout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/Workout",
        form,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setWorkouts([...workouts, response.data]);
      setForm({ title: "", reps: "", load: "" });
      getWorkouts();
    } catch (error) {
      console.error("Error creating workout:", error);
      // You could add user feedback for errors here
    }
  };

  // Update Record field
  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  // Cancel update and return to create form
  const cancelUpdate = () => {
    setUpdateForm({ _id: null, title: "", reps: "", load: "" });
  };

  // Update workout
  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateForm;

    try {
      await axios.patch(
        `http://localhost:4000/api/Workout/${_id}`,
        {
          title,
          reps,
          load,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      getWorkouts(); // Refresh data after update
      setUpdateForm({ _id: null, title: "", reps: "", load: "" }); // Clear update form
    } catch (error) {
      console.error("Error updating workout:", error);
      // You could add user feedback for errors here
    }
  };

  return (
    <div className="form-container">
      {/* Create form */}
      {!updateForm._id && (
        <form onSubmit={createWorkout}>
          <h1>Create Records</h1>
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={updateFormField}
              placeholder="Title"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="reps"
              value={form.reps}
              onChange={updateFormField}
              placeholder="Reps"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="load"
              value={form.load}
              onChange={updateFormField}
              placeholder="Load"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      {/* Update Form */}
      {updateForm._id && (
        <form onSubmit={updateWorkout}>
          <h1>Edit Records</h1>
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={updateForm.title}
              onChange={handleUpdateFieldChange}
              placeholder="Title"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="reps"
              value={updateForm.reps}
              onChange={handleUpdateFieldChange}
              placeholder="Reps"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="load"
              value={updateForm.load}
              onChange={handleUpdateFieldChange}
              placeholder="Load"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="update-btn">
              Update
            </button>
            <button type="button" className="cancel-btn" onClick={cancelUpdate}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
