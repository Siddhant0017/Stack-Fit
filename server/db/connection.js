
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Project")
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})