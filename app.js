const express = require('express')
const { PORT } = require('./config')

const app = express()

app.use(express.json())

app.get("/api/get", (req, res)=>{
   res.json({ message: "success" });
})


app.listen(PORT, console.log(`Server running on port${PORT}`))