import React from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Buscador from "../../components/Buscador";
import "animate.css";

function Eventos() {
  const { eventos, setEventos } = useGlobalContext();
  let navigate = useNavigate();

  async function handleDelete(_id) {
    let response = await fetch(`http://localhost:3001/delete/evento/${_id}`, {
      mode: "cors",
      method: "DELETE",
    });
    let json = await response.json();
    setEventos(json);
    navigate("/eventos");
  }

  if (!eventos) {
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
          Eventos Releevant
        </h1>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-9">
              <Buscador />
            </div>
            <div className="col">
              <Link to="/anadirevento" className="btn btn-warning m-auto mb-5">
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
                Añadir nuevo evento
              </Link>
            </div>
          </div>
        </div>

        {eventos?.map((evento) => {
          return (
            <div
              className="animate__animated animate__fadeInLeft card mb-3"
              key={evento._id}
            >
              <img
                src={evento.foto}
                className="card-img-top-eventos embed-responsive-item"
                alt="..."
                width={"100%"}
              />
              <div className="card-body">
                <h3 className="card-title">{evento.titulo}</h3>
                <h6 className="card-title">{evento.ponentes}</h6>
                <p className="card-text">{evento.descripcion}</p>
                <p className="card-text">
                  <small className="text-muted">{evento.fecha}</small>
                </p>

                <p>
                  <a href={evento.enlace} target="_blank" rel="noreferrer">Enlace a evento</a>
                </p>

                <h5>Info interna</h5>
                <p>
                  Asistentes inscritos : <b> {evento.asistentes.inscrito} </b>{" "}
                  <br />
                  Asistentes reales : <b> {evento.asistentes.reales}</b>
                </p>
                <Link
                  to={`/updateevento/${evento._id}`}
                  className="btn btn-secondary w-100 my-3"
                >
                  Update evento
                </Link>
                <button
                  onClick={() => handleDelete(evento._id)}
                  className="btn btn-warning w-100 m-auto"
                >
                  Delete evento
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Eventos;
