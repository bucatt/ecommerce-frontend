import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useCartStore } from "../../hooks/useCartStore";

export const CartProducts = ({ products }) => {
  const { checkItem, addQuantity, removeQuantity, deleteItem } = useCartStore();

  const handleAddQuantity = (product) => {
    addQuantity(product);
    console.log({ product });
  };

  const handleRemoveQuantity = (product) => {
    removeQuantity(product);
    console.log({ product });
  };

  const handleDeleteItem = (product, position) => {
    deleteItem(product);
  };

  const handleCheck = (product) => {
    checkItem(product);
  };

  return (
    <>
      {products.map((product, index) => {
        const {
          id,
          productTitle,
          price,
          img,
          quantity,
          discount,
          shippingFee,
          checked,
        } = product;
        return (
          <div className="card cart-product mb-4">
            <div className="cart-delete">
              <button
                onClick={() => handleDeleteItem(product, index)}
                className="btn btn-danger "
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>

            <div className="row row-cart g-0 ">
              <div className="col-check">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    checked={checked}
                    id="flexCheckDefault"
                    onChange={() => handleCheck(product)}
                  />
                </div>
              </div>

              <div className="col-img">
                <img
                  src={img}
                  className="img-fluid rounded-start cart-img"
                  alt="..."
                />
              </div>
              <div className="col-desc">
                <div className="card-body">
                  <h5 className="card-title">{productTitle}</h5>
                  <p className="card-text">
                    <small className="text-muted">Price: ${price}</small>
                    <small className="text-muted">
                      Shipping Fee: ${shippingFee}
                    </small>
                    {discount === 0 ? (
                      ""
                    ) : (
                      <small className="text-muted">
                        Discount: ${discount}
                      </small>
                    )}
                  </p>
                </div>
              </div>

              <div className="cart-quantity-controls">
                <div className="controls">
                  <button
                    onClick={() => handleRemoveQuantity(product)}
                    className="btn btn-primary remove"
                  >
                    -
                  </button>
                  <small> {quantity} </small>
                  <button
                    onClick={() => handleAddQuantity(product)}
                    className="btn btn-primary add"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
