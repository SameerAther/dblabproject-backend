const registerhandler =  (req,res,db,bcrypt) => {
   const {name , email ,password} = req.body;
   let cart = []
   if(!email || !name || !password){
   	 return res.status('400').json('form submission faied due to incomplete info ')
   }
   db.insert({
    email: email, password: password, name: name, joined: new Date(),
    signedIn: true, cart: JSON.stringify(cart)
   }).into('users').then(function(data) {
    res.send(data);
  }).catch(err => {res.json("error logging in.Please try again")})}

module.exports={registerhandler:registerhandler}