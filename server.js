const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('welcome home')
})

app.listen('4000','0.0.0.0',()=>{
    console.log('listening to port 4000')
})