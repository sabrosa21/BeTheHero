import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoimg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoimg} alt="Be The Hero" />

          <h1>Register</h1>
          <p>
            Make your registration, login into the platform and help people to
            find your NGO cases
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Already have an account? Login
          </Link>
        </section>

        <form>
          <input placeholder="NGO name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
