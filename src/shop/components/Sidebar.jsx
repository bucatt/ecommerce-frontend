import React, { useState } from "react";
import { useEffect } from "react";
import { useCartStore } from "../../hooks/useCartStore";
import { useUiStore } from "../../hooks/useUiStore";
import "./sidebar.css";

export const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const { openLogInModal } = useUiStore();
  const { products } = useCartStore();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSignIn = () => {
    openLogInModal();
  };

  return (
    <>
      <div className={`sidebar ${isActive ? "active" : ""}`}>
        <div onClick={handleToggle} className="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="links">
          <a onClick={handleSignIn}>
            <i className="fa fa-user" />
            Login
          </a>

          <div className="links-xs">
            <a href="">
              <i className="fa fa-cart-shopping" />
              Cart
              {products.length > 0 && (
                <span className="notification-xs">{products.length}</span>
              )}
            </a>
          </div>

          <a href="">
            <i className="fa fa-bell" />
            Notification
          </a>
          <a href="">
            <i className="fa fa-cog" />
            Settings
          </a>
        </div>
      </div>

      <div className="navbar">
        <div className="brand">
          <a href="#">BrandName</a>
        </div>
        <div className="links-navbar">
          <div className="links">
            <a href="">
              <i className="fa fa-cart-shopping" />
              Cart
              {products.length > 0 ? (
                <span className="notification">{products.length}</span>
              ) : (
                ""
              )}
            </a>

            <a onClick={handleSignIn}>
              <i className="fa fa-user" />
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
