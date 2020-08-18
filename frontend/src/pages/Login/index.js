import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import logoimg from "../../assets/logo.svg";
import heroesimg from "../../assets/heroes.png";

export default function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    // Prevents the page reload
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      // saves the data into local store in order to be accessible in all the application
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      // redirects to profile page
      history.push("/profile");
    } catch (error) {
      alert("Failed to login. Please try again.");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoimg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <input
            placeholder="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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
