import React from "react";
import { Footer, Sidebar } from "../components";
import "./ProductPage.css";

export const ProductPage = () => {
  return (
    <>
      <Sidebar />
      <div className="container-pdp">
        <div className="container-pdp-product">
          <div className="pdp-images"></div>
          <div className="pdp-controls"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
