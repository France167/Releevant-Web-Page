import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Buscador from "../../components/Buscador";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "animate.css";

function Candidatos() {
  const { candidatos, setCandidatos } = useGlobalContext();

  let navigate = useNavigate();

  async function handleDelete(_id) {
    let response = await fetch(
      `http://localhost:3001/delete/candidato/${_id}`,
      {
        mode: "cors",
        method: "DELETE",
      }
    );
    let json = await response.json();
    setCandidatos(json);
    navigate("/candidatos");
  }

  function filterTodos() {
    async function fetchApi() {
      let response = await fetch(`http://localhost:3001/candidatos`, {
        mode: "cors",
      });
      let json = await response.json();
      setCandidatos(json);
    }

    fetchApi();
  }

  function filter(prop) {
    async function fetchApi() {
      let response = await fetch(`http://localhost:3001/candidato/${prop}`, {
        mode: "cors",
      });
      let json = await response.json();
      setCandidatos(json);
    }

    fetchApi();
  }

  if (!candidatos) {
    return (
      <div className="text-center">
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="h1-admin my-5 text-center animate__animated animate__fadeInLeftBig">
          Candidatos Releevant
        </h1>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-3 dropdown">
              <button
                className="btn btn-secondary dropdown-toggle ml-5 w-50"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filterTodos()}
                  >
                    Todos
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Mail")}
                  >
                    Mail
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Follow-Up")}
                  >
                    Follow-Up
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Future")}
                  >
                    Future
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Pending")}
                  >
                    Pending
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Retry")}
                  >
                    Retry
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("No")}
                  >
                    No
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Call")}
                  >
                    Call
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Recall")}
                  >
                    Recall
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Meeting")}
                  >
                    Meeting
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filter("Otros")}
                  >
                    Otros
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <Buscador />
            </div>
            <div className="col-3">
              <Link
                to="/anadircandidato"
                className="btn btn-warning m-auto mb-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Añadir nuevo candidato
              </Link>
            </div>
          </div>
        </div>
        <div className="container d-flex">
          <div className="row">
            {candidatos.map((candidato) => {
              return (
                <div
                  className="animate__animated animate__fadeInUp col d-flex"
                  key={candidato._id}
                >
                  <div className="card mb-5" style={{ width: "25rem" }}>
                    <div className="card-header">
                      <h4>{candidato.nombre}</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p>
                          <b>Telefono</b>: {candidato.telefono}
                        </p>
                        <p>
                          <b>Email</b>: {candidato.email}
                        </p>
                      </li>
                      <li className="list-group-item">
                        <p>
                          <a
                            className="btn btn-secondary"
                            data-bs-toggle="collapse"
                            href={`#multiCollapseExample${candidato._id}`}
                            role="button"
                            aria-expanded="false"
                            aria-controls={`multiCollapseExample${candidato._id}`}
                          >
                            Más datos
                          </a>
                        </p>
                      </li>
                      <div
                        className="collapse multi-collapse"
                        id={`multiCollapseExample${candidato._id}`}
                      >
                        <li className="list-group-item">
                          <p>
                            <b>Edad</b>: {candidato.edad}
                          </p>
                          <p>
                            <b>Estudios</b>: {candidato.estudios}
                          </p>
                          <p>
                            <b>Profesión</b>: {candidato.profesion}
                          </p>
                        </li>
                        <li className="list-group-item">
                          <p>
                            <b>Curso de interés</b>: {candidato.cursoInteres}
                          </p>
                          <p>
                            <b>Origen</b>: {candidato.origen}
                          </p>
                          <p>
                            <b>Estado</b>: {candidato.estado}
                          </p>
                          <p>
                            <b>Fecha de entrada</b>: {candidato.fechaEntrada}
                          </p>
                          <p>
                            <b>Llammada</b>: {candidato.call}
                          </p>
                          <p>
                            <b>Fecha de contacto</b>: {candidato.fechaContacto}
                          </p>
                          <p>
                            <b>Fecha de la cita</b>: {candidato.cita.fecha} a la{" "}
                            {candidato.cita.ora}
                          </p>
                        </li>
                        <li className="list-group-item">
                          <p>
                            <b>Comentarios</b>: {candidato.detalles}
                          </p>
                        </li>
                        <li className="list-group-item">
                          <Link
                            to={`/updatecandidato/${candidato._id}`}
                            className="btn btn-warning w-100 my-3"
                          >
                            Update Candidato
                          </Link>
                          <button
                            onClick={() => handleDelete(candidato._id)}
                            className="btn btn-secondary w-100 my-2"
                          >
                            Delete Candidato
                          </button>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidatos;
