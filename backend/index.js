const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./DB/connectDB");
const taskRoute = require("./routes/tasks");
const noteRoute = require("./routes/notes");
const cors = require("cors")

//? Creating Instance of Express
const app = express();
//* option 1 : Allow all origin with Default of Cors
app.use(cors());
// app.use(cors({
//     origin: "https://tasks-notes.vercel.app/",
//     methods: ["POST","GET","PUT","DELETE"],
//     credentials: true
// }));
//? Connect The .env file
dotenv.config();


//? to pass the data from the client in json format
app.use(express.json());


//? Getting Values From .env
const port = process.env.PORT || 8000;
const database_url = process.env.DATABASE_URL;



//? Use the task route
app.use("/task",taskRoute);

//? Use the note route
app.use("/note",noteRoute);

app.get('*',(req,res)=>{
  res.status(200).json({
    message:'bad request'
  })
})

//? Connecting the Database
connectDB(database_url);
//? Listening The Server
app.listen(port,()=>console.log(`Server Listening on Port ${port}`))