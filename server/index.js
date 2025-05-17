const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Port
const port = process.env.PORT || 4000


//Db Connection
require("./db/connection")

//Require Routing
const workoutRoutes = require("./routes/workoutRoutes")
const userRoutes = require("./routes/userRoutes")


//Middleware
app.use(cors());

app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })

//routes

app.use("/api/Workout",workoutRoutes )
app.use("/api/user",userRoutes )

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})