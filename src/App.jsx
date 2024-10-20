import React, { useState } from 'react';
import AddProduct from './components/AddProduct';
import DisplayProduct from './components/DisplayProduct';


function App() {
  //when you need a state in more tha n one components you can put it in the parent, the phenomenon is called state lifting
  //only the owner of a state can change the state
   const [allproducts, setallproducts] = useState([]);
   const handleSubmit = (products) => {
     // alert('I am working ooo')
    //  let products = {
    //    productName,
    //    productPrice,
    //    productQuantity,
    //    productImage,
    //  };

     setallproducts([...allproducts, products]);
     console.log(allproducts);
   };

   const deleteProduct =(index)=>{
    console.log('i am working')
    let newProducts = [...allproducts]
    newProducts.splice(index, 1)
    setallproducts(newProducts)
   }

   const editProduct =(index)=>{
    console.log('I am working')
    let newProducts = [...allproducts]
    console.log()
    newProducts[1].productName = exampleInputEmail1.value;
    console.log(newProducts[1].productName)
    // let newProductName = exampleInputEmail1.value;
    // let newProductPrice = exampleInputPassword1.value;
    // setallproducts([...arr, arr.productName = newProductName, arr.productPrice = newProductPrice])
    // console.log(arr)
    // // newProducts.map(newProduct=>(
    // //   name: e.target.value
    // // ))
    // // newProducts.splice(index, 1, );
    // return allproducts;
   }
  return (
    <>
      <AddProduct
        handleSubmit={
          handleSubmit
        }
      />
      <DisplayProduct allproducts={allproducts}  deleteProduct={deleteProduct} editProduct={editProduct}/>

      {/* <Forms/> */}
    </>
  );
}

export default App
