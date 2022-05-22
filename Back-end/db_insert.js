//progetto finale

const { MongoDBNamespace } = require("mongodb");

//Alumnos

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/fran-vert.jpg",
      nombre: "Francesco Fava",
      fechaNacimiento: "May 17, 1995",
      residencia: "Malaga",
      telefono: "611163534",
      email: "favafrancesco5@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/francesco-fava/",
    },
    infoBootcamp: {
      fechaFalta: "December 27, 2021",
      proyectoFinal: {
        titulo: "Web Releevant",
        detalles:
          "Nueva web para Releevant con nuevas incorporaciones y funcionalidades",
        comentariosProf: "Israel: Muy bien. Nacho: Falta algo",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI010",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Angel.jpg",
      nombre: "Angel Munoz",
      fechaNacimiento: "Janaury 17, 1980",
      residencia: "Malaga",
      telefono: "611163535",
      email: "angelmunoz@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/%C3%A1ngel-mu%C3%B1oz-caballero/",
    },
    infoBootcamp: {
      fechaFalta: "December 23, 2021",
      proyectoFinal: {
        titulo: "English game",
        detalles: "Juego de ingles para escuelas",
        comentariosProf: "Adri: Bravo. Cristina: Si",
      },
    },
    infoReleevant: {
      origen: "Call",
      pc: "MSI06",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:3001/photos/antonio1.jpg",
      nombre: "Antonio Mora",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "antonio@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/antoniojesusmoragalvan/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Tienda Ropa",
        detalles: "Tienda de ropa",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Vera.JPG",
      nombre: "Jose Manuel Vera",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "vera@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/jvera95/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Web de videojuegos",
        detalles: "Web de videojuegos",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Dani1.jpg",
      nombre: "Daniel Gil",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "dani@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/daniel-gil-moreno/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "App para guardar facturas",
        detalles: "App para guardar facturas",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Juan2.jpg",
      nombre: "Juan Gonzalez",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "juan@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/juan-gonzalez-vallejo/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Tabernas de Malaga",
        detalles: "Tabernas de Malaga",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Noel1.jpg",
      nombre: "Noel Simón",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "noel@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/noel-sim%C3%B3n-aguilar/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Social para programadores",
        detalles: "Social para programadores",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

db.alumnos.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Paula1.jpg",
      nombre: "Paula Montes",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "paula@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/paula-montes-/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Tienda de ropa",
        detalles: "Tienda de ropa",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
});

