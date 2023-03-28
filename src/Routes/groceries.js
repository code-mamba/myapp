const {Router} = require('express')
const router = Router()

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
router.get('/',(req,res)=>{
	res.send('Home')
})
router.get('/groceries',(req,res)=>{
	res.send(groceryList)
})
router.get('/groceries/:item',(req,res)=>{
	const{item}=req.params
	groceryItem = groceryList.find((g)=>g.item == item)
	res.send(groceryItem)
})
router.post('/groceries',(req,res)=>{
	groceryList.push(req.body)
	res.send(201)
})
module.exports = router