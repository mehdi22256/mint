const errorHandler =
  ("*",
  (req, res) => {
    res.json({ message: "Page Not found" });
  });
module.exports = errorHandler;
