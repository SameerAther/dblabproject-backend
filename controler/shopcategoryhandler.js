const shopcategoryhandler = (req, res, db) => {
	db.select('*')
	.from('shopitems')
	.then(shop => {
			res.json(shop)
	}).catch(err => res.json("Error Getting User"))
}

module.exports = {shopcategoryhandler}