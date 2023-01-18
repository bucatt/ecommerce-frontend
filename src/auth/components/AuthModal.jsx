import React, { useState } from "react";
import Modal from "react-modal";
import { useUiStore } from "../../hooks/useUiStore";
import "./AuthModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const AuthModal = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;

  const [loginModal, setLoginModal] = useState("LogIn");

  const { isLogInModalOpen, closeLogInModal } = useUiStore();

  const onCloseModal = () => {
    closeLogInModal();
  };

  const handleClickLogin = () => {
    setLoginModal("LogIn");
  };

  const handleClickRegister = () => {
    setLoginModal("Register");
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  return (
    <>
      <Modal
        isOpen={isLogInModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-center login">
          <h1
            className={`text-center p-2 pb-1 ${
              loginModal === "LogIn" ? "active" : ""
            }`}
          >
            <a onClick={handleClickLogin}>Login</a>
          </h1>
          <h1
            className={`text-center p-2 pb-1 ${
              loginModal === "Register" ? "active" : ""
            }`}
          >
            <a onClick={handleClickRegister}>Sign in</a>
          </h1>
        </div>

        {loginModal === "LogIn" ? (
          <form className="d-flex flex-column container mt-3 login-form">
            <div className="form-floating mb-2">
              <input
                id="loginEmailInput"
                value={email}
                name="email"
                className="form-control"
                type="email"
                onChange={handleInputChange}
              />
              <label htmlFor="loginEmailInput">Email address</label>
            </div>

            <div className="form-floating">
              <input
                id="loginPasswordInput"
                value={password}
                name="password"
                className="form-control"
                type="password"
                onChange={handleInputChange}
              />
              <label htmlFor="loginPasswordInput">Password</label>
            </div>
            <div className="form-group text-end mt-2">
              <a className="text-decoration-none" href="">
                ¿Forgot your password?
              </a>
            </div>
            <div className="d-grid mt-auto">
              <button className="btn btn-primary mt-2 ">Login</button>
            </div>
          </form>
        ) : (
          <form className="d-flex flex-column container mt-3 login-form">
            <div className="form-floating mb-2">
              <input
                id="registerNameInput"
                value=""
                className="form-control"
                type="text"
              />
              <label for="registerNameInput">
                Name <span> *</span>
              </label>
            </div>

            <div className="form-floating mb-2">
              <input
                id="registerEmailInput"
                value=""
                className="form-control"
                type="email"
              />
              <label for="registerEmailInput">
                Email address
                <span> *</span>
              </label>
            </div>

            <div className="form-floating mb-2">
              <input
                id="registerPasswordInput"
                value=""
                className="form-control "
                type="password"
              />
              <label for="registerPasswordInput">
                Password
                <span> *</span>
              </label>
            </div>

            <div className="form-floating mb-2">
              <input
                id="registerPassword2Input"
                value=""
                className="form-control "
                type="password"
              />
              <label for="registerPassword2Input">
                Confirm your password
                <span> *</span>
              </label>
            </div>

            <div className="d-grid mt-auto">
              <button className="btn btn-primary mt-2 ">Sign in</button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};
