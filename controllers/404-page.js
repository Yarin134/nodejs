const path = require("path");
const rootDir = require('../util/path');

exports.pageNotFount = (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir ,  "views", "404-not-found.html"));
};
