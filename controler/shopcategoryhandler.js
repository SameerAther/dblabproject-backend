const shopcategoryhandler = (req, res, db) => {
	db.select('*')
	.from('shopcategory')
	.then(shop => {
			res.json(shop)
	}).catch(err => res.json("Error Getting User"))
}

module.exports = {shopcategoryhandler}