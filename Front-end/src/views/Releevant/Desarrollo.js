import React from "react";
import FooterRel from "../../components/FooterRel";
import Image from "../../components/images/desarrollo.jpg";
import "../../style/css-desarrollo.css";
import { HashLink } from "react-router-hash-link";

function Desarrollo() {
  return (
    <div>
      <img
        className="foto-curso-des"
        id="desarrollo"
        src={Image}
        alt="code"
        width={"100%"}
      />
      <h1 className="title-des text-center">TRABAJAMOS CONTIGO</h1>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-5">
        <div
          class="btn-group btn-group-lg"
          role="group"
          aria-label="Basic example"
        >
          <HashLink to="#desarrollo-title" class="btn btn-light">
            Desarrollo
          </HashLink>
          <HashLink to="#fomacion-empresa" class="btn btn-light">
            Formación
          </HashLink>
        </div>
        {/* <div className="w-75">
          <HashLink to="#desarrollo-title" className="btn btn-outline-light">
            DESARROLLO
          </HashLink>
        </div>
        <div className="">
          <HashLink to="#formacion-title" className="btn btn-outline-light">
            FORMACIÓN
          </HashLink>
        </div> */}
      </div>

      <h2 className="title-h2-des text-center module" id="desarrollo-title">
        SEA CUAL SEA EL PROYECTO, NOSOTROS NOS ENCARGAMOS
      </h2>
      <p className="p-des module">
        En nuestra área de desarrollo tenemos los <b>mejores expertos</b> para{" "}
        <b>dirigir cualquier proyecto</b>, por ambicioso que sea. Somos amantes
        de las
        <b> metodologías ágiles</b>, que aplicamos en nuestro trabajo, para que
        tu proyecto sea cercano, controles sus avances y te garanticen las
        entregas acordadas.
      </p>
      <p className="p-des module mb-5">
        Cada proyecto requiere la formación de un equipo dirigido por un Project
        Manager, compuesto por programadores de <b>back-end y front-end</b> (si
        lo requiere), diseñadores, expertos UX/UI y todos aquellos profesionales
        que precise su diseño y desarrollo.
      </p>
      <p className="p-des module mb-5">
        Nuestra meta es <b>eliminar barreras</b> en los negocios, facilitar las
        operaciones y ahorrar costes empresariales, gracias a la optimización de
        recursos en todos nuestros proyectos.
      </p>
      <div className="div-comun">
        <h2 className="title-h2-plat text-center module">
          DIFERENTES PLATAFORMAS Y TECNOLOGÍAS
        </h2>
        <p className="p-des2 module">
          No importa cuál sea tu necesidad ni entorno, cuéntanos cuál es tu
          proyecto y lo llevaremos a cabo. Nuestros compromisos son:{" "}
          <b>la viabilidad, la agilidad y la calidad.</b>
        </p>
        <p className="p-des2 module mb-5">
          Al igual que las tecnologías avanzan de forma inmediata, nosotros
          evolucionamos con ellas, ya que somos profesionales que{" "}
          <b>trabajan en las mejores compañías de software del mercado.</b>{" "}
          Estamos a la última, testeando y analizando los últimos avances en
          nuestro día a día y adoptándolos en nuestras soluciones.
        </p>
        <p className="p-des2 module mb-5">
          Nuestras <b>estrategias de análisis y diseño avanzados</b>, y nuestra
          decidida apuesta por la <b>innovación</b> son las capacidades que
          encontrarás en cada una de las fases de tu proyecto.
        </p>
        <div className="d-grid gap-2 col-2 mx-auto">
          <HashLink
            to="/inicio/#contact-form"
            className="bottone-info btn btn-secondary mb-5 mt-3 module"
            type="submit"
          >
            Quiero más información{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </HashLink>
        </div>
      </div>
      <h2 className="h2-desarrollo text-center module mt-2">
        ¿CÓMO GESTIONAMOS TU PROYECTO?
      </h2>
      <p className="p-des module mb-5">
        Estamos en permanente contacto con nuestros clientes para certificar
        cualquier avance y comprobar el correcto progreso de sus necesidades.
        Apostamos por la comunicación como propuesta de valor y te acompañamos
        en todas las fases, desde la primera reunión hasta la entrega del
        software. Aquí lo importante eres TÚ.
      </p>
      <div
        className="accordion accordion-flush w-75 m-auto mb-5 module"
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
              <b className="accordion-title">ANÁLISIS Y REQUISITOS</b>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p">
                {" "}
                <b>
                  Nuestros expertos se reúnen contigo, para averiguar y
                  concretar el análisis previo y los requerimientos del proyecto
                  que precisas. También se discutirá la viabilidad del mismo.
                </b>
              </p>
              <p className="p">
                Para ello realizamos un{" "}
                <b>estudio profundo de la necesidad tecnológica</b> que tiene el
                negocio y se especificarán las
                <b>características operacionales</b> que tendrá el software a
                desarrollar. Tenemos en cuenta las{" "}
                <b>diferentes áreas de trabajo</b>: reconocimiento del problema,
                evaluación, modelado, especificación y revisión. También
                construiremos la documentación por medio de
                <b> entrevistas, talleres, observación</b>, indagación, revisión
                documental y demás técnicas específicas recopilando la mayor
                información posible. Una vez hecho esto, escribimos el{" "}
                <b>plan del proyecto a seguir.</b>
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
              <b className="accordion-title"> ARQUITECTURA Y PLANIFICACIÓN</b>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p">
                <b>La arquitectura de software</b> es de especial importancia ya
                que la manera en que lo estructuremos tendrá un impacto directo
                sobre la calidad: su capacidad, desempeño, la usabilidad,
                escalabilidad y otras características que hacen un{" "}
                <b>software más eficiente y rentable.</b>
              </p>
              <p className="p">
                Además de la calidad, la arquitectura de software es muy
                importante para guiar el desarrollo, ya que eleginos la
                tecnología más adecuada para el mismo. Realizamos un enfoque en
                el que dividimos el proyecto en partes lógicas/funcionales que
                serán desarrolladas por programadores o por grupos de
                desarrolladores. La planificación de esta distribución de roles
                es indispensable para el resultado óptimo del software.
              </p>
              <p className="p">
                Así, la arquitectura que ha sido exitosa en un proyecto, puede
                ser reutilizada para distintas aplicaciones,{" "}
                <b>
                  lo que nos permite reducir costes, aumentar la rentabilidad de
                  tu negocio, y asegurar la calidad
                </b>
                , ya demostrada en anteriores desarrollos.
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
              <b className="accordion-title"> DESARROLLO</b>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p">
                La adopción de un <b>proceso de desarrollo adecuado</b> es la
                base para que podamos cumplir con los objetivos marcados:
                cumplir con los presupuestos, predecir el tiempo de desarrollo y
                mantener, ante todo, la calidad del software.
              </p>
              <p className="p">
                <b>Construimos una guía de ejecución del desarrollo,</b> que
                define de manera precisa el producto a desarrollar, las tareas y
                sus tiempos. Así mismo, determina los roles para cada integrante
                del equipo y sus actividades a lo largo del ciclo de
                programación.
              </p>
              <p className="p">
                Adoptamos para cada proyecto el rol de un Product Owner, que
                maximiza y optimiza los resultados, vigila la naturaleza de la
                aplicación para el cliente,{" "}
                <b>lidera las metodologías ágiles,</b> y sirve de puente de
                comunicación continua entre nuestro equipo y tu empresa u
                organización.
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
              <b className="accordion-title">
                {" "}
                TESTING Y PRUEBAS DE RENDIMIENTO
              </b>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p">
                Uno de los aspectos críticos de un proyecto son las{" "}
                <b>pruebas de rendimiento,</b> que controlan y{" "}
                <b>aseguran la fiabilidad y desempeño del software.</b>{" "}
                Planificamos las fases de pruebas paralelas a las de desarrollo,
                estimando los costes de las mismas y los test que se realizarán.
                Estas pruebas verifican incidencias de funcionalidad, las
                comunican al equipo de desarrollo, y validan sus correcciones.
              </p>
              <p className="p">
                El objetivo es <b>garantizar el funcionamiento</b> de tu
                aplicación, verificar la experiencia de usuario perfecta y
                asegurar el rendimiento del software en el tiempo y los cambios.
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
              <b className="accordion-title"> ENTREGA Y PRODUCCIÓN</b>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p">
                Nuestra metodología de trabajo está basada en{" "}
                <b>entregas parciales</b>
                por funcionalidades terminadas, que nos aseguran el feedback del
                cliente, acorta los tiempos de desarrollo y rentabiliza el
                proyecto.
              </p>
              <p className="p">
                En la fase final del proyecto, verificamos el{" "}
                <b>grado de cumplimiento de la aplicación con los requisitos</b>{" "}
                especificados en las fases iniciales, recopilando las
                incidencias que se hayan producido y comprobando su resolución,
                así como estableciendo el aseguramiento de la calidad con el
                equipo QA y el Product Owner.
              </p>
              <p className="p">
                Comprobamos el producto con pruebas finales y una vez
                terminadas, procedemos a la entrega y su{" "}
                <b>lanzamiento a producción.</b> Así mismo, realizamos la
                entrega de la documentación a nuestro cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-comun">
        <h2 className="h2-desarrollo1 text-center module mt-2">
          NO NOS VA LO COMÚN, BUSCAMOS ALGO DIFERENTE
        </h2>
        <p className="p-des1 module mb-5">
          En <b>Releevant</b> sabemos que el <b>mundo está cambiando</b>, y
          queremos estar a la vanguardia. Por eso estamos desarrollando
          proyectos novedosos, donde la mejora de procesos, la optimización del
          tiempo, las nuevas necesidades y el componente social es nuestro punto
          de partida.
        </p>
        <p className="p-des1 module mb-5" id="fomacion-empresa">
          Ya estamos trabajando en un proyecto relevante, donde nuestra gran
          aliada es la <b>inteligencia artificial</b>. Sabemos que todos los
          campos profesionalizados requieren acciones <b>optimizadas</b> o{" "}
          <b>automatizadas</b>. Por eso nuestras ideas van dirigidas hacia{" "}
          <b>los datos</b>, la <b>analítica predictiva</b> y la{" "}
          <b>toma de decisiones</b>, piezas potenciales en el presente e
          imprescindibles en el futuro inmediato, y que van a generar valor
          añadido en todos los sectores productivos y en la sociedad.
        </p>
      </div>
<hr/>
      <h2
        className="h2-desarrollo text-center module mt-2"
        id="formacion-title"
      >
        FORMAR ES HACER CRECER TU NEGOCIO
      </h2>
      <p className="p-des module">
        Mejorar a tus profesionales es hacer crecer tu negocio. El conocimiento
        es imprescindible para avanzar con éxito en un mercado altamente
        competitivo y carente de talento.
      </p>
      <p className="p-des module mb-5">
        Gracias a nuestra fuerte conexión con el sector tecnológico, tenemos a
        los mejores expertos en casi cualquier tecnología, que supone nuestra
        propuesta de valor: proporcionamos la formación imprescindible para que
        tus proyectos avancen, impartida por profesionales relevantes del
        sector, con muchos años de trayectoria, que pueden hacer cumplir tus
        objetivos de negocio.
      </p>
      <p className="p-des module mb-5">
        En Releevant hemos formado desde hace años a cientos de alumnos de
        empresas y compañías; tenemos el know-how imprescindible para modelar un
        proyecto formativo para tu empresa.
      </p>
      <div className="div-comun1">
        <h2 className="h2-desarrollo1 text-center module mt-2">
          NO TENEMOS CATÁLOGO!
        </h2>
        <p className="p-des1 module mb-5">
          Actualmente es imposible ofrecer una formación estática y cerrada, ya
          que las tecnologías cambian a diario y surgen nuevas continuamente.
          Por eso nosotros no te ofrecemos un listado de formaciones que
          corrieran riesgo de caer obsoletas y no darte la calidad y
          profesionalidad que requieren tus proyectos.
        </p>
      </div>
      <h2 className="h2-desarrollo text-center module mt-2">
        FORMACIÓN A MEDIDA: DINOS QUÉ NECESITAS
      </h2>
      <p className="p-des module">
        Mejorar a tus profesionales es hacer crecer tu negocio. El conocimiento
        es imprescindible para avanzar con éxito en un mercado altamente
        competitivo y carente de talento.
      </p>
      <div role="tabpanel">
        <div class="list-group w-50 m-auto mb-5" id="myList" role="tablist">
          <a
            class="bott btn-secondary list-group-item list-group-item-action active"
            data-bs-toggle="list"
            href="#home"
            role="tab"
          >
            Visión del stack tecnológico de tus proyectos.
          </a>
          <a
            class="bott btn-secondary list-group-item list-group-item-action"
            data-bs-toggle="list"
            href="#profile"
            role="tab"
          >
            Identificación de necesidades.
          </a>
          <a
            class="bott btn-secondary list-group-item list-group-item-action"
            data-bs-toggle="list"
            href="#messages"
            role="tab"
          >
            Coordinación con expertos.
          </a>
          <a
            class="bott btn-secondary list-group-item list-group-item-action"
            data-bs-toggle="list"
            href="#settings"
            role="tab"
          >
            Elaboración de propuesta.
          </a>
          <a
            class="bott btn-secondary list-group-item list-group-item-action"
            data-bs-toggle="list"
            href="#marcha"
            role="tab"
          >
            En marcha!
          </a>
        </div>

        <div class="tab-content">
          <div
            class="p-formacion-des tab-pane active w-50 m-auto mb-5"
            id="home"
            role="tabpanel"
          >
            Es necesario saber en qué tecnologías trabajáis, para poder adaptar
            con precisión la formación.
          </div>
          <div
            class="p-formacion-des tab-pane w-50 m-auto mb-5"
            id="profile"
            role="tabpanel"
          >
            Mediante reuniones con diferentes capas de la empresa, sabremos
            exactamente vuestros objetivos y hacia dónde dirigir el itinerario.
          </div>
          <div
            class="p-formacion-des tab-pane w-50 m-auto mb-5"
            id="messages"
            role="tabpanel"
          >
            Cada tecnología precisa un profesional que cubra con garantía la
            formación de tu equipo. Nos aseguramos su disponibilidad.
          </div>
          <div
            class="p-formacion-des tab-pane w-50 m-auto mb-5"
            id="settings"
            role="tabpanel"
          >
            Diseñamos un proyecto formativo totalmente adaptado a lo analizado
            con tu empresa. Negociamos modalidad y fechas.
          </div>
          <div
            class="p-formacion-des tab-pane w-50 m-auto mb-5"
            id="marcha"
            role="tabpanel"
          >
            Comienza la formación.
          </div>
        </div>
      </div>
      <div className="div-comun2">
        <h2 className="h2-desarrollo1 text-center module mt-2">
          NOS ADAPTAMOS A TI
        </h2>
        <p className="p-des2 module">
          Realizamos nuestras formaciones tanto de forma presencial, ya sea en
          nuestras instalaciones bien in company, como en streaming, cualquier
          modalidad te darán la calidad y los resultados que necesitas.
        </p>
        <p className="p-des2 module">
          Por supuesto, podrás aprovechar las ventajas de la formación
          bonificada para tus proyectos. Utiliza tus créditos anuales para
          cubrir parte o toda la formación. Te informamos de los trámites que
          tendrás que realizar, muy sencillos y rápidos.
        </p>
        <div className="d-grid gap-2 col-2 mx-auto">
          <HashLink
            to="/inicio/#contact-form"
            className="bottone-info btn btn-secondary mb-5 mt-3 module"
            type="submit"
          >
            Quiero más información{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Desarrollo;
