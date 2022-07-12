const updatecarthandler = (req, res, db) => {
  db('users').where({id:req.body.id}).update({ cart: JSON.stringify(req.body.cart) }).then(data=> res.json(data))
  .catch(err => console.log(err))}

module.exports = {updatecarthandler}