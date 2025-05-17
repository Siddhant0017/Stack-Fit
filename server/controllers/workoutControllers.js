const Workout = require("../models/workoutModels");

//Get All Data
const getWorkouts = async (req, res) => {
  try {
    const WorkoutData = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(WorkoutData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get single Data
const getSingleWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const WorkoutData = await Workout.findOne({ _id: id });

    res.status(200).json(WorkoutData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Create Workouts
const createWorkout = async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    const workout = await newWorkout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Update Workouts
const updateWorkout = async (req, res) => {
  try {
    const id = req.params.id;

    const workoutData = await Workout.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Delete Workouts
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;

    const workoutData = await Workout.findOneAndDelete({ _id: id });

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
