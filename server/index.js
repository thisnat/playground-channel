const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./config/db');

const BoardRouter = require('./routes/BoardRouter')

mongoose.connect(db.db,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false}).then(() =>{
    console.log('db connected');
},err => {
    console.log(`cant connect db : ${err}`);
});

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.use('/api/board',BoardRouter);

app.listen(3001, () => console.log("Server is running at port 3001"))