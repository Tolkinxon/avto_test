const express = require('express')
const { PORT } = require('./config')
const fs = require('fs/promises')
const path = require('path')

const app = express()

app.use(express.json())

app.get("/", async (req, res)=>{

   
   res.json("Salom To'lqinxon");

})



app.listen(PORT, console.log(`Server running on port${PORT}`))