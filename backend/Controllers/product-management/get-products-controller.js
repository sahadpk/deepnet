const { fetchProducts } = require("../../Services/products/get-products");

//GET PRODUCTS ROUTE HANDLER
const getProductsController = (req, res) => {
  fetchProducts()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = { getProductsController };
