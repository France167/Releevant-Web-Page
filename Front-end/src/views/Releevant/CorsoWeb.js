import React, { useState, useEffect } from "react";
import Image from "../../components/images/camera.jpg";
import Image1 from "../../components/images/codeBoot.jpg";
import "../../style/css-cursoweb.css";
import "../../style/css.bootcamp.scss";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { HashLink } from "react-router-hash-link";
import emailjs from "emailjs-com";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function CorsoWeb() {
  const { docentes } = useGlobalContext();
  const initialValues = { nombre: "", email: "", telefono: "", info: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [biografia, setBiografia] = useState("");
  const [nombreBio, setNombreBio] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function bio(_id) {
    var docente = docentes.find((d) => d._id === _id);
    setBiografia(docente.bio);
    var nomeDocente = docentes.find((n) => n._id === _id);
    setNombreBio(nomeDocente.nombre);
  }

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
      <img
        className="foto-cursoweb"
        id="foto-cursoweb"
        src={Image}
        alt="code"
        width={"100%"}
      />
      <h1 className="title-cursoweb text-center">BOOTCAMP DESARROLLO WEB</h1>
      <div className="boot">
        <p className="p-title-cursoweb text-center">
          <b>Releevant</b> ofrece el mejor bootcamp de la Málaga tecnológica.
          Somos pioneros. En 2016 trajimos el modelo de bootcamp tecnológico a
          Málaga, iniciando un tenaz camino que ha estado lleno de aprendizaje,
          pero también repleto de éxitos; podemos presumir que gracias al modelo
          de cómo aprender a programar desde 0, más de 200 programadores en
          activo han pasado por nuestras formaciones.
        </p>
      </div>

      <h2 className="h2-programar text-center module">
        APRENDE A PROGRAMAR DESDE CERO CON RELEEVANT
      </h2>
      <div className="my-5">
        <p className="p-rel-curso module">
          En <b>Releevant</b> tenemos muchos años de experiencia en formación
          tecnológica. Nuestros expertos, además, pertenecen a la industria IT,
          por lo que nuestras formaciones son diseñadas, impartidas y dirigidas
          por profesionales en activo, lo que proporciona un valor añadido al
          aprender de especialistas que te enseñan cómo se trabaja en las
          empresas con las herramientas que practicarás con nosotros.
        </p>
        <p className="p-rel-curso module">
          Acumulamos a lo largo de los años{" "}
          <b>
            miles de horas en cursos para empresas y compañías, muchas ediciones
            de Bootcamps
          </b>{" "}
          tecnológicos, y somos referentes en Málaga y Andalucía a la hora de
          hablar de formación tecnológica.
        </p>
        <p className="p-rel-curso module mb-5">
          <b>
            Somos pioneros. En 2016 trajimos el modelo de bootcamp tecnológico a
            Málaga
          </b>
          , iniciando un tenaz camino que ha estado lleno de aprendizaje, pero
          también repleto de éxitos; podemos presumir que gracias al modelo de
          cómo aprender a programar desde 0, más de 200 programadores en activo
          han pasado por nuestras formaciones.
        </p>
      </div>
      <div className="etapas-boot">
        <h2 className="title-h2-cursoweb text-center module">
          ¿QUÉ APRENDERÉ EN EL BOOTCAMP?
        </h2>
        <div className="etapas module">
          <div className="row">
            <div className="etapas-col col-2">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="title-cursow list-group-item list-group-item-action active btn-secondary"
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="list-home"
                >
                  ETAPA 1
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                >
                  ETAPA 2
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-messages-list"
                  data-bs-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="list-messages"
                >
                  ETAPA 3
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-settings-list"
                  data-bs-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="list-settings"
                >
                  ETAPA 4
                </a>
              </div>
            </div>
            <div className="col-10">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <h3 className="h3-web">
                    MAQUETACIÓN Y BASES DE PROGRAMACIÓN
                  </h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated  bg-info"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    En esta etapa aprenderás los conceptos más básicos de la
                    programación web. Empezaremos con{" "}
                    <b>HTML, CSS, SASS y SCSS</b>, junto con{" "}
                    <b>diseños responsive, Flexbox y Bootstrap</b>. Todo ello
                    para tener unas bases sólidas de maquetación web. Una vez
                    tengamos el “esqueleto” de la web hecho, habrá que darle
                    funcionalidades. Es ahí cuando entra <b>Javascript</b>.
                    Aprenderemos a manipular el DOM, es decir, darle vida a las
                    webs en todos los sentidos. Asentaremos los conceptos
                    iniciales que iremos completando en el resto de etapas.
                    También te familiarizarás con el <b>control de versiones</b>
                    .
                  </p>
                  <p className="p-web">
                    Para finalizar, harás tu <b>primer proyecto</b>, para
                    asegurar y afianzar los conocimientos de los lenguajes que
                    has aprendido. Pero eso no es todo, ¡hay más! →
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  <h3 className="h3-web">BACK-END Y PROGRAMACIÓN AVANZADA</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    En la segunda etapa de este bootcamp nos metemos de lleno en
                    la parte más abstracta de la programación: el{" "}
                    <b>back-end</b>. Aprenderás conceptos como <b>MVC</b>{" "}
                    (modelo-vista-controlador) y crearás tu propio servidor de
                    la mano de <b>Node.js y ExpressJS</b>. Empezarás a tratar y
                    manejar bases de datos de la mano de
                    <b> MySQL</b> y <b>MongoDB</b>, aprenderás las diferencias
                    entre ellas y te meterás de lleno en el mundo de las
                    solicitudes <b> HTTP</b> y las
                    <b> API</b>. También entrarás en el mundo de algunas de las
                    tecnologías más punteras actualmente, como{" "}
                    <b>AWS y Docker</b>.
                  </p>
                  <p className="p-web">
                    Para finalizar, harás tu <b>segundo proyecto</b>, esta vez
                    para combinar todo lo que has aprendido en las dos etapas.
                    Podrás
                    <b> crear una </b>web básica, tanto con su <b>front-end</b>{" "}
                    como con su
                    <b> back-end</b>, en la que podrás guardar, enviar,
                    modificar y eliminar datos. Además, te ayudará a afianzar
                    todavía más tus conocimientos para avanzar hacia tu último
                    reto. →
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  <h3 className="h3-web">FRONT-END: REACT</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    Esta va a ser la etapa del bootcamp más intensa. Pondrás a
                    prueba todos los conocimientos adquiridos hasta ahora, y
                    aprenderás la{" "}
                    <b>librería de front-end más potente del mercado: React</b>.
                    Desarrollado por <b>Facebook</b>, es uno de los lenguajes
                    más demandados actualmente en el sector tecnológico.
                    Aprenderás conceptos como <b>SPA</b> (Single Page
                    Application) y la arquitectura basada en componentes se
                    convertirá en algo habitual para ti.
                  </p>
                  <p className="p-web">
                    Aparte de esto, aprenderás conocimientos de <b>SCRUM</b>,
                    para saber cómo organizan y estructuran los proyectos las
                    mejores empresas; sabrás todos los pasos para{" "}
                    <b>organizar y crear un proyecto real</b>, y lograrás tener
                    una base sólida de los conceptos de <b>UI</b> (User
                    Interface) y <b>UX</b> (User Experience).
                  </p>
                  <p className="p-web">
                    En este momento ya estarás listo para… ¡enfrentarte al
                    <b> proyecto final</b>! Unirás todo lo aprendido en estas
                    etapas, y como resultado{" "}
                    <b>crearás una auténtica aplicación full-stack</b>. Pondrás
                    a prueba tus conocimientos en front-end con React y la
                    maquetación, y tus conocimientos en back-end con las bases
                    de datos y Node.js. Además,{" "}
                    <b>
                      este proyecto final será expuesto a las empresas que te
                      contratarán
                    </b>
                    . Pero… ¡eso te lo contamos en la siguiente etapa! →
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  <h3 className="h3-web">¡HIRING DAY!</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    Esta es la última etapa del bootcamp de desarrollo web.
                    ¡Aquí ya serás todo un{" "}
                    <b>
                      <i>Full Stack Web Developer</i>
                    </b>
                    ! En ella tendrás charlas de empresas y profesionales que
                    vendrán a <b>reclutar</b> a los alumnos del bootcamp.
                    También habrá <b>visitas a empresas</b>, para que conozcas
                    de primera mano cómo funcionan por dentro. Por último,
                    presentarás tu proyecto final ante{" "}
                    <b>múltiples empresas del sector tecnológico</b>. ¡El
                    trabajo estará hecho! En este momento estarás listo para
                    optar a muchos puestos de trabajo en el sector.
                  </p>
                  <p className="p-web">
                    <b>Releevant te acompañará y asesorará</b> sobre cómo hacer
                    las entrevistas, información relevante sobre ellas, y
                    mediará para que los procesos para que encuentres trabajo
                    sean los mas cortos posibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-boot row" style={{ margin: "0vh 0vh" }}>
        <div className="image-boot col-4"></div>
        <div className="columna-8 col-8">
          <div className="row">
            <div className="formacion-bootcamp module">
              <div className="formacion-divs-bootcamp1 div-11 module">
                <div class="flip-box1" style={{ margin: "0vh 0vh" }}>
                  <div class="flip-box-inner">
                    <div class="flip-box-front1">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si te ha graduato recientemente...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        Si te acabas de graduar en FP o en la universidad, este{" "}
                        <b>bootcamp de programación</b> orientado a desarrollo
                        web te proporcionará las habilidades imprescindibles
                        para poder iniciar tu propia carrera como programador.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formacion-divs-bootcamp1 div-22 module">
                <div class="flip-box2">
                  <div class="flip-box-inner">
                    <div class="flip-box-front2">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si quieres trabajar en el sector tecnológico...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        Este <b>bootcamp de programación en Málaga</b>{" "}
                        complementará los conocimientos que ya tienes
                        adquiridos, podrás optar a perfiles o roles más
                        técnicos, además tendrás una perspectiva más enfocada a
                        las últimas tecnologías.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h2 className="h2-cursoweb text-center module">
              ¿Este bootcamp es para mi?
            </h2>
          </div>
          <div className="row">
            <div className="formacion-bootcamp module">
              <div className="formacion-divs-bootcamp1 div-11 module">
                <div class="flip-box3" style={{ margin: "0vh 0vh" }}>
                  <div class="flip-box-inner">
                    <div class="flip-box-front3">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si buscas impulsar tu carrera...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        Este <b>bootcamp de programación para desarrollo web</b>{" "}
                        es perfecto para alguien que está buscando entrar en el
                        sector tecnológico. Te ayudará a conseguir los
                        conocimientos necesarios para poder conseguir trabajo
                        como desarrollador junior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formacion-divs-bootcamp1 div-22 module">
                <div class="flip-box4">
                  <div class="flip-box-inner">
                    <div class="flip-box-front4">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si quieres cambiar de vida...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        En realidad, para iniciarte en el mundo tecnológico y
                        llegar a ser un{" "}
                        <b>
                          <i>Full Stack Web Developer</i>
                        </b>{" "}
                        no necesitas ninguna característica en especial.
                        Trabajes en lo que trabajes, seas como seas, si tienes
                        iniciativa, actitud y ganas de aprender, conseguirás
                        entrar en el sector IT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-dos d-flex justify-content-evenly">
        <div className="sec-uno d-flex justify-content flex-column">
          <div>
            <h2
              className="h2-cursoweb-sec-dos text-center module"
              id="precencialidad"
            >
              ¿POR QUÉ ESTUDIAR ESTE BOOTCAMP?
            </h2>
          </div>
          <div>
            <img className="image-bo" src={Image1} alt="coding" width={"95%"} />
          </div>
          <div>
            <p className="p-formacion-why">
              Releevant es mucho más que un sitio para formarte
            </p>
          </div>
        </div>
        <div className="d-flex justify-content flex-column">
          <div className="sec-why">
            <h3 className="why">
              <span>01</span> Aprenderás las últimas tecnologías
            </h3>
            <p className="p-formacion-sec-dos">
              Hemos diseñado un temario para que aprendas desde cero las
              tecnologías que más demandan las empresas. Recuerda, en el sector
              IT hay una enorme demanda.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>02</span> La mejor metodología para aprender
            </h3>
            <p className="p-formacion-sec-dos">
              Desde nuestra experiencia, la mejor forma de aprender programación
              es... programando. Parece evidente, pero no suele ser como se
              hacen las cosas. En Releevant presentamos una experiencia muy
              práctica con este bootcamp de programación, haciendo que el alumno
              realice proyectos por él mismo, sin olvidar el justo equilibrio
              con las bases de la teoría y los fundamentos de la programación.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>03</span> Desarrollarás tus soft-skills
            </h3>
            <p className="p-formacion-sec-dos">
              Te ayudamos a desarrollar tu trabajo en equipo, tu comunicación en
              un entorno de trabajo, tu capacidad para realizar proyectos
              complejos en tiempo y de la forma más adecuada.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>04</span> Pertenecerás a #releevantpeople
            </h3>
            <p className="p-formacion-sec-dos">
              Formamos una gran comunidad de desarrolladores dispuestos a
              acogerte con los brazos abiertos. Tendrás acceso a los meetups,
              masterclassName y eventos. Releevant es mucho más que un sitio
              para formarte. Te sentirás desde el primer día dentro del sector
              tecnológico.
            </p>
          </div>
        </div>
      </div>
      <h2 className="h2-docentes text-center module" id="profesores">
        TUS PROFESORES
      </h2>
      <div className="container module">
        <div className="row justify-content-between">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              snap: true,
              perPage: 3,
              autoScroll: {
                speed: 2,
              },
              arrows: true,
              pagination: false,
              breakpoints: {
                700: {
                  perPage: 1,
                },
              },
              breakpoints: {
                1425: {
                  perPage: 2,
                },
              },
              breakpoints: {
                1023: {
                  perPage: 1,
                },
              },
              gap: "3rem",
            }}
          >
            {docentes.map((docente) => {
              return (
                <SplideSlide key={docente._id}>
                  <div className="col d-flex justify-content-around">
                    <div className="card mb-5" style={{ width: "19rem" }}>
                      <img
                        src={docente.foto}
                        className="card-img-top embed-responsive-item"
                        alt="..."
                        width={"15%"}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{docente.nombre}</h5>
                        <h6>{docente.posicion}</h6>
                        <p className="card-text overview">{docente.bio}</p>
                        <button
                          onClick={() => bio(docente._id)}
                          type="button"
                          className="btn btn-secondary mr-1"
                          data-toggle="modal"
                          data-target="#foo"
                        >
                          See full bio
                        </button>
                        <a
                          className="ml-5"
                          href={docente.LinkedIn}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="37"
                            height="37"
                            fill="gray"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
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
      <h2 id="financiacion" className="h2-financiacion text-center module">
        OPCIONES DE FINANCIACIÓN Y BECAS
      </h2>
      <h5 className="h5-financiacion text-center">
        Construye tu futuro con la financiación que necesites
      </h5>
      <div className="picture">
        <div className="container">
          <div className="finanziazione row">
            <div className="basico col">
              <h3 className="h3-fin">Basico</h3>
              <u className="list-fin">
                <li className="list-fin">
                  <b>-Pago único inicial.</b>
                </li>
                <li className="list-fin">
                  <b>-Obtienes 5% de descuento</b>.
                </li>
              </u>
              <HashLink
                to="/inicio/#form-inicio"
                className="bottone1 btn btn-light mb-5"
              >
                ¡5% de descuento!
              </HashLink>
            </div>
            <div className="basico col">
              <h3 className="h3-fin">Pro</h3>
              <u className="list-fin">
                <li className="list-fin">
                  <b>-Te financiamos nosotros.</b>
                </li>
                <li className="list-fin">
                  <b>-Reserva matricula 25%</b>
                </li>
                <li className="list-fin">
                  <b>-Cuotas en 5 meses</b>
                </li>
                <li className="list-fin">
                  <b>-Sin interes, ni trampas.</b>
                </li>
              </u>
              <HashLink
                to="/inicio/#form-inicio"
                className="bottone2 btn btn-light"
              >
                ¡Cuotas en 5 meses!
              </HashLink>
            </div>
            <div className="basico col">
              <h3 className="h3-fin">Unicaja</h3>
              <u className="list-fin">
                <li className="list-fin">
                  <b>-Con Unicaja Banco Exclusivo</b>
                </li>
                <li className="list-fin">
                  <b>-Paga hasta un año despues de &nbsp;haber comenzado</b>
                </li>
              </u>
              <HashLink
                to="/inicio/#form-inicio"
                className="bottone3 btn btn-light"
              >
                ¡Me interesa!
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="finan">
        <h3 className="h3-pag text-center">
          ¿Y si te dijéramos que no pagas hasta que no encuentres trabajo?{" "}
          <HashLink to="/inicio/#form-inicio" className="btn btn-light">
            ¡CUÉNTAME!
          </HashLink>
        </h3>
      </div>
      <h2 id="faq" className="h2-financiacion text-center module">
        PREGUNTAS MÁS FRECUENTES
      </h2>
      <div
        className="accordion-acc accordion accordion-flush m-auto module my-5 w-50"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h4 className="pregunta-title">
                ¿Por qué tengo que aprender a programar?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                El mundo está cambiando, y para el cambio se necesitan expertos
                en código. Actualmente se <b>precisan 85.000 programadores</b>{" "}
                en España. La demanda es y va a ser exponencial, y{" "}
                <b>
                  no hay suficientes programadores para cubrir las necesidades
                </b>
                . Por eso pensamos que estudiar programación es el futuro, y
                Releevant te ayuda a aprender programación desde cero.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h4 className="pregunta-title">
                ¿Qué puedo estudiar para ser programador?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Si tu preguntar es qué estudiar para ser un programador, desde
                Releevant lo tenemos claro: nuestro{" "}
                <b>bootcamp de Desarrollo web</b>. Podrás{" "}
                <b>aprender a programar desde cero</b> en entornos web, o si ya
                has estudiado programación, aprenderás nuevas tecnologías, con
                un temario adaptado a un aprendizaje progresivo. Aprenderás
                desde a cómo maquetar una web, hasta los frameworks más potentes
                para llevar tus proyectos al siguiente nivel. Nosotros te
                guiaremos por el camino, para que te conviertas en alguien
                releevante del sector tecnológico.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h4 className="pregunta-title">
                Razones para hacer un bootcamp de desarrollo web
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Hay muchas razones para que te subas a esta aventura de hacer un
                curso de desarrollador web. Tanto si quieres{" "}
                <b>
                  cambiar de profesión, dar un giro a tu vida, ampliar,
                  actualizar tus conocimientos o emprender en el mundo digital
                </b>
                , ¡¡¡reciclarte profesionalmente y entra en el apasionante
                sector de la tecnología!!!
              </p>
              <p className="p-faq">
                {" "}
                Puede que lleves muchos años trabajando en el mismo trabajo, y
                te aburre o te sientes estancado sin posibilidades de progresar.
                El mundo está cambiando; vivimos una época apasionante dentro
                del <b>mundo IT</b>, donde cada día{" "}
                <b>hacen falta más expertos</b> y la demanda no se cubre. Las
                instituciones educativas tradicionales no pueden adaptarse a los
                continuos cambios y actualizaciones que se producen en la
                tecnología a una velocidad vertiginosa, pero los bootcamps
                tienen la capacidad de reacción inmediata: solucionan el
                problema de cómo aprender a programar desde 0, y podemos
                incorporar a nuestro programa todos aquellos{" "}
                <b>nuevos contenidos</b> que interesen en tu aprendizaje porque
                son los que utilizan las empresas en cada momento.{" "}
              </p>
              <p className="p-faq">
                <b>Llevamos ventaja frente a otras ofertas formativas</b>:
                nuestros expertos son profesionales referentes en el sector, con
                muchos años de experiencia en el mundo del desarrollo, y que son
                capaces de dirigir tu aprendizaje como si estuvieras ya en una
                empresa: aprendiendo a trabajar y a desarrollar una profesión
                real, no basada en temarios, sino en práctica y casos reales.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <h4 className="pregunta-title">
                ¿Necesito alguna experiencia previa o requisito previo?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Mucha gente se pregunta cuando empieza qué estudiar para ser
                programador, cómo aprender a programar desde 0, o si necesito de
                alguna experiencia para ello. La realidad es que{" "}
                <b>no necesitas ninguna titulación para entrar</b>. La
                programación es para todos y cualquiera puede descubrir y
                trabajar en el mundo del código. Necesitarás iniciarte en el
                pensamiento lógico, la resolución de problemas y las decisiones
                estructuradas, pero no te preocupes, desde la primera clase te
                enseñaremos a acostumbrarte a estas disciplinas.{" "}
              </p>
              <p className="p-faq">
                Comenzamos el{" "}
                <b>bootcamp para que puedas aprender a programar desde cero</b>,
                con un temario adaptado a un aprendizaje progresivo, estimulando
                de forma continua diferentes procesos cognitivos que aceleran tu
                progreso. El desarrollo de tu aprendizaje es sobre todo,{" "}
                <b>práctico</b>, aplicarás todos los conocimientos que vayas
                adquiriendo en casos reales idénticos a los que se realizan en
                las empresas, ya que tu futuro está allí, trabajando en la
                empresa.
              </p>
              <p className="p-faq">
                {" "}
                ¿Estás motivado para cambiar tu situación actual? Sólo{" "}
                <b>necesitas actitud, entusiasmo y energía</b>
                para los <b>5 meses</b> de experiencia práctica continua que
                vamos a proporcionarte.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <h4 className="pregunta-title">
                Y si ya sé programar, ¿de qué me sirve este bootcamp?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Algunos de los estudiantes que han entrado al bootcamp ya
                poseían alguna certificación en informática o han realizado
                formación previa. Estudiar programación no lo es todo, y{" "}
                <b>en este bootcamp no sólo enseñamos programación</b>. Te
                actualizarás: aprenderás a usar las últimas herramientas
                profesionales como <b>GitHub</b>, metodologías de trabajo que se
                utilizan en las empresas reales y trabajarás en
                <b>AGILE</b>. Además, aprenderás las mejores prácticas de
                desarrollo de programas, los principios <b>SOLID</b> y
                tecnologías como <b>MongoDB, ExpressJS, NodeJS y React</b>.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <h4 className="pregunta-title">
                ¿Tengo que llevar mi propio ordenador?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                No es necesario. En Releevant tienes{" "}
                <b>
                  para ti un ordenador de alta gama que utilizarás durante todo
                  el bootcamp
                </b>
                . Eso sí, si tu portátil y tú sois inseparables, dínoslo, lo
                entendemos.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <h4 className="pregunta-title">
                ¿A qué trabajos puedo optar si hago este bootcamp?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSeven"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Podrás trabajar como programador <b>Back-End</b>, programador
                <b> Front-End</b>, desarrollador{" "}
                <b>Full-Stack, desarrollador de aplicaciones, diseñador web</b>…
                son profesiones que requiere el mercado laboral y que su demanda
                va a crecer de forma exponencial en los próximos años. Ten en
                cuenta que te incorporarás como programador junior, aún te
                quedará mucho camino en tu progreso.
              </p>
              <p className="p-faq">
                En nuestros bootcamps de programación se logra una{" "}
                <b>empleabilidad superior al 90% de los alumnos graduados</b>.
                Las empresas están esperando constantemente nuevos técnicos que
                cubran las necesidades de sus departamentos.
              </p>
              <p className="p-faq">
                El sector IT es el que más empleo genera, y se prevé que tan
                sólo hasta 2.025 se crearán 500.000 puestos de trabajo en
                tecnología. Por lo tanto, no se forman los suficientes técnicos
                en la educación reglada cada año, por lo que las formaciones
                privadas están siendo un éxito, ya que en poco tiempo estarás
                preparado para incorporarte como desarrollador. Aprender a
                programar desde cero nunca ha sido tan sencillo.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <h4 className="pregunta-title">¿Puedo financiar el bootcamp?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingEight"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Por supuesto. Ayudamos a todas las personas que quieran estudiar
                programación. No todas las personas tenemos las mismas
                circunstancias. Puedes fraccionar el pago durante la duración
                del Bootcamp. Explícanos cuáles son las tuyas y te asesoraremos.
                Además, trabajamos con entidades bancarias que te proporcionan
                <b>préstamo de estudios</b> con unas condiciones y un periodo de
                carencia muy atractivas.{" "}
                <HashLink to="/curso-desarrollo/#financiacion">
                  Tienes más información en esta página
                </HashLink>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              <h4 className="pregunta-title">
                ¿Por qué un curso de desarrollo web presencial?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingNine"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                En Releevant defendemos que la presencialidad es algo
                fundamental para una enseñanza profunda. No es lo mismo estar
                delante de tu ordenador sentado intentado resolver problemas,
                que tener un profesor al lado por si te surge cualquier duda.
                Por eso hemos lanzado este bootcamp de desarrollo web, y tenemos
                idea de ir lanzando cursos de informática por toda Málaga.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen"
            >
              <h4 className="pregunta-title">
                ¿Tenéis pensado hacer más cursos de informática en Málaga?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTen"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                La respuesta es <b>sí</b>. Sabemos que{" "}
                <b>
                  Málaga es uno de los centros tecnológicos más importantes de
                  España
                </b>
                , y por eso sabemos la demanda que hay de programadores. Este
                curso de desarrollador web es solo el primer paso de muchos
                cursos de informática y bootcamps que haremos en Málaga. Están
                en camino los bootcamps de Java y Angular, bootcamps de I.A, y
                muchos más.
              </p>
            </div>
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
                  {/* Su formulario se ha envíado correctamente! */}
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
                    className="contact-icon"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/releevant.tech"
                    target="_blank"
                    className="contact-icon"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.meetup.com/es-ES/releevant/?_cookie-check=Xd_hTaHLTwr8rzUr"
                    target="_blank"
                    className="contact-icon"
                  >
                    <i className="fab fa-meetup" aria-hidden="true"></i>
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

export default CorsoWeb;
