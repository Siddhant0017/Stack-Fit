
const express =require("express");
const authUser = require("../middleware/userMiddleware");
const Workout = require("../models/workoutModels");

const router = express.Router();

//Require Controllers
const {getWorkouts,getSingleWorkout, createWorkout, updateWorkout, deleteWorkout} = require("../controllers/workoutControllers")


router.use(authUser)
//Get entire records
router.get("/", getWorkouts);

//Get Single record
router.get("/:id", getSingleWorkout);

//Create Record
router.post("/", createWorkout);

//Updating Record
router.patch("/:id", updateWorkout);

//Delete Record
router.delete("/:id", deleteWorkout);

module.exports = router;