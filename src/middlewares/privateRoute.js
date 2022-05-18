const privateRoute = (req, res, next) => {
  const { admin } = req.headers;
  !admin && res.json({ error: 401, msg: "Sin autorización" });
  next();
};

module.exports = privateRoute;
