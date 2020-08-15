import React from "react";
import { Link } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import logoimg from "../../assets/logo.svg";
import heroesimg from "../../assets/heroes.png";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoimg} alt="Be The Hero" />

        <form>
          <h1>Login</h1>

          <input placeholder="Your ID" />
          <button className="button" type="submit">
            Go
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />I don't have an account
          </Link>
        </form>
      </section>
      <img src={heroesimg} alt="Heroes" />
    </div>
  );
}
