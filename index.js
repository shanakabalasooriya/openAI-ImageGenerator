const path = require('path')
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const openAI = require('./routes/openaiRoutes.js')

const app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

//static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', openAI)

app.listen(port, ()=>console.log(`server started on port ${port}`));