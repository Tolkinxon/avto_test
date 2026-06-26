const express = require('express')
const { PORT } = require('./config')
const fs = require('fs/promises')
const path = require('path')

const app = express()

app.use(express.json())

app.get("/", async (req, res)=>{

   const tiger = await fs.readFile(path.join(__dirname, "tiger.txt"), 'utf-8')
   res.json(tiger)

})



app.listen(PORT, console.log(`Server running on port${PORT}`))