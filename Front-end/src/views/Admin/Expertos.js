import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "animate.css";
import { useGlobalContext } from "../../contexts/GlobalContext";

function Expertos() {
  const { expertos, setExpertos } = useGlobalContext();
  const [biografia, setBiografia] = useState("");
  const [nombreBio, setNombreBio] = useState("");

  async function handleDelete(_id) {
    let response = await fetch(`http://localhost:3001/delete/experto/${_id}`, {
      mode: "cors",
      method: "DELETE",
    });
    let json = await response.json();
    setExpertos(json);
  }

  function bio(_id) {
    var experto = expertos.find((d) => d._id === _id);
    setBiografia(experto.bio);
    var nomeExperto = expertos.find((n) => n._id === _id);
    setNombreBio(nomeExperto.nombre);
  }

  if (!expertos) {
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
          Expertos Releevant
        </h1>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-9"></div>
          </div>
        </div>

        {expertos?.map((experto) => {
          return (
            <div
              className="animate__animated animate__fadeInUp col d-flex justify-content-around"
              key={experto._id}
            >
              <div className="card mb-5" style={{ width: "19rem" }}>
                <img
                  src={experto.foto}
                  className="card-img-top embed-responsive-item"
                  alt="..."
                  width={"15%"}
                />
                <div className="card-body">
                  <h5 className="card-title">{experto.nombre}</h5>
                  <h6>{experto.posicion}</h6>
                  <p className="card-text overview">{experto.bio}</p>
                  <button
                    onClick={() => bio(experto._id)}
                    type="button"
                    className="btn btn-secondary mr-3"
                    data-toggle="modal"
                    data-target="#foo"
                  >
                    See full bio
                  </button>
                  <a
                    className="ml-5"
                    href={experto.LinkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>

                  <Link
                    to={`/updateexperto/${experto._id}`}
                    className="btn btn-warning w-100 my-3"
                  >
                    Update experto
                  </Link>

                  <button
                    onClick={() => handleDelete(experto._id)}
                    className="btn btn-secondary w-100 mb-1"
                  >
                    Delete experto
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div
          className="modal fade"
          id="foo"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {nombreBio} Bio
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body example">
                <div>{biografia}</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/anadirexperto" className="btn btn-warning w-100 mb-5">
        Añadir nuevo experto
      </Link>
    </div>
  );
}
export default Expertos;
