import React from "react";
import "../../App.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Detalles() {
  const [alumno, setAlumno] = useState(null);
  const { _id } = useParams();

  let navigate = useNavigate();

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(`http://localhost:3001/buscar/${_id}`, {
          mode: "cors",
        });
        let json = await response.json();
        console.log(json);
        setAlumno(json);
      }
      fetchApi();
    },
    [_id]
  );

  async function handleDelete(_id) {
    let response = await fetch(`http://localhost:3001/delete/alumno/${_id}`, {
      mode: "cors",
      method: "DELETE",
    });
    let json = response.json();
    setAlumno(json);
    navigate("/");
  }

  if (!alumno) {
    return (
      <div className="text-center my-5">
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
      <div className="row">
        <div className="col">
          <img
            src={alumno[0].alumno.datosPersonales.foto}
            className="mx-5 my-5"
            alt="foto de alumno"
            width={"70%"}
          />
          <div className="">
            <Link
              to={`/update/${_id}`}
              className="btn btn-secondary w-100 my-3"
            >
              Update Alumno
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning w-100 mb-5"
            >
              Delete Alumno
            </button>
          </div>
        </div>
        <div className="col float-end mx-5 my-5">
          <h3 className="my-4">
            <b>{alumno[0].alumno.datosPersonales.nombre}</b>
          </h3>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <b>Datos Personales</b>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    <b>Curso</b>: {alumno[0].alumno.curso}
                  </p>
                  <p>
                    <b>Fecha de nacimiento</b>:{" "}
                    {alumno[0].alumno.datosPersonales.fechaNacimiento}
                  </p>
                  <p>
                    <b>Residencia</b>:{" "}
                    {alumno[0].alumno.datosPersonales.residencia}
                  </p>
                  <p>
                    <b>Telefono</b>: {alumno[0].alumno.datosPersonales.telefono}
                  </p>
                  <p>
                    <b>Email</b>: {alumno[0].alumno.datosPersonales.email}
                  </p>
                  <p>
                    <b>LinkedIn</b>:{" "}
                    <a href={alumno[0].alumno.datosPersonales.LinkedIn} target="_blank" rel="noreferrer">
                      {alumno[0].alumno.datosPersonales.LinkedIn}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <b>Info Bootcamp</b>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    <b>Fecha de falta</b>: <br />
                    {alumno[0].alumno.infoBootcamp.fechaFalta}{" "}
                  </p>
                  <p>
                    {" "}
                    <b>Proyecto Final</b>:{" "}
                    {alumno[0].alumno.infoBootcamp.proyectoFinal.titulo}{" "}
                  </p>
                  <p>
                    <b>Detalles</b>:{" "}
                    {alumno[0].alumno.infoBootcamp.proyectoFinal.detalles}{" "}
                  </p>
                  <p>
                    <b>Comentarios Profesorado</b>:{" "}
                    {
                      alumno[0].alumno.infoBootcamp.proyectoFinal
                        .comentariosProf
                    }{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <b>Info Releevant</b>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    {" "}
                    <b>Origen</b>: {alumno[0].alumno.infoReleevant.origen}{" "}
                  </p>
                  <p>
                    {" "}
                    <b>Pc</b>: {alumno[0].alumno.infoReleevant.pc}{" "}
                  </p>
                  <p>
                    <b>Matricula</b>:{" "}
                    <a href={alumno[0].alumno.infoReleevant.matricula}>
                      Click Here!
                    </a>
                  </p>
                  <p>
                    {" "}
                    <b>Tipo de pago</b>:{" "}
                    {alumno[0].alumno.infoReleevant.tipoDePago}{" "}
                  </p>
                  <p>
                    {" "}
                    <b>Detalles sobre el pago</b>:{" "}
                    {alumno[0].alumno.infoReleevant.detallesPago}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <b>Comentarios</b>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    {" "}
                    <b>Comentario</b>: {alumno[0].alumno.detalles}{" "}
                  </p>
                </div>
              </div>
            </div>
            <Link to={`/send/${_id}`} className="btn btn-dark w-100 mt-5">
              Send to Alumni
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
