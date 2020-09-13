require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const Busboy = require('busboy');

const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile')
const postRouter = require('./routes/post')

const jwt = require('jsonwebtoken');

const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET
const DB_URL = process.env.DB_URL

// initialize firbase admin, we are using firebase only for storing image data
const admin = require("firebase-admin");
const serviceAccount = require("/home/saikat/Projects/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "instagram-24e71.appspot.com"
});
const bucket = admin.storage().bucket();


// database connection
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log("Connected to database")
    }).
    catch((err) => {
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

function checkAuth(req, res, next) {
    try {
        jwt.verify(req.cookies.token || '', JWT_SECRET);
    } catch (err) {
        return res.status(401).send('Unauthorized request')
    }
    next()
}

// routers
app.use('/api/auth', authRouter);
app.use('/api/profile', checkAuth, profileRouter);
app.use('/api/posts', checkAuth, postRouter);


// An endpoint for uploading image it returns the url
app.post('/api/uploadImage', function (req, res) {
    const busboy = new Busboy({ headers: req.headers });

    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {

        const blob = bucket.file(filename.replace(/ /g, "_"))
        const blobStream = blob.createWriteStream({
            resumable: false
        })

        blobStream
            .on('finish', () => {
                let publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
                res.send({ publicUrl })
            })
            .on('error', () => {
                res.status(500).send({ error: "Error in uploading to gcp server" })
            })

        file.pipe(blobStream)
    });

    return req.pipe(busboy);
})


// starting a server at port PORT
app.listen(PORT, function () {
    console.log("Server started at port " + PORT)
});