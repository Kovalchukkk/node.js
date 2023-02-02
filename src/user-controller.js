const User = require("./user-model");

const getUsers = async (req, res) => {
  let users;
  if (req.params.id) {
    // console.log(req.params.id);
    users = await User.findById(req.params.id);
    res.send(users);
    return;
  }
  users = await User.find();
  res.send(users);
};

const createUser = async (req, res) => {
  // console.log(`Request body user ${req.body.name}`);
  const user = await User.create(req.body);
  res.send(user);
};

module.exports = {
  getUsers,
  createUser,
};
