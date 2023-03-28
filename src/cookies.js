const express = require('express')
const app = express()

const port = 6789

app.get('/',(request, response)=>{
	response.cookie('visited',true,{
		maxAge:10000,
	})
	response.send('<h1>Cookies</h1>')
})
app.listen(port,()=>{
	console.log("server running")
})