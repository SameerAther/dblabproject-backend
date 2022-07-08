const userinformationhandler = (req, res, db) => {
  const {id} = req.body;
  db('users')
  .join('login', 'login.id', 'users.id')
  .select('*')
  .where({'users.id': id}).then(data => res.json(data))
}

module.exports = {userinformationhandler}