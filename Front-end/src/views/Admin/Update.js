import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";

function Update() {
  const { alumnos, setAlumnos } = useGlobalContext();
  const [data, setData] = useState({
    alumno: {
      curso: "",
      datosPersonales: {
        nombre: "",
        foto: "",
        fechaNacimiento: "",
        residencia: "",
        telefono: "",
        email: "",
        LinkedIn: "",
      },
      infoBootcamp: {
        fechaFalta: "",
        proyectoFinal: {
          titulo: "",
          detalles: "",
          comentariosProf: "",
        },
      },
      infoReleevant: {
        origen: "",
        pc: "",
        matricula: "",
        tipoDePago: "",
        detallesPago: "",
      },
      detalles: "",
    },
  });

  let navigate = useNavigate();
  const { _id } = useParams();
  console.log(_id);

  useEffect(function () {});
  async function submit(e) {
    e.preventDefault();
    const splitFoto = data.alumno.datosPersonales.foto.split("\\");
    const splitPdf = data.alumno.infoReleevant.matricula.split("\\");
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        alumno: {
          curso: data.alumno.curso,
          datosPersonales: {
            nombre: data.alumno.datosPersonales.nombre,
            foto: "http://localhost:3001/photos/" + splitFoto[2],
            fechaNacimiento: data.alumno.datosPersonales.fechaNacimiento,
            residencia: data.alumno.datosPersonales.residencia,
            telefono: data.alumno.datosPersonales.telefono,
            email: data.alumno.datosPersonales.email,
            LinkedIn: data.alumno.datosPersonales.LinkedIn,
          },
          infoBootcamp: {
            fechaFalta: data.alumno.infoBootcamp.fechaFalta,
            proyectoFinal: {
              titulo: data.alumno.infoBootcamp.proyectoFinal.titulo,
              detalles: data.alumno.infoBootcamp.proyectoFinal.detalles,
              comentariosProf:
                data.alumno.infoBootcamp.proyectoFinal.comentariosProf,
            },
          },
          infoReleevant: {
            origen: data.alumno.infoReleevant.origen,
            pc: data.alumno.infoReleevant.pc,
            matricula: "http://localhost:3001/docs/" + +splitPdf[2],
            tipoDePago: data.alumno.infoReleevant.tipoDePago,
            detallesPago: data.alumno.infoReleevant.detallesPago,
          },
          detalles: data.alumno.detalles,
        },
      }),
    };
    let response = await fetch(
      `http://localhost:3001/updateone/${_id}`,
      requestOptions
    );
    let json = await response.json();
    setData(json);
    navigate(`/detalles/${_id}`);
  }

  function handleForm(e) {
    const newData = { ...data };
    newData.alumno[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleDatosPersonales(e) {
    const newData = { ...data };
    newData.alumno.datosPersonales[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleInfoBootcamp(e) {
    const newData = { ...data };
    newData.alumno.infoBootcamp[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleProyectoFinal(e) {
    const newData = { ...data };
    newData.alumno.infoBootcamp.proyectoFinal[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleInfoReleevant(e) {
    const newData = { ...data };
    newData.alumno.infoReleevant[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <h3 className="text-center my-5">Detalles personales </h3>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handleForm(e)}
          id="curso"
          value={data.alumno.curso}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Curso"
          required
        />

        <div className="w-50 m-auto">
          <h6>Elige Foto</h6>
          <input
            onChange={(e) => handleDatosPersonales(e)}
            id="foto"
            value={data.alumno.datosPersonales.foto}
            className="form-control form-control-sm w-100 m-auto my-3"
            type="file"
            placeholder="Foto"
            required
          />
        </div>
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="nombre"
          value={data.alumno.datosPersonales.nombre}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Nombre Completo"
          required
        />
        <div className="w-50 m-auto">
          <h6>Fechas de nacimiento</h6>
          <input
            onChange={(e) => handleDatosPersonales(e)}
            id="fechaNacimiento"
            value={data.alumno.datosPersonales.fechaNacimiento}
            className="form-control form-control-sm w-100 m-auto my-3"
            type="date"
            required
          ></input>
        </div>

        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="residencia"
          value={data.alumno.datosPersonales.residencia}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Residencia"
          required
        />
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="telefono"
          value={data.alumno.datosPersonales.telefono}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="phone"
          placeholder="Telefono"
          required
        />
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="email"
          value={data.alumno.datosPersonales.email}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="LinkedIn"
          value={data.alumno.datosPersonales.LinkedIn}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="LinkedIn"
          required
        />
        <h3 className="text-center my-5">Info Bootcamp </h3>
        <div className="w-50 m-auto">
          <textarea
            onChange={(e) => handleInfoBootcamp(e)}
            id="fechaFalta"
            value={data.alumno.infoBootcamp.fechaFalta}
            wrap="hard"
            className="form-control w-100 m-auto  my-3"
            placeholder="Detalles sobre las faltas"
            rows="3"
            cols="5"
          ></textarea>
        </div>
        <input
          onChange={(e) => handleProyectoFinal(e)}
          id="titulo"
          value={data.alumno.infoBootcamp.proyectoFinal.titulo}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Titulo de projecto final"
          required
        />

        <textarea
          onChange={(e) => handleProyectoFinal(e)}
          id="detalles"
          value={data.alumno.infoBootcamp.proyectoFinal.detalles}
          className="form-control w-50 m-auto  my-3"
          placeholder="Descripción del proyecto"
          rows="3"
        ></textarea>
        <textarea
          onChange={(e) => handleProyectoFinal(e)}
          id="comentariosProf"
          value={data.alumno.infoBootcamp.proyectoFinal.comentariosProf}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Comentarios Profesorado"
          rows="3"
          cols="5"
        ></textarea>
        <h3 className="text-center my-5">Info Releevant </h3>
        <select
          onChange={(e) => handleInfoReleevant(e)}
          id="origen"
          value={data.alumno.infoReleevant.origen}
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
          onChange={(e) => handleInfoReleevant(e)}
          id="pc"
          value={data.alumno.infoReleevant.pc}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Pc"
          required
        />
        <div className="w-50 m-auto">
          <h6>Elige Matricula</h6>
          <input
            onChange={(e) => handleInfoReleevant(e)}
            id="matricula"
            value={data.alumno.infoReleevant.matricula}
            className="form-control form-control-sm w-100 m-auto my-3"
            type="file"
            placeholder="Matricula"
            required
          />
        </div>
        <select
          onChange={(e) => handleInfoReleevant(e)}
          id="tipoDePago"
          value={data.alumno.infoReleevant.tipoDePago}
          className="form-control form-control-sm custom-select w-50 m-auto"
          required
        >
          <option defaultValue>Tipo de pago..</option>
          <option value="Directo">Directo</option>
          <option value="Cuota">Cuota</option>
        </select>
        <textarea
          onChange={(e) => handleInfoReleevant(e)}
          id="detallesPago"
          value={data.alumno.infoReleevant.detallesPago}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Detalles sobre el pago"
          rows="3"
          cols="5"
        ></textarea>
        <textarea
          onChange={(e) => handleForm(e)}
          id="detalles"
          value={data.alumno.detalles}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Comentario sobre alumno"
          rows="3"
          cols="5"
        ></textarea>
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary mb-5 mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Update;
