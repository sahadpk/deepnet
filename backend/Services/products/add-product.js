const { productSchema } = require("../../Models/productModel");
const { mongoose } = require("../../Config/mongo-connection");

const addProduct = (productData) => {

  return new Promise(async (resolve, reject) => {
    try {
      const productModel = mongoose.model("products", productSchema);

      let productNameAlreadyExist = await productModel.findOne({
        name: productData.name,
      });
      
      if (productNameAlreadyExist) {
        reject({ status: false, message: "Product name already exist" });
      } else {
        const product = await new productModel(productData);
        product.save();
        resolve({ status: true, message: "Product added Successfully" });
      }
    } catch (e) {
      reject({ status: false, message: "Something went wrong" });
    }
  });
};

module.exports = { addProduct };
