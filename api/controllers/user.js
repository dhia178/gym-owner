var db = require("../db.js")
module.exports = {getUsers : (req, res) => {
  const q = "SELECT * FROM user";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
},



addUser : (req, res) => {
  const q =
    "INSERT INTO user(`name`, `email`, `telephone`, `date`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.telephone,
    req.body.date,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("User added.");
  });
},

updateUser : (req, res) => {
  const q =
    "UPDATE user SET `name` = ?, `email` = ?, `telephone` = ?, `date` = ? WHERE `ID` = ?";

  const values = [
    req.body.name,
    req.body.email,
    req.body.telephone,
    req.body.date,
  ];

  db.query(q, [...values, req.params.ID], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("The user was successfully updated.");
  });
},

deleteUser : (req, res) => {
  const q = "DELETE FROM user WHERE `ID` = ?";

  db.query(q, [req.params.ID], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("User deleted successfully.");
  });
}
}
