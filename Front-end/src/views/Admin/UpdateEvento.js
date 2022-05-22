import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEvento() {
  const [data, setData] = useState({
    fecha: "",
    titulo: "",
    descripcion: "",
    ponentes: "",
    enlace: "",
    foto: "",
    marketing: "",
    asistentes: {
      inscrito: "",
      reales: "",
    },
  });
  let navigate = useNavigate();
  const { _id } = useParams();

  async function submit(e) {
    e.preventDefault();
    const splitFoto = data.foto.split("\\");
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha: data.fecha,
        titulo: data.titulo,
        descripcion: data.descripcion,
        ponentes: data.ponentes,
        enlace: data.enlace,
        foto: "http://localhost:3001/photos/" + splitFoto[2],
        marketing: data.marketing,
        asistentes: {
          inscrito: data.asistentes.inscrito,
          reales: data.asistentes.reales,
        },
      }),
    };
    let response = await fetch(
      `http://localhost:3001/update/evento/${_id}`,
      requestOptions
    );
    let json = await response.json();
    setData(json);
    navigate("/eventos");
  }

  function handleForm(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleAsistentes(e) {
    const newData = { ...data };
    newData.asistentes[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <h3 className="text-center my-5">Detalles Evento </h3>
      <form onSubmit={(e) => submit(e)}>
        <div className="w-50 m-auto">
          <h6>Fecha evento</h6>
          <input
            onChange={(e) => handleForm(e)}
            id="fecha"
            value={data.fecha}
            className="form-control form-control-sm w-100 m-auto my-3"
            type="date"
            required
          ></input>
        </div>
        <input
          onChange={(e) => handleForm(e)}
          id="titulo"
          value={data.titulo}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Titulo"
          required
        />
        <textarea
          onChange={(e) => handleForm(e)}
          id="descripcion"
          value={data.descripcion}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Descripción evento"
          rows="3"
          cols="5"
        ></textarea>

        <input
          onChange={(e) => handleForm(e)}
          id="ponentes"
          value={data.ponentes}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Ponentes"
          required
        />
        <input
          onChange={(e) => handleForm(e)}
          id="enlace"
          value={data.enlace}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Enlace"
          required
        />
        <div className="w-50 m-auto">
          <h6>Elige Foto</h6>
          <input
            onChange={(e) => handleForm(e)}
            id="foto"
            value={data.foto}
            className="form-control form-control-sm w-100 m-auto my-3"
            type="file"
            placeholder="Foto"
            required
          />
        </div>
        <textarea
          onChange={(e) => handleForm(e)}
          id="marketing"
          value={data.marketing}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Marketing evento"
          rows="3"
          cols="5"
        ></textarea>
        <input
          onChange={(e) => handleAsistentes(e)}
          id="inscrito"
          value={data.asistentes.inscrito}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="number"
          placeholder="Asistentes inscritos"
          required
        />
        <input
          onChange={(e) => handleAsistentes(e)}
          id="reales"
          value={data.asistentes.reales}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="number"
          placeholder="Asistentes reales"
          required
        />
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary mb-5 mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateEvento;
