import React from "react";
import { useCartStore } from "../../hooks/useCartStore";
import { useHomeProductsStore } from "../../hooks/useHomeProductsStore";

export const Products = () => {
  const { addToCart } = useCartStore();
  const { homeCategories } = useHomeProductsStore();

  const handleAdd = (product) => {
    addToCart(product);
    console.log({ product });
  };

  return (
    <>
      <div className="section">
        {homeCategories.map((category) => {
          const { categoryName, products } = category;
          return (
            <>
              <div className="row section-title">
                <h1 className="text-center">{categoryName}</h1>
              </div>

              <div className="d-flex row  gap-3">
                {products.map((product) => {
                  const { id, productTitle, description, img } = product;

                  return (
                    <div key={id} className="card text-center">
                      <img className="card-img-top" alt="..." src={img} />
                      <div className="card-body">
                        <h3 className="card-title">{productTitle}</h3>
                        <p className="card-text">{description}</p>
                        <a
                          onClick={() => {
                            handleAdd(product);
                          }}
                          className="btn btn-primary add-cart-btn"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
