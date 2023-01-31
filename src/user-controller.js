const users = [
  { id: 1, name: "Mykola" },
  { id: 2, name: "Oleg" },
];

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(users.find((user) => user.id === Number(req.params.id)));
  }
  res.send(users);
};

const createUser = (req, res) => {
  // console.log(`Request body user ${req.body.name}`);
  const user = req.body;
  users.push(user);
  res.send(user);
};

module.exports = {
  getUsers,
  createUser,
};
