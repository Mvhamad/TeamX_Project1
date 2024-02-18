// importation des modules requis
const express = require('express')
const app = express()
const Routes = require('./routes/routes')
// database
dotenv = require('dotenv')
dotenv.config({path: './config/.env'})
require('./config/db')

// App
app.use(express.json())

// cors
const cors = require('cors')
app.use(cors())

// routes
app.use('/api',Routes)

// multer
const path = require('path')
app.use('/Images', express.static(path.join(__dirname, './Images')))

// listening
port = 3001
app.listen(process.env.PORT || port, () => {
    console.log("app running on  port " + process.env.PORT);
})