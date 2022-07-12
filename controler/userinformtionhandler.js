const userinformationhandler = (req, res, db) => {
	db.select('*')
	.from('users')
	.then(users => {
			console.log(users)
			res.json(users)
	}).catch(err => res.json("Error Getting User"))
}

module.exports = {userinformationhandler}