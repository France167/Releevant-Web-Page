import React from "react";
import "../../App.css";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { Link } from "react-router-dom";
import Buscador from "../../components/Buscador";
import "animate.css";

function Alumni() {
  const { alumni } = useGlobalContext();

  if (!alumni) {
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
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="h1-admin my-5 text-center animate__animated animate__fadeInLeftBig">
                Alumni Releevant
              </h1>
            </div>
          </div>
        </div>

        <Buscador />
        {alumni?.map((alumno) => {
          return (
            <div
              className="animate__animated animate__fadeInUp col d-flex justify-content-around"
              key={alumno._id}
            >
              <div className="card mb-5" style={{ width: "19rem" }}>
                <img
                  src={alumno.alumno.datosPersonales.foto}
                  className="card-img-top embed-responsive-item"
                  alt="..."
                  width={"20%"}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {alumno.alumno.datosPersonales.nombre}
                  </h5>
                  <p className="card-text">{alumno.empresa}</p>
                  <Link
                    to={`/detalles/alumni/${alumno._id}`}
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

export default Alumni;
