module.exports = {
  newUser: (req, res, next) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.create_user([username, password])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
  }
};
