import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";
import logoimg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push("/profile");
    } catch (error) {
      alert("Failed to create incident, please try again");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoimg} alt="Be The Hero" />

          <h1>Create new case</h1>
          <p>
            Create a detailed description, so you can find a hero to solve this.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Case title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Amount in €"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
