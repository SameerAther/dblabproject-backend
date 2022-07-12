const paymenthandler = (req, res, db) => {
  const {firstName, lastName, Address1, Address2, pzcode, 
    city, state, country, email, card, cvc, total} = req.body;
    db.insert({
      email: email, lastName: lastName, city: city, state: state, country: country, card: card, Address1: Address1, Address2: Address2,
      pzcode: pzcode, cvc: cvc, firstName: firstName, total: total
     }).into('paymentinfo').then(function(data) {
      res.send(data);
    }).catch(err => {res.json("Something went wrong. Tryagain")})}

module.exports = {paymenthandler}