const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname,'index.html'))
})


app.use(express.static(path.join(__dirname)))


app.listen(PORT)