import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCartStore } from "../../hooks/useCartStore";
import { Footer, Sidebar } from "../components";
import { CartProducts } from "../components/CartProducts";
import "./Cart.css";

export const Cart = () => {
  const { products, checkAllItems } = useCartStore();

  const [subTotal, setSubTotal] = useState(0);
  const [savedMoney, setSavedMoney] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const checkedProducts = products.filter(
      (product) => product.checked === true
    );

    if (checkedProducts.length !== products.length) {
      setAllChecked(false);
    }

    setSubTotal(
      checkedProducts.reduce(
        (partialSum, product) =>
          Number((partialSum + product.price * product.quantity).toFixed(2)),
        0
      )
    );

    setSavedMoney(
      checkedProducts.reduce(
        (partialSum, product) =>
          Number(
            (
              partialSum +
              ((product.price * product.discount) / 100) * product.quantity
            ).toFixed(2)
          ),
        0
      )
    );

    setShippingFee(
      checkedProducts.reduce(
        (partialSum, product) =>
          Number((partialSum + product.shippingFee).toFixed(2)),
        0
      )
    );

    setTotal(
      Number(
        (
          checkedProducts.reduce(
            (partialSum, product) =>
              Number(
                (partialSum + product.price * product.quantity).toFixed(2)
              ),
            0
          ) -
          checkedProducts.reduce(
            (partialSum, product) =>
              Number(
                (
                  partialSum +
                  ((product.price * product.discount) / 100) * product.quantity
                ).toFixed(2)
              ),
            0
          ) +
          checkedProducts.reduce(
            (partialSum, product) =>
              Number((partialSum + product.shippingFee).toFixed(2)),
            0
          )
        ).toFixed(2)
      )
    );
  }, [products]);

  const [allChecked, setAllChecked] = useState(false);

  const handleAllCheck = () => {
    setAllChecked(!allChecked);
    checkAllItems();
  };

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <div className="container">
          <div className="card cart-title text-center">
            <h1>Cart ({products.length})</h1>

            <label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={allChecked}
                onChange={handleAllCheck}
              />
              &nbsp; Select all products
            </label>
          </div>

          <div className="card d-flex cart-checkout">
            <h1>Summary</h1>
            <div className=" cart-checkout-items">
              <div className="cart-checkout-list">
                <small>Subtotal: ${subTotal}</small>
                <small>Shipping fee: ${shippingFee}</small>
                <small>Saved: ${savedMoney}</small>
                <h3>Total: ${total}</h3>
              </div>

              <div className="cart-checkout-controls">
                <img
                  src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"
                  alt=""
                />
                <button className="btn btn-primary proceed-btn">
                  Checkout
                </button>
              </div>
            </div>
          </div>

          <div className="cart-products">
            <CartProducts products={products} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
