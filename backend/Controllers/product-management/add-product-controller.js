//Add product
const { addProduct } = require("../../Services/products/add-product");

const addProductController = (req, res) => {
  addProduct(req.body)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
};

module.exports = {
  addProductController,
};
