const { productSchema } = require('../../Models/productModel');
const { mongoose } = require('../../Config/mongo-connection');

const fetchProducts = (type) => {
    return new Promise(async (resolve, reject) => {

        //FINDING THE PRODUCT WITH THE TYPE
        try{
            const productModel = mongoose.model('products', productSchema);
            let products = await productModel.find();
            resolve(products);
        }
        catch(e){
            reject(err);
        }
    })
};

module.exports = { fetchProducts }