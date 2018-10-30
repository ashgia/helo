function logger(req, res, next) {
  console.log("BODY: ", req.body);
  console.log("SESSION: ", req.session);
  next();
}

function isAdmin(req, res, next) {
  if (req.body.admin) {
    next();
  } else {
    res.status(401).send("yay");
  }
}

module.exports = {
  logger,
  isAdmin
};
