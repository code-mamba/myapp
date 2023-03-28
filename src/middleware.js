const express = require('express')
const app = express()

app.use(logger)

app.get('/',(req,res)=>{
	console.log('homepage')
	res.send('HomePage')
})
app.get('/users',(req,res)=>{
	console.log('userpage')
	res.send('user page')
})
function logger(req,res,next){
	console.log('log')
	next()
}
app.listen(5000)