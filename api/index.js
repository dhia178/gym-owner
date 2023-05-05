const express =require("express")
var cors= require('cors')
var userRoutes=require('./routes/users.js')
var app = express()
app.use(express.json())

app.use(cors())

app.use(userRoutes)

app.listen(8080,()=>{console.log('Listening on http://localhost:' + 8080)})
