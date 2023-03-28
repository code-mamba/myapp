const express = require('express')
const groceriesRoute = require('./Routes/groceries')
const marketsRoute = require('./Routes/markets')
const app = express()
const port = 3001
app.use(express.json())
app.use(express.urlencoded())

app.listen(port,()=>{
	console.log(`running express server on ${port} port...`)
})
app.use(groceriesRoute)
app.use(marketsRoute)
// const groceryList = [{
// 	item: "milk",
// 	quantity: 2,
// },
// {
// 	item: "cereal",
// 	quantity: 1,
// },
// {
// 	item: "Pop-tarts",
// 	quantity: 3
// }]

// app.get('/',(req,res)=>{
// 	res.send("This is a Home page")
// })
// app.get('/groceries',(req,res)=>{
// 	res.send(groceryList)
// })

// app.post('/groceries',(req,res)=>{
// 	console.log(req.body)
// 	groceryList.push(req.body)
// 	res.send(201)
// })