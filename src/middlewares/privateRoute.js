const privateRoute = (req, res, next) => {
  const { admin } = req.headers;
  !admin && res.json({ status: 401, msg: "Unauthorized" });
  next();
};

module.exports = privateRoute;
