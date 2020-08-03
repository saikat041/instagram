const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile')
const User = require('./models/User')

const PORT = 4000

// database connection
mongoose.connect("mongodb+srv://admin:admin@cluster0.kepi8.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}).
then(()=>{
    console.log("Connected to database")
}).
catch((err)=>{
    console.log(err)
})

// for cathing error after initial connection
mongoose.connection.on('error', err => {
    console.log(err)
});

// middlewares
// middleware for parsing application/json data in request
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);


app.listen(PORT, function(){
    console.log("Server started at port " + PORT)
});