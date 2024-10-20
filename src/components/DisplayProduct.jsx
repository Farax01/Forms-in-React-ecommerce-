import React from "react";
import Card from "./Card";

const DisplayProduct = ({ allproducts, deleteProduct, editProduct }) => {
  return (
    <div className="cardGroup">
      <div className="productCard">
        {allproducts.map((product, index) => (
          <div key={index} style={{ gap: "20px" }}>
            <Card
              name={product.productName}
              price={product.productPrice}
              quantity={product.productQuantity}
              img={product.productImage}
            />
            <button onClick={() => deleteProduct(index)}>delete</button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              editz
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          defaultValue={product.productName}
                        />
                        {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Product Price
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputPassword1"
                          defaultValue={product.productPrice}
                        />
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => editProduct()}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;
