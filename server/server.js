// Fetching Dependencies/Third parties
const path = require('path')
const express = require('express')

// Declaring Server Variables
const app = new express()

// Settingup static content directory
app.use(express.static(path.join(__dirname, '../public')))

// Poweringup Server
app.listen(3000, () => {
  console.log('App up and running!');
})
