const {Router} = require('express')
const router = Router();

const supermarkets = [
	{	id: 1,
		store: 'whole foods',
		miles:0.6

	},
	{	id:2,
		store: 'Trader joes',
		miles:2.3
	},
	{	id:3,
		store: 'Albertsons',
		miles: 1.8,
	}
]

router.get('/markets',(req,res)=>{
	const { miles } = req.query

	const parsedmiles = parseInt(miles)
	if(!isNaN(parsedmiles)){
		const filteredStores = supermarkets.filter((s)=>s.miles<=parsedmiles)
		res.send(filteredStores)
	}
	else{
		res.send(supermarkets)
	}
	
})
module.exports = router