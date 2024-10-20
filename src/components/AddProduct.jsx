import React, {useState} from 'react'

const AddProduct = ({handleSubmit}) => {
     const [productName, setproductName] = useState("product");
     const [productPrice, setproductPrice] = useState(0);
     const [productQuantity, setproductQuantity] = useState(0);
     const [productImage, setproductImage] = useState(
       "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
     );
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => {
            setproductName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product Price"
          onChange={(e) => {
            setproductPrice(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product Quantity"
          onChange={(e) => {
            setproductQuantity(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product Image"
          onChange={(e) => {
            setproductImage(e.target.value);
          }}
        />

        <button
          onClick={() =>
            handleSubmit({
              productName,
              productPrice,
              productQuantity,
              productImage,
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddProduct