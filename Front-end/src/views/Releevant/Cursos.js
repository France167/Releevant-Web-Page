import React from "react";
import Image from "../../components/images/programming3.jpg";
import "../../style/css-cursos.css";
import { HashLink } from "react-router-hash-link";

function Cursos() {
  return (
    <div>
      <img
        className="foto-curso"
        id="foto-curso"
        src={Image}
        alt="code"
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50vh",
          minHeight: "30%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <h1 className="title-curso text-center">NUESTROS BOOTCAMPS</h1>
      <p className="p-title-curso text-center">
        Si buscas cómo aprender a programar desde cero, o qué estudiar para ser
        programador, Releevant te trae los mejores bootcamps para que estudiar
        programación sea tu futuro. Tenemos bootcamps de Desarrollo web,
        Inteligencia artificial, Java y… ¡viene mucho más! ¡No esperes más y
        únete a la familia Releevant!
      </p>
      <h2 className="title-h2-curso text-center module">
        BOOTCAMPS DE PROGRAMACIÓN EN RELEEVANT
      </h2>
      <div className="container-cursos module">
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">DESARROLLO WEB</h2>
            <p>
              Bootcamp de 500 horas donde aprenderás a programar Javascript,
              Typescript y Node.js, MySQL, MongoDB, React.js, SCRUM... Te
              preparamos para trabajar.
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">Saber más</HashLink>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">JAVA Y ANGLULAR</h2>
            <p>
              En este bootcamp te enseñamos el stack J.A.M (Java, Angular y
              MongoDB), además del framework Spring, metodologías Agile y mucho
              más. La mayor demanda laboral IT.
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">
              En desarrollo
            </HashLink>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">INTELIGENCIA ARTIFICIAL</h2>
            <p>
              Este bootcamp de Inteligencia Artificial le dará otro nivel a tu
              carrera profesional. Aprenderás Python, TensorFlow, Torch y mucho
              más. ¡Únete ahora al futuro de la tecnología!
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">
              En desarrollo
            </HashLink>
          </div>
        </div>
      </div>
      <h2 className="h2-matricula text-center module">
        ¡¡ Tenemos abierta matrícula para nuestro bootcamp de Desarrollo Web !!
        Próxima convocatoria: 20 de mayo ¡Reserva tu plaza ahora!
      </h2>

      <div className="d-grid gap-2 col-2 mx-auto module">
        <HashLink
          to="/curso-desarrollo/#foto-cursoweb"
          className="btn btn-secondary mb-1 mt-5"
          type="submit"
        >
          Quiero ser programador
        </HashLink>
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
      <div className="futuro module my-5">
        <h2 className="title-futuro text-center">
          Empieza a cambiar tu futuro
        </h2>
        <div className="d-grid gap-2 col-2 mx-auto">
          <HashLink
            to="/curso-desarrollo/#foto-cursoweb"
            className="bottone-futuro btn btn-secondary mb-1 mt-5"
            type="submit"
          >
            Quiero ser programador
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
