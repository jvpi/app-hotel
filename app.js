const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/reserva', function(req,res) {
	res.sendFile(path.join(__dirname,'reserva.html'))
})
app.get('/facturazion', function(req,res) {
	res.sendFile(path.join(__dirname,'facturazion.html'))
})

app.use(express.static(path.join(__dirname)))


app.listen(PORT)