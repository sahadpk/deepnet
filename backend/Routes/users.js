const express = require("express");
const router = express.Router();

//IMPORTING THE FILE HANDLERS
const { verifyToken } = require("../Controllers/authentication/jwtAuth");
const { registerHandler } = require("../Services/users/registerHandler");
const { loginHandler } = require("../Services/users/loginHandler");
const {
  getProductsController,
} = require("../Controllers/product-management/get-products-controller");
const { userCheck } = require("../Services/users/loginCheck");
const {
  addProductController,
} = require("../Controllers/product-management/add-product-controller");

/*                ROUTES                          */

//REGISTER ROUTER
router.post("/register", registerHandler);



//LOGIN ROUTER
router.post("/login", loginHandler);

router.post("/add-product", addProductController);

//FETCHING THE PRODUCTS
router.get("/get-products", getProductsController);

//USER LOGINNED STATUS CHECK ROUTE
router.get("/user-check", userCheck);

//EXPORTING THE ROUTER
module.exports = router;
