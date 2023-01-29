const Router = require("../framework/router");

const router = new Router();

const users = [
  { id: 1, name: "Mykola" },
  { id: 2, name: "Oleg" },
];

router.get("/users", (req, res) => {
  console.log(req.params);
  res.send(users);
});

router.post("/users", (req, res) => {
  // console.log(`Request body user ${req.body.name}`);
  const user = req.body;
  users.push(user);
  res.send(user);
});

module.exports = router;
