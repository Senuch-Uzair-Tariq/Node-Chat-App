// Fetching Dependencies/Third parties
const path = require('path')
const express = require('express')

// Declaring Server Variables
const app = new express()

// Adding port flag
const port = process.env.PORT||3000

// Settingup static content directory
app.use(express.static(path.join(__dirname, '../public')))

// Poweringup Server
app.listen(port, () => {
  console.log('App up and running!');
})
