import React from "react";
import { useRef, useState } from "react";
import HttpService from "../../services/http-service";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isAuthenticating, setIsAuthenitcating] = useState(false);

  function onSubmit(event) {
    setIsAuthenitcating(true);
    event.preventDefault();
    const payload = {
      username: usernameRef?.current?.value,
      password: passwordRef?.current?.value,
    };

    login(payload);
  }

  function login(payload) {
    const http = new HttpService();
    http
      .post("auth/login", payload)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        setIsAuthenitcating(false);
        saveToken(response.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function saveToken(token) {
    if (!localStorage.getItem("token")) localStorage.setItem("token", token);
    navigate("/");
  }

  return (
    <>
      <form className="login-form">
        <div className="form-input">
          <input
            placeholder="Username"
            type="text"
            name="username"
            ref={usernameRef}
          />
        </div>

        <div className="form-input">
          <input
            placeholder="Password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <button
          disabled={isAuthenticating}
          className="submit-btn"
          onClick={onSubmit}
        >
          Login
        </button>
      </form>
    </>
  );
}
