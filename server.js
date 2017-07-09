const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const app = express()
const router  = express.Router()
const apiRoutes = require ('./routes/apiRoutes.js')
const PORT = process.env.PORT || 3000

//  ----------------------------------------------------------------
//  START MIDDLEWARE

  //  Static Mounting of directory
  app.use(express.static('./public'))

  //  morgan logging
  app.use(logger('dev'))

  //  body-parser middleare
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.text())
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

//  END MIDDLEWARE
//  ----------------------------------------------------------------
//  START DATABASE

  //  create mongodb connection
  mongoose.connect(process.env.db || 'mongodb://localhost:27017/nyrect_db')
  const db = mongoose.connection

  //define db error handling
  db.on('error', function(err) {
    console.log('Mongoose Error: ', err)
  })

  //define db open connection message
  db.once('open', function() {
    console.log('Mongoose connection successful.')
  })

//  END DATABASE
//  ----------------------------------------------------------------
//  BEGIN ROUTES

  //  main route for index.html
  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
  })

  app.use('/api', apiRoutes)

//  END ROUTES


//start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
