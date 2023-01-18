import React from "react";
import { AuthModal } from "../../auth/components/AuthModal";
import { Footer, Products, Sidebar } from "../components/";
import "./home.css";

export const Home = () => {
  const authenticated = "not-authenticated";
  return (
    <>
      <AuthModal />
      <Sidebar />
      <div className="category-bar align-items-center">
        <div className="categories">
          <ul>
            <li>
              <a href="">Phones</a>
            </li>
            <li>
              <a href="">Video</a>
            </li>
            <li>
              <a href="">Sound</a>
            </li>
            <li>
              <a href="">Accesories</a>
            </li>
          </ul>
        </div>

        <form action="">
          <input
            className="form-control"
            type="search"
            aria-label="Search"
            placeholder="Search"
          />
        </form>
      </div>

      {/* Carousel */}

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://khalidlemar.com/wp-content/uploads/2022/07/huawei-banner-khalidlemar-01.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.applestore.pk/wp-content/uploads/2020/03/iPhone-11-Pro-Inner-Banner-1920-X-710-Website.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/mi-11t-pro-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Products */}

      <div className="products">
        <Products />
      </div>

      <Footer />
    </>
  );
};
