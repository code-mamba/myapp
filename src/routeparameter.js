const express = require('express')
const app = express()
const port = 3001
app.use(express.json())
app.use(express.urlencoded())

app.listen(port,()=>{
	console.log(`running express server on ${port} port...`)
})

const groceryList = [{
	item: "milk",
	quantity: 2,
},
{
	item: "cereal",
	quantity: 1,
},
{
	item: "Pop-tarts",
	quantity: 3
}]

app.get('/',(req,res)=>{
	res.send("This is a Home page")
})
app.get('/groceries',(req,res)=>{
	res.send(groceryList)
})

app.get('/groceries/:item',(req,res)=>{
	const{item} = req.params;
	const groceryItem = groceryList.find((g)=>g.item === item)
		console.log(req.params.item)
		res.send(groceryItem)
})
app.post('/groceries',(req,res)=>{
	console.log(req.body)
	groceryList.push(req.body)
	res.send(201)
})