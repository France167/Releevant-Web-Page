import React, { useState, useEffect } from "react";
import Powerslap from "../../components/video/video.mp4";
import Div1 from "../../components/images/div1.jpg";
import Div2 from "../../components/images/div2.jpg";
import Div3 from "../../components/images/div3.jpg";
import Div4 from "../../components/images/div4.jpg";
import "../../style/css-inicio.css";
import { HashLink } from "react-router-hash-link";
import emailjs from "emailjs-com";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function Inicio() {
  const initialValues = { nombre: "", email: "", telefono: "", info: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validado = validate(formValues);
    setFormErrors(validate(formValues));
    if (Object.keys(validado).length === 0) {
      setIsSubmit(true);
      setFormValues(initialValues);
      emailjs
        .sendForm(
          "service_miiwiqw",
          "template_m5k9cvi",
          e.target,
          "KzzPds4TVC6qE0l-e"
        )
        .then((res) => {
          Swal.fire(
            "Bien!",
            " Su formulario se ha envíado correctamente!",
            "success"
          );
          console.log(res);
        });
    } else {
      setFormErrors(validate(formValues));
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regexPhone =
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const regex = /^[^\s@]+@[^\s@].[^\s@]{2,}$/i;
    if (!values.nombre) {
      errors.nombre = "Introducir un nombre!";
    }
    if (!values.email) {
      errors.email = "Introducir un correo eletrónico!";
    } else if (!regex.test(values.email)) {
      errors.email = "Introducir un correo eletrónico!";
    }
    if (!values.info) {
      errors.info = "Introducir info!";
    }
    if (!values.telefono) {
      errors.telefono = "Introducir un numero de telefono!";
    } else if (
      !regexPhone.test(values.telefono) ||
      values.telefono.length < 9
    ) {
      errors.telefono = "Introducir un numero de telefono valido!";
    }
    return errors;
  };
  return (
    <div>
      <video
        className="videoInicio"
        id="video-inicio"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50vh",
          minHeight: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src={Powerslap} type="video/mp4" />
      </video>
      <h1 className="title text-center">CAMBIA TU FUTURO</h1>
      <p className="p-title-inicio text-center">
        ¡Fórmate y comienza a trabajar en el sector tecnológico!
      </p>
      <h2 className="title-h2 module">Somos programadores,</h2>
      <h2 className="title-h2-dos module">
        Te enseñamos a programar desde cero
      </h2>
      <div className="formacion module">
        <div className="formacion-divs div-1-inicio module">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Div1}
                  alt="unico"
                  style={{ width: "100%", height: "100%" }}
                  className="images-inicio"
                />
                <h3 className="h3 text-center mt-3">Eres único </h3>
              </div>
              <div className="flip-card-back">
                <h4 className="h4 text-center mt-3"> Desde 0 al 100%!</h4>
                <p className="p-formacion">
                  Sabemos que cada persona tiene un nivel de conocimientos o una
                  destreza particular. Ya vengas desde cero, o tengas
                  experiencia en programación, nos adaptamos a ti, a tu nivel y
                  habilidades.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="formacion-divs div-2-inicio module">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Div2}
                  alt="unico"
                  style={{ width: "100%", height: "100%" }}
                  className="images-inicio"
                />
                <h3 className="h3 text-center mt-3">
                  <HashLink
                    className="docentes"
                    to="/curso-desarrollo/#profesores"
                  >
                    Docentes
                  </HashLink>{" "}
                </h3>
              </div>
              <div className="flip-card-back">
                <h4 className="h4 text-center mt-3">
                  Sólo los profesionales te enseñan a trabajar.
                </h4>
                <p className="p-formacion">
                  Nuestro equipo no son docentes al uso, son profesionales en
                  activo del sector y con muchos años de experiencia. Sólo de
                  esta forma tendrás asegurada la formación real, como se
                  trabaja en la compañías de software hoy en día.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="formacion-divs div-3-inicio module">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Div3}
                  alt="unico"
                  style={{ width: "100%", height: "100%" }}
                  className="images-inicio"
                />
                <h3 className="h3 text-center mt-3">Presencialidad</h3>
              </div>
              <div className="flip-card-back">
                <h4 className="h4 text-center mt-3">
                  Face to face, porque creemos en las personas.
                </h4>
                <p className="p-formacion">
                  El streaming fue imprescindible en lo más duro de la pandemia,
                  pero sabemos que el contacto real es la mejor forma de
                  aprender, gracias al seguimiento de los profesores y la
                  colaboración con tus compañeros.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="formacion-divs div-4-inicio module">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Div4}
                  alt="unico"
                  style={{ width: "100%", height: "100%" }}
                  className="images-inicio"
                />
                <h3 className="h3 text-center mt-3">Empleabilidad</h3>
              </div>
              <div className="flip-card-back">
                <h4 className="h4 text-center mt-3">
                  95% asegurado, sólo depende de ti.
                </h4>
                <p className="p-formacion">
                  Con tu esfuerzo y dedicación durante el bootcamp, obtendrás
                  los conocimientos sólidos para empezar a trabajar como dev
                  junior. Te introducimos en el sector con nuestros eventos y
                  accederás a nuestra red de empresas partners, que asistirán a
                  la presentación de tu proyecto final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title-h2-tres text-right module">Sólo depende de ti</h2>
      <div className="container-bootcamp module">
        <div>
          <h2 className="h2-curso mr-5 module">NUESTRO BOOTCAMP</h2>
          <h5 className="h5-curso1 mb-5 module">
            Las últimas tecnologías te acompañan
          </h5>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">DESARROLLO WEB</h2>
            <p>
              Más de 600 horas, en tan solo 5 meses. <br /> <br />
              Nuestra filosofía es que aprendas de forma totalmente práctica,
              convirtiéndote en programador creando desde cero todo el ciclo de
              desarrollo del producto web:
              <br />- Prototipado, back-end, servidores, front-end,
              repositorios, QA, Scrum...
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">
              Saber más!
            </HashLink>
          </div>
        </div>
      </div>
      <h2 className="h2-carousel text-center module">
        NUESTRA ESCUELA RELEEVANT
      </h2>
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide module"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/12/web3-2048x1181.jpg"
              className="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/12/IMG_20211129_194754-2048x1152.jpg"
              className="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_115930-2048x1152.jpg"
              className="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_120213-2048x1152.jpg"
              className="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_115812-2048x1152.jpg"
              className="d-block w-75 m-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h2 className="h2-compania-inicio1 text-center module">
        NUESTROS RELEEVANT PARTNERS
      </h2>
      <h5 className="h5-curso text-center mb-5 module">
        Tenemos la confianza de diferentes compañías con las que han trabajado
        nuestros equipos.
      </h5>
      <div className="container mt-5 module">
        <div className="row">
          <div className="col d-flex justify-content-evenly">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/tel-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/minis-ind-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/lot-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/com-madrid-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/Logo_Caja_Rural-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/bank-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/aepd-logo-300x279.png"
              alt="companies"
              width={"10%"}
            />
          </div>
        </div>
      </div>
      <div className="form-cont">
        <section id="contact">
          <h2
            className="h2-compania-inicio text-center module"
            id="form-inicio"
          >
            ¿QUIERES MÁS INFORMACIÓN?
          </h2>
          <h5 className="h5-curso text-center">
            ¡Rellena nuestro formulario y la obtendrás!
          </h5>
          <div className="contact-wrapper">
            <form
              id="contact-form"
              className="form-horizontal"
              role="form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <div className="">
                  <input
                    id="nombre"
                    name="nombre"
                    className="form-control form-control w-100 m-auto my-3"
                    type="text"
                    onChange={handleChange}
                    placeholder="Nombre y apellido"
                    value={formValues.nombre}
                    required
                  />
                  <p className="error">{formErrors.nombre}</p>
                </div>
              </div>

              <div className="form-group">
                <div className="">
                  <input
                    id="email"
                    name="email"
                    className="form-control form-control w-100 m-auto my-3"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    required
                  />
                  <p className="error">{formErrors.email}</p>
                </div>
              </div>

              <p className="error">{formErrors.email}</p>
              <input
                id="telefono"
                name="telefono"
                className="form-control"
                type="text"
                value={formValues.telefono}
                onChange={handleChange}
                placeholder="Móvil de contacto"
                required
              />
              <p className="error">{formErrors.telefono}</p>

              <div className="text-area w-100 m-auto">
                <textarea
                  id="info"
                  name="info"
                  wrap="hard"
                  className="form-control w-100 m-auto  my-3"
                  value={formValues.info}
                  onChange={handleChange}
                  placeholder="Quiero más información sobre Releevant."
                  rows="3"
                  cols="5"
                ></textarea>
                <p className="error">{formErrors.info}</p>
              </div>
              {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="correct">
                  {/*  Su formulario se ha envíado correctamente! */}
                </div>
              )}

              <button
                className="btn btn-secondary send-button"
                id="submit"
                type="submit"
              >
                {" "}
                <i className="fa fa-paper-plane"></i> &nbsp; Enviar
              </button>
            </form>

            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <i className="fa fa-map-marker fa-2x">
                    <span className="contact-text place">
                      Polo de contenidos digitales
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:+34 695 30 40 40" title="Give me a call">
                        +34 695 30 40 40
                      </a>
                    </span>
                  </i>
                </li>

                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span className="contact-text gmail">
                      <a
                        href="mailto:hola@releevant.com"
                        title="Send me an email"
                      >
                        hola@releevant.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <hr />
              <ul className="social-media-list">
                <li>
                  <a
                    href="https://www.linkedin.com/company/releevant/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon"
                  >
                    <i
                      className="fab fa-linkedin" /*  aria-hidden="true" */
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/releevant.tech"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon"
                  >
                    <i
                      className="fab fa-facebook-f" /*  aria-hidden="true" */
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.meetup.com/es-ES/releevant/?_cookie-check=Xd_hTaHLTwr8rzUr"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon"
                  >
                    <i className="fab fa-meetup" /*  aria-hidden="true" */></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=+34611163534&text=Hola, Nececito mas informaciones!"
                    className="contact-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-whatsapp" /*  aria-hidden="true" */
                    ></i>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Inicio;
