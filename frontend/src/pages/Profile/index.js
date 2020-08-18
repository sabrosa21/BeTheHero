import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import "./styles.css";
import logoimg from "../../assets/logo.svg";
import api from "../../services/api";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  // The second argument of useEffect is the conditions
  // If we leave it empty it will fire the first argument, the function, only one time
  useEffect(() => {
    api
      .get("profile", {
        headers: { Authorization: ongId },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert("Failed to delete incident, try agian.");
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoimg} alt="Be The Hero" />
        <span>Welcome, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Create new case
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Created cases</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASE:</strong>
            <p> {incident.title} </p>

            <strong>DESCRIPTION:</strong>
            <p> {incident.description} </p>

            <strong>VALUE:</strong>
            <p>
              {/* Funtion Intl can be used to show the currency of a value */}
              {Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
