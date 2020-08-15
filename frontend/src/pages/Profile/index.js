import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import logoimg from "../../assets/logo.svg";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoimg} alt="Be The Hero" />
        <span>Welcome, APAD</span>

        <Link className="button" to="/incidents/new">
          Create new case
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
    </div>
  );
}
