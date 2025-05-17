

const mongoose = require('mongoose');
const { type } = require('os');

const workoutSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
}, {timestamps: true});

const Workout = new mongoose.model("Workout", workoutSchema);

module.exports = Workout;