// Alumni

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/fran-vert.jpg",
      nombre: "Francesco Fava",
      fechaNacimiento: "May 17, 1995",
      residencia: "Malaga",
      telefono: "611163534",
      email: "favafrancesco5@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/francesco-fava/",
    },
    infoBootcamp: {
      fechaFalta: "December 27, 2021",
      proyectoFinal: {
        titulo: "Web Releevant",
        detalles:
          "Nueva web para Releevant con nuevas incorporaciones y funcionalidades",
        comentariosProf: "Israel: Muy bien. Nacho: Falta algo",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI010",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Angel.jpg",
      nombre: "Angel Munoz",
      fechaNacimiento: "Janaury 17, 1980",
      residencia: "Malaga",
      telefono: "611163535",
      email: "angelmunoz@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/%C3%A1ngel-mu%C3%B1oz-caballero/",
    },
    infoBootcamp: {
      fechaFalta: "December 23, 2021",
      proyectoFinal: {
        titulo: "English game",
        detalles: "Juego de ingles para escuelas",
        comentariosProf: "Adri: Bravo. Cristina: Si",
      },
    },
    infoReleevant: {
      origen: "Call",
      pc: "MSI06",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:3001/photos/antonio1.jpg",
      nombre: "Antonio Mora",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "antonio@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/antoniojesusmoragalvan/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Tienda Ropa",
        detalles: "Tienda de ropa",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Vera.JPG",
      nombre: "Jose Manuel Vera",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "vera@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/jvera95/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Web de videojuegos",
        detalles: "Web de videojuegos",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Dani1.jpg",
      nombre: "Daniel Gil",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "dani@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/daniel-gil-moreno/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "App para guardar facturas",
        detalles: "App para guardar facturas",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Juan2.jpg",
      nombre: "Juan Gonzalez",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "juan@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/juan-gonzalez-vallejo/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Tabernas de Malaga",
        detalles: "Tabernas de Malaga",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Noel1.jpg",
      nombre: "Noel Simón",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "noel@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/noel-sim%C3%B3n-aguilar/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Social para programadores",
        detalles: "Social para programadores",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

db.alumni.insertOne({
  alumno: {
    curso: "Promocion 1",
    datosPersonales: {
      foto: "http://localhost:8080/photos/Paula1.jpg",
      nombre: "Paula Montes",
      fechaNacimiento: "July 13, 1989",
      residencia: "Malaga",
      telefono: "6111633452",
      email: "paula@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/paula-montes-/",
    },
    infoBootcamp: {
      fechaFalta: "December 29, 2021, February 28, 2022",
      proyectoFinal: {
        titulo: "Tienda de ropa",
        detalles: "Tienda de ropa",
        comentariosProf: "Nacho: Bravo. Israel: Falta algo.",
      },
    },
    infoReleevant: {
      origen: "Web",
      pc: "MSI04",
      matricula: "http://localhost:8080/docs/pdftest.pdf",
      tipoDePago: "Directo",
      detallesPago: "Pagado el 23/12/2021",
    },
    detalles: "ggfgaiyfisaidfaSIFIFAIFDAIFSIYAFCIYFAYFDAIFCA",
  },
  empresa: "Releevant",
  comienzo: "May 19 2022",
});

// Docentes

db.docentes.insertOne({
  nombre: "Israel Menis",
  bio: "Cuando finalizó Ingeniería de Telecomunicaciones, comenzó su carrera profesional como programador de aplicaciones móviles para pasar luego a programar aplicaciones web y servicios web. En los últimos años ha pasado por hitos muy importantes como responsable técnico de plataformas web y streaming de LaSexta, Antena3 y Canal Sur, para luego crear una empresa de desarrollo software que fue adquirida por una empresa de UK, pasando en ese momento a ser Director Técnico del grupo.",
  posicion: "Lead Developer and Managing Director",
  LinkedIn: "https://www.linkedin.com/in/israelmenis/",
  foto: "http://localhost:8080/photos/IsraelMenis.JPEG",
});

db.docentes.insertOne({
  nombre: "Adrian Jimenez",
  bio: "Adrián es desarrollador de aplicaciones multiplataforma. Estudió ingeniería en la UMA, y posteriormente realizó un grado superior que afianzara sus conocimientos de desarrollo, arquitectura y gestión de proyectos. Tras trabajar en diferentes ámbitos de la programación y su pasión por el conocimiento, descubrió que juntando esas dos aptitudes podía atraer a más gente hacia el mundo Tech y además, afrontar nuevos retos en el mundo de la enseñanza.",
  posicion: "Multiplatform Software Developer",
  LinkedIn:
    "https://www.linkedin.com/in/adri%C3%A1n-beigveder-jim%C3%A9nez-b38495183/",
  foto: "http://localhost:8080/photos/Adrián.jpg",
});

db.docentes.insertOne({
  nombre: "Nacho Viano",
  bio: "Especializado en React, Typescript, Node y otras tecnologías durante años, y habiendo realizado proyectos independientes, formó parte del proyecto de transformación tecnológica de un banco de nivel nacional en la compañía Ingenia (hoy Babel), como Frontend Developer. Tras tres años, se incorporó al Universo Freepik y forma parte del equipo Flaticon, en la web con la mayor base de iconos del mundo. Malagueño, asiduo a Tech Talks y diferentes eventos del sector, Juanma hace de su trabajo su pasión.",
  posicion: "Software Developer",
  LinkedIn: "https://www.linkedin.com/in/nacho-viano/",
  foto: "http://localhost:8080/photos/Angel.jpg",
});

db.docentes.insertOne({
  nombre: "Fran Guerrero",
  bio: "Responsable de la Calidad del Software dentro del ciclo de vida de desarrollo así como del desarrollo profesional y personal de los equipos de QA en empresas de software nacionales e internacionales. De Málaga y ha trabajado como QA para diferentes empresas durante los últimos 10 años, como Riplife, Ebury, Knockout, Sequel, Predictiva y Plytix. Fran también es ponente en diferentes foros relacionados con el control de calidad, consultor de formación e instructor para el desarrollo de software y calidad.",
  posicion: "Senior QA",
  LinkedIn: "https://www.linkedin.com/in/franguerrero/",
  foto: "http://localhost:8080/photos/FranGuerrero.jpg",
});

db.docentes.insertOne({
  nombre: "Cristina Mesa",
  bio: "Cristina Mesa es Operations Manager de la Red única de Tiendas Fintech en España, Dineo Crédito. Estudió en la UMA y al finalizar, voló a tierras germanas donde desarrolló sus idiomas. Luego realizó un MBA y empezó su andadura profesional en Cash Converters. Tras trabajar con diferentes métodos de gestión de proyectos, implantando y aplicando metodologías ágiles descubrió que éstas impactaron en su manera de adaptar las situaciones cambiantes que nos rodean “easier & faster” en el día a día, un reto a gran escala.",
  posicion: "Business Manager at Releevant",
  LinkedIn: "https://www.linkedin.com/in/cmesapostigo/",
  foto: "http://localhost:8080/photos/CristinaMesa.png",
});

db.docentes.insertOne({
  nombre: "Juanma Rojas",
  bio: "Especializado en React, Typescript, Node y otras tecnologías durante años, y habiendo realizado proyectos independientes, formó parte del proyecto de transformación tecnológica de un banco de nivel nacional en la compañía Ingenia (hoy Babel), como Frontend Developer. Tras tres años, se incorporó al Universo Freepik y forma parte del equipo Flaticon, en la web con la mayor base de iconos del mundo. Malagueño, asiduo a Tech Talks y diferentes eventos del sector, Juanma hace de su trabajo su pasión.",
  posicion: "Front-end Developer",
  LinkedIn: "https://www.linkedin.com/in/juanma-rojas/",
  foto: "http://localhost:8080/photos/JuanmaRojas.jpg",
});

db.docentes.insertOne({
  nombre: "David Bueno",
  bio: "Profesor Titular de la Universidad de Málaga. Durante 10 años ha sido el CIO de la Ciudad de Málaga (Gerente del Centro Municipal de Informática 2011-2021). Entre sus responsabilidades: la transformación digital del Ayuntamiento. Coordinó y participó en los proyectos relacionados con ciudad inteligente, chatbots, gobierno abierto (transparencia, participación y datos abiertos) y administración electrónica de la ciudad de Málaga. Programó el primer chatbot ciudadano en España.",
  posicion: "Front-end Developer",
  LinkedIn: "https://www.linkedin.com/in/davidbueno/",
  foto: "http://localhost:8080/photos/DavidBueno.png",
});

// Expertos

db.expertos.insertOne({
  nombre: "Josema Ezquerra",
  bio: "Josema ha combinado la ingeniería de sistemas con el emprendimiento, creando y liderando múltiples startups. Ha desarrollado su carrera profesional como programador, docente, consultor, Director de Proyectos, General Manager o CEO, trabajando siempre en importantes compañías tecnológicas. Trajo a Málaga los bootcamps tecnológicos en 2016, que ha desarrollado en diferentes proyectos de éxito. Su pasión desde hace años es crear un nexo común que una a la comunidad tecnológica en Málaga.",
  posicion: "CEO Releevant",
  LinkedIn: "https://www.linkedin.com/in/jose-manuel-ezquerra-lebron/",
  foto: "http://localhost:8080/photos/JosemaEzquerra.jpg",
});

db.expertos.insertOne({
  nombre: "Pedro Gamero",
  bio: "Trabajó 30 años en Telefónica, en posiciones de programador, analista de aplicaciones, jefe de proyectos y finalmente como economista. Paralelamente ha sido emprendedor participando en inversión, arranque y gestión de empresas de diferentes sectores, como Digi Sign Products (I+D), Geprost (Consultoría tecnológica), Futur Energic (planta solar), BFT (clínica deportiva), Byevolution (BlockChain). Gran experiencia en gestión de empresas , así como  inicio y orientación de nuevos negocios.",
  posicion: "CSO Releevant",
  LinkedIn: "linkedin.com/in/pedrogamero",
  foto: "http://localhost:8080/photos/PedroGamero.jpg",
});

db.expertos.insertOne({
  nombre: "Cristina Mesa",
  bio: "Cristina Mesa es Operations Manager de la Red única de Tiendas Fintech en España, Dineo Crédito. Estudió en la UMA y al finalizar, voló a tierras germanas donde desarrolló sus idiomas. Luego realizó un MBA y empezó su andadura profesional en Cash Converters. Tras trabajar con diferentes métodos de gestión de proyectos, implantando y aplicando metodologías ágiles descubrió que éstas impactaron en su manera de adaptar las situaciones cambiantes que nos rodean “easier & faster” en el día a día, un reto a gran escala.",
  posicion: "Business Manager at Releevant",
  LinkedIn: "https://www.linkedin.com/in/cmesapostigo/",
  foto: "http://localhost:8080/photos/CristinaMesa.png",
});

db.expertos.insertOne({
  nombre: "Israel Menis",
  bio: "Cuando finalizó Ingeniería de Telecomunicaciones, comenzó su carrera profesional como programador de aplicaciones móviles para pasar luego a programar aplicaciones web y servicios web. En los últimos años ha pasado por hitos muy importantes como responsable técnico de plataformas web y streaming de LaSexta, Antena3 y Canal Sur, para luego crear una empresa de desarrollo software que fue adquirida por una empresa de UK, pasando en ese momento a ser Director Técnico del grupo.",
  posicion: "Lead Developer and Managing Director",
  LinkedIn: "https://www.linkedin.com/in/israelmenis/",
  foto: "http://localhost:8080/photos/IsraelMenis.JPEG",
});

db.expertos.insertOne({
  nombre: "David Bueno",
  bio: "Profesor Titular de la Universidad de Málaga. Durante 10 años ha sido el CIO de la Ciudad de Málaga (Gerente del Centro Municipal de Informática 2011-2021). Entre sus responsabilidades: la transformación digital del Ayuntamiento. Coordinó y participó en los proyectos relacionados con ciudad inteligente, chatbots, gobierno abierto (transparencia, participación y datos abiertos) y administración electrónica de la ciudad de Málaga. Programó el primer chatbot ciudadano en España.",
  posicion: "Front-end Developer",
  LinkedIn: "https://www.linkedin.com/in/davidbueno/",
  foto: "http://localhost:8080/photos/DavidBueno.png",
});

db.expertos.insertOne({
  nombre: "Eugenio Luque",
  bio: "Eugenio, es licenciado en Derecho y Master en Derecho Concursal por la UMA, formando parte de la primera promoción de Startups Lawyers del IE Law School, con formación en Proptech también por el IE, así como en Corporate Legal por el IE y Venture Capital por el Instituto Cajasol. Es profesor de Derecho Mercantil Inmobiliario en la Escuela de Negocios Real Estate Business School (REBS) Asesora a startups en fase seed y grow y a fondos e inversores en Startups, Real Estate y Negocios Innovadores.",
  posicion: "Legal Counsel",
  LinkedIn: "https://www.linkedin.com/in/eugenio-luque-mart%C3%ADnez-67466113/",
  foto: "http://localhost:8080/photos/EugenioLuque.jpg",
});

db.expertos.insertOne({
  nombre: "David López",
  bio: "David ha creado soluciones de software durante 20 años, además de haber fundado varias compañías eCommerce de éxito. Adicionalmente a su formación técnica y experiencia en la gestión de proyectos internacionales, posee un Executive MBA por el IE Business School y el Global Senior Management Program de Chicago Booth / IE. Actualmente aconseja diferentes corporaciones en el área de arquitectura y estrategia técnica desde su posición como Head of Partner Services en Rindus Technology.",
  posicion: "Head of Partner Services",
  LinkedIn: "https://www.linkedin.com/in/david-l%C3%B3pez-pastoriza-1127b41/",
  foto: "http://localhost:8080/photos/DavidLópez.jpg",
});

db.expertos.insertOne({
  nombre: "Alex López",
  bio: "Alex es titulado en Ingeniería Superior en Informática por la UMA y también cuenta con un MBA por ESESA. Inició su andadura en el mundo del emprendimiento en 2008, justo después de finalizar su MBA. Con más de 15 años de experiencia en el desarrollo de software, y con su espíritu emprendedor y dotes de liderazgo, ha llevado a Plytix hasta alcanzar unas tasas de crecimiento del 150% anuales y una presencia en 29 países. Cuando no ejerce de emprendedor tecnológico, ocupa su tiempo con sus dos preciosas hijas.",
  posicion: "Senior Developer and CTO",
  LinkedIn: "https://www.linkedin.com/in/aletorreblanca/",
  foto: "http://localhost:8080/photos/AlexLópez.jpg",
});

db.expertos.insertOne({
  nombre: "Víctor Gamero",
  bio: "Víctor es licenciado en derecho y ha desarrollado su carrera profesional en los sectores de la abogacía y las relaciones internacionales. Cuenta con un LLM en Trasnational Business Practice por la University of the Pacific (EEUU) y un máster en derecho internacional, comercio exterior y relaciones internacionales por el ISDE. Con más de 12 años de experiencia profesional, compagina sus labores como socio del despacho Gamero & Bravo Abogados con la dirección del Dpto. de Relaciones Internacionales del Ilustre Colegio de Abogados de Madrid. Aunque para por Málaga muy a menudo, actualmente vive en Los Angeles y trabaja como Vicepresidente de Producto para Blanket, una startup que tiene como objetivo automatizar los procesos de ventas B2B usando inteligencia artificial asistida.",
  posicion: "Business Developer & International Relations",
  LinkedIn: "https://www.linkedin.com/in/vgamerocabo/",
  foto: "http://localhost:8080/photos/VictorGamero.jpg",
});

db.expertos.insertOne({
  nombre: "Miguel Caballero",
  bio: "Miguel es emprendedor e ingeniero informático. Durante su etapa en Microsoft, desarrolló productos como Microsoft Office, Visual Studio y Skype. Creó su propia empresa llamada Mochilo que ayudaba a mentes inquietas a conocer el mundo.  ",
  posicion: "VP of Product",
  LinkedIn: "https://www.linkedin.com/in/miguelcaballero/",
  foto: "http://localhost:8080/photos/MiguelCaballero.png",
});

db.expertos.insertOne({
  nombre: "Juan Luis Muñoz",
  bio: "Economista, Executive MBA ESADE Business & Law, Programa de Dirección General (PDG), IESE Business School Universidad de Navarra, Postgrado en estrategia empresarial por Henley Business School (UK) y en nuevas tecnologías aplicadas a los negocios por McCombs School of Business (USA). Compagina sus funciones ejecutivas con la impartición de programas formativos, así como la mentorización de empresas, en Universidad de Jaén, Universidad de Granada, EOI, y Fundación Incyde.",
  posicion: "Economista / Financial and Strategic Advisory",
  LinkedIn: "https://www.linkedin.com/in/juanluismv71/",
  foto: "http://localhost:8080/photos/JuanLuisMuñoz.jpg",
});

db.expertos.insertOne({
  nombre: "Eva Illescas",
  bio: "Eva es Product Designer Lead en Inspire Clean Energy, donde diseña productos que ayudan a combatir el Cambio Climático. Es malagueña de nacimiento, aunque actualmente reside en Los Ángeles. Ha trabajado para Microsoft, donde impactó positivamente el Revenue en millones de dólares; también en Abstract, donde lideró proyectos que aumentaron el número de empresas utilizando el producto de 4 a +145, en 6 meses.  Toda una profesional y líder en su campo.",
  posicion: "Product Designer Lead",
  LinkedIn: "https://www.linkedin.com/in/evaillescas/",
  foto: "http://localhost:8080/photos/Eva.jpeg",
});

// Eventos

db.eventos.insertOne({
  fecha: "April 12, 2022",
  titulo: "Meetup",
  descripcion: "Un meetup con una charla sobre Docker.",
  ponentes: "Angel Pepe, Jose Manolo",
  enlace: "http://www.linkdin.enlace.com",
  foto: "http://localhost:8080/photos/imageevent.jpg",
  marketing: "un campo abierto donde se indica come se ha promocionado",
  asistentes: {
    inscrito: 10,
    reales: 8,
  },
});

db.eventos.insertOne({
  fecha: "June 13, 2022",
  titulo: "Hiring week",
  descripcion: "Todos los alumnos del bootcamp presenteran su projecto",
  ponentes: "Angel Pepe, Jose Manolo",
  enlace: "http://www.linkdin.enlace.hiring.com",
  foto: "http://localhost:8080/photos/imageevent2.jpg",
  marketing: "un campo abierto donde se indica come se ha promocionado",
  asistentes: {
    inscrito: 30,
    reales: 32,
  },
});

// Marketing(candidatos)

db.candidatos.insertOne({
  nombre: "Orlando Perez",
  telefono: "6234532435",
  email: "orlando@mail.com",
  estado: "No",
  fechaEntrada: "May 4, 2022",
  origen: "Web",
  profesion: "Barista",
  estudios: "Bachillerato",
  edad: 34,
  cursoInteres: "Web developer",
  fechaContacto: "May 1, 2022",
  call: "Si",
  cita: {
    fecha: "May 1, 2022",
    ora: "17.30",
  },
  detalles:
    "Campo texto, donde escribimos detalles sobre el posible cliente (observaciones, conversación que hemos tenido, etc.)",
});

db.candidatos.insertOne({
  nombre: "Antonio Milona",
  telefono: "62345323425",
  email: "antonio@mail.com",
  estado: "Mail",
  fechaEntrada: "May 1, 2022",
  origen: "Boca a boca",
  profesion: "Carpentero",
  estudios: "Bachillerato",
  edad: 29,
  cursoInteres: "Web developer",
  fechaContacto: "April 1, 2022",
  call: "No",
  cita: {
    fecha: "May 1, 2022",
    ora: "18.00",
  },
  detalles:
    "Campo texto, donde escribimos detalles sobre el posible cliente (observaciones, conversación que hemos tenido, etc.)",
});

//filtros

db.filtros.insertOne({
  nombre: "Mail",
});
db.filtros.insertOne({
  nombre: "Follow-Up",
});
db.filtros.insertOne({
  nombre: "Future",
});
db.filtros.insertOne({
  nombre: "Pending",
});
db.filtros.insertOne({
  nombre: "Retry",
});
db.filtros.insertOne({
  nombre: "No",
});
db.filtros.insertOne({
  nombre: "Call",
});
db.filtros.insertOne({
  nombre: "Recall",
});
db.filtros.insertOne({
  nombre: "Meeting",
});
db.filtros.insertOne({
  nombre: "Otros",
});

/////

db.admin.insertOne({
  email: "josema@gmail.com",
  password: "Catanzaro12345",
});

db.admin.insertOne({
  email: "cristina@gmail.com",
  password: "Catanzaro123456",
});

db.admin.insertOne({
  email: "favafrancesco5@gmail.com",
  password: "Catanzaro12",
});
