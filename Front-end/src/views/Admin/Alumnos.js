import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Buscador from "../../components/Buscador";
import "animate.css";

function Alumnos() {
  const { alumnos, setAlumnos } = useGlobalContext();

  function filterTodos() {
    async function fetchApi() {
      let response = await fetch("http://localhost:3001/", {
        mode: "cors",
      });
      let json = await response.json();
      setAlumnos(json);
    }

    fetchApi();
  }

  function filterProm1() {
    async function fetchApi() {
      let response = await fetch("http://localhost:3001/promocion1", {
        mode: "cors",
      });
      let json = await response.json();

      setAlumnos(json);
    }
    fetchApi();
  }

  function filterProm2() {
    async function fetchApi() {
      let response = await fetch("http://localhost:3001/promocion2", {
        mode: "cors",
      });
      let json = await response.json();
      setAlumnos(json);
    }
    fetchApi();
  }

  if (!alumnos) {
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
    <div className="margine container">
      <div className="row mb-5">
        <h1 className="h1-admin my-5 text-center animate__animated animate__fadeInLeftBig">
          Alumnos Releevant
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
                    onClick={() => filterProm1()}
                  >
                    Promoción 1
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filterProm2()}
                  >
                    Promoción 2
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <Buscador />
            </div>
            <div className="col-3 ">
              <Link to="/anadir" className="btn btn-warning mb-5">
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
                Añadir nuevo alumno
              </Link>
            </div>
          </div>
        </div>

        {alumnos?.map((alumno) => {
          return (
            <div
              className="animate__animated animate__fadeInUp col d-flex justify-content-around"
              key={alumno._id}
            >
              <div className="card mb-5" style={{ width: "19rem" }}>
                <img
                  src={alumno.alumno.datosPersonales.foto}
                  className="card-img-top embed-responsive-item"
                  alt="foto alumno"
                  width={"15%"}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {alumno.alumno.datosPersonales.nombre}
                  </h5>
                  <p className="card-text">{alumno.alumno.curso}</p>
                  <Link
                    to={`detalles/${alumno._id}`}
                    className="btn btn-secondary w-100 m-auto"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Alumnos;
