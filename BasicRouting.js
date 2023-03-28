const express =  require('express')
const app = express()
app.get('/',(req,res)=>{
	res.send('Hello world')
})
app.get('/home',(req,res)=>{
	res.send('Home')
})
app.get('/user',(req,res)=>{
	res.send('user')
})

app.listen(7000,()=>{
	console.log("server listening")
})