import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProductHandler } from "../../utils/requestHandler";
toast.configure();

function AddProduct() {
  const formSubmit = () => {
    if (addproduct.length < 1) {
      toast("enter product name");
    } else if (addimage.length < 1) {
      toast("add image url");
    } else if (addprice < 1) {
      toast("add price");
    } else {
      addProductHandler({
        name: addproduct,
        image: addimage,
        price: addprice,
      })
        .then((response) => {
          if (response.status) {
            toast("product Added Successfully");
          } else {
            toast("product Adding failed");
          }
        })
        .catch((err) => {
          toast("Something went wrong");
        });
    }
  };
  const onChangePrice = (value) => {
    console.log(/\D/.test(value));
    if (!/\D/.test(value)) {
      setAddPrice(value);
    }
  };
  const [addproduct, setAddProduct] = useState("");
  const [addimage, setAddImage] = useState("");
  const [addprice, setAddPrice] = useState("");

  return (
    <div className="container bg-success">
      <div className="jumbotron mt-4">
        <div className="form">
          <div className="form-element">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              value={addproduct}
              onChange={(e) => setAddProduct(e.target.value)}
            />
            <label htmlFor="">Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              value={addprice}
              onChange={(e) => onChangePrice(e.target.value)}
            />
            <label htmlFor="">Image Url</label>
            <input
              type="text"
              className="form-control"
              placeholder="Image Url"
              value={addimage}
              onChange={(e) => setAddImage(e.target.value)}
            />
            <button onClick={formSubmit} className="btn btn-primary mt-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
