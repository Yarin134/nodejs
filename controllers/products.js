const rootDir = require("../util/path");
const path = require("path");

const products = require("../models/product");
const Product = require("../models/product");

exports.getAddProductPage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProductPage = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  console.log(req.body.title);
  res.redirect("/");
};

exports.showShopHomePage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  Product.fetchAll();
};
