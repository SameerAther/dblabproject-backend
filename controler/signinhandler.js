const signinhandler =  (req,res,db,bcrypt) => {
	const {email ,password} =req.body
   if(!email || !password){
   	 return res.status('400').json('form submission faied due to incomplete info ')
   }
   db.select('email' , 'hash').from('login')
   .where('email','=',email)
   .then(data => {
      const valid = bcrypt.compareSync(password, data[0].hash);
      if(valid){
         return db.select('*').from('users')
           .where('email','=',email)
           .then(user => {
             res.json("successfully logged in")
           })
           .catch(err => res.status(400).json("unable to get user"))
      }else{
         res.status(400).json("wrong credentials & password")
      }
   })
   .catch(err => res.status(400).json("wrong credentials"))
}


module.exports = {
  signinhandler:signinhandler
}