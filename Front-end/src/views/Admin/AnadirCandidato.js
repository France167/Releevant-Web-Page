import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AnadirCandidato() {
  const [data, setData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    estado: "",
    fechaEntrada: "",
    origen: "",
    profesion: "",
    estudios: "",
    edad: "",
    cursoInteres: "",
    fechaContacto: "",
    call: "",
    detalles: "",
    cita: {
      fecha: "",
      ora: "",
    },
  });
  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: data.nombre,
        telefono: data.telefono,
        email: data.email,
        estado: data.estado,
        fechaEntrada: data.fechaEntrada,
        origen: data.origen,
        profesion: data.profesion,
        estudios: data.estudios,
        edad: data.edad,
        cursoInteres: data.cursoInteres,
        fechaContacto: data.fechaContacto,
        call: data.call,
        detalles: data.detalles,
        cita: {
          fecha: data.cita.fecha,
          ora: data.cita.ora,
        },
      }),
    };
    let response = await fetch(
      "http://localhost:3001/new/candidato",
      requestOptions
    );
    let json = await response.json();
    setData(json);
    navigate("/candidatos");
  }

  function handleForm(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleCita(e) {
    const newData = { ...data };
    newData.cita[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <h3 className="text-center my-5">Detalles Candidato </h3>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handleForm(e)}
          id="nombre"
          value={data.nombre}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Nombre Completo"
          required
        />
        <input
          onChange={(e) => handleForm(e)}
          id="telefono"
          value={data.telefono}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Telefono"
          required
        />
        <input
          onChange={(e) => handleForm(e)}
          id="email"
          value={data.email}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Email"
          required
        />
        <select
          onChange={(e) => handleForm(e)}
          id="estado"
          value={data.estado}
          className="form-control form-control-sm custom-select w-50 m-auto"
          required
        >
          <option defaultValue>Estado..</option>
          <option value="Mail">Mail</option>
          <option value="Follow-Up">Follow-Up</option>
          <option value="Future">Future</option>
          <option value="Pending">Pending</option>
          <option value="Retry">Retry</option>
          <option value="No">No</option>
          <option value="Call">Call</option>
          <option value="Recall">Recall</option>
          <option value="Meeting">Meeting</option>
          <option value="Otros">Otros</option>
        </select>
        <div className="w-50 m-auto mt-3">
          <h6>Fecha de entrada </h6>
          <input
            onChange={(e) => handleForm(e)}
            id="fechaEntrada"
            value={data.fechaEntrada}
            className="form-control form-control-sm w-100 my-3"
            type="date"
            required
          ></input>
        </div>

        <select
          onChange={(e) => handleForm(e)}
          id="origen"
          value={data.origen}
          className="form-control form-control-sm custom-select w-50 m-auto"
          required
        >
          <option defaultValue>Origen..</option>
          <option value="Landing">Landing</option>
          <option value="Web">Web</option>
          <option value="Call">Call</option>
          <option value="Whatsapp">Whatsapp</option>
          <option value="Mail">Mail</option>
          <option value="Boca">Boca_Boca</option>
          <option value="Referral">Referral</option>
          <option value="Evento">Evento</option>
          <option value="Otros">Otros</option>
        </select>
        <input
          onChange={(e) => handleForm(e)}
          id="profesion"
          value={data.profesion}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Profesión"
          required
        />
        <input
          onChange={(e) => handleForm(e)}
          id="estudios"
          value={data.estudios}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Estudios"
          required
        />
        <input
          onChange={(e) => handleForm(e)}
          id="edad"
          value={data.edad}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Edad"
          required
        />
        <input
          onChange={(e) => handleForm(e)}
          id="cursoInteres"
          value={data.cursoInteres}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Curso de interés"
          required
        />
        <div className="w-50 m-auto mt-3">
          <h6>Fecha de contacto </h6>
          <input
            onChange={(e) => handleForm(e)}
            id="fechaContacto"
            value={data.fechaContacto}
            className="form-control form-control-sm w-100 my-3"
            type="date"
            required
          ></input>
        </div>

        <div class="form-check form-switch w-50 m-auto">
          <input
            onChange={(e) => handleForm(e)}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="call"
            value="Si"
          />
          <label className="form-check-label" for="call">
            Llammada
          </label>
        </div>
        <textarea
          onChange={(e) => handleForm(e)}
          id="detalles"
          value={data.detalles}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Detalles sobre el candidato"
          rows="3"
          cols="5"
        ></textarea>
        <div className="w-50 m-auto mt-3">
          <h6>Fecha de la cita </h6>
          <input
            onChange={(e) => handleCita(e)}
            id="fecha"
            value={data.cita.fecha}
            className="form-control form-control-sm w-100 my-3"
            type="date"
            required
          ></input>
        </div>
        <div className="w-50 m-auto mt-3">
          <h6>Ora de la cita </h6>
          <input
            onChange={(e) => handleCita(e)}
            id="ora"
            value={data.cita.ora}
            className="form-control form-control-sm w-100 my-3"
            type="time"
            required
          ></input>
        </div>

        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary mb-5 mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnadirCandidato;
