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
      nombre: "Noel Sim??n",
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
      nombre: "Noel Sim??n",
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
  bio: "Cuando finaliz?? Ingenier??a de Telecomunicaciones, comenz?? su carrera profesional como programador de aplicaciones m??viles para pasar luego a programar aplicaciones web y servicios web. En los ??ltimos a??os ha pasado por hitos muy importantes como responsable t??cnico de plataformas web y streaming de LaSexta, Antena3 y Canal Sur, para luego crear una empresa de desarrollo software que fue adquirida por una empresa de UK, pasando en ese momento a ser Director T??cnico del grupo.",
  posicion: "Lead Developer and Managing Director",
  LinkedIn: "https://www.linkedin.com/in/israelmenis/",
  foto: "http://localhost:8080/photos/IsraelMenis.JPEG",
});

db.docentes.insertOne({
  nombre: "Adrian Jimenez",
  bio: "Adri??n es desarrollador de aplicaciones multiplataforma. Estudi?? ingenier??a en la UMA, y posteriormente realiz?? un grado superior que afianzara sus conocimientos de desarrollo, arquitectura y gesti??n de proyectos. Tras trabajar en diferentes ??mbitos de la programaci??n y su pasi??n por el conocimiento, descubri?? que juntando esas dos aptitudes pod??a atraer a m??s gente hacia el mundo Tech y adem??s, afrontar nuevos retos en el mundo de la ense??anza.",
  posicion: "Multiplatform Software Developer",
  LinkedIn:
    "https://www.linkedin.com/in/adri%C3%A1n-beigveder-jim%C3%A9nez-b38495183/",
  foto: "http://localhost:8080/photos/Adri??n.jpg",
});

db.docentes.insertOne({
  nombre: "Nacho Viano",
  bio: "Especializado en React, Typescript, Node y otras tecnolog??as durante a??os, y habiendo realizado proyectos independientes, form?? parte del proyecto de transformaci??n tecnol??gica de un banco de nivel nacional en la compa????a Ingenia (hoy Babel), como Frontend Developer. Tras tres a??os, se incorpor?? al Universo Freepik y forma parte del equipo Flaticon, en la web con la mayor base de iconos del mundo. Malague??o, asiduo a Tech Talks y diferentes eventos del sector, Juanma hace de su trabajo su pasi??n.",
  posicion: "Software Developer",
  LinkedIn: "https://www.linkedin.com/in/nacho-viano/",
  foto: "http://localhost:8080/photos/Angel.jpg",
});

db.docentes.insertOne({
  nombre: "Fran Guerrero",
  bio: "Responsable de la Calidad del Software dentro del ciclo de vida de desarrollo as?? como del desarrollo profesional y personal de los equipos de QA en empresas de software nacionales e internacionales. De M??laga y ha trabajado como QA para diferentes empresas durante los ??ltimos 10 a??os, como Riplife, Ebury, Knockout, Sequel, Predictiva y Plytix. Fran tambi??n es ponente en diferentes foros relacionados con el control de calidad, consultor de formaci??n e instructor para el desarrollo de software y calidad.",
  posicion: "Senior QA",
  LinkedIn: "https://www.linkedin.com/in/franguerrero/",
  foto: "http://localhost:8080/photos/FranGuerrero.jpg",
});

db.docentes.insertOne({
  nombre: "Cristina Mesa",
  bio: "Cristina Mesa es Operations Manager de la Red ??nica de Tiendas Fintech en Espa??a, Dineo Cr??dito. Estudi?? en la UMA y al finalizar, vol?? a tierras germanas donde desarroll?? sus idiomas. Luego realiz?? un MBA y empez?? su andadura profesional en Cash Converters. Tras trabajar con diferentes m??todos de gesti??n de proyectos, implantando y aplicando metodolog??as ??giles descubri?? que ??stas impactaron en su manera de adaptar las situaciones cambiantes que nos rodean ???easier & faster??? en el d??a a d??a, un reto a gran escala.",
  posicion: "Business Manager at Releevant",
  LinkedIn: "https://www.linkedin.com/in/cmesapostigo/",
  foto: "http://localhost:8080/photos/CristinaMesa.png",
});

db.docentes.insertOne({
  nombre: "Juanma Rojas",
  bio: "Especializado en React, Typescript, Node y otras tecnolog??as durante a??os, y habiendo realizado proyectos independientes, form?? parte del proyecto de transformaci??n tecnol??gica de un banco de nivel nacional en la compa????a Ingenia (hoy Babel), como Frontend Developer. Tras tres a??os, se incorpor?? al Universo Freepik y forma parte del equipo Flaticon, en la web con la mayor base de iconos del mundo. Malague??o, asiduo a Tech Talks y diferentes eventos del sector, Juanma hace de su trabajo su pasi??n.",
  posicion: "Front-end Developer",
  LinkedIn: "https://www.linkedin.com/in/juanma-rojas/",
  foto: "http://localhost:8080/photos/JuanmaRojas.jpg",
});

db.docentes.insertOne({
  nombre: "David Bueno",
  bio: "Profesor Titular de la Universidad de M??laga. Durante 10 a??os ha sido el CIO de la Ciudad de M??laga (Gerente del Centro Municipal de Inform??tica 2011-2021). Entre sus responsabilidades: la transformaci??n digital del Ayuntamiento. Coordin?? y particip?? en los proyectos relacionados con ciudad inteligente, chatbots, gobierno abierto (transparencia, participaci??n y datos abiertos) y administraci??n electr??nica de la ciudad de M??laga. Program?? el primer chatbot ciudadano en Espa??a.",
  posicion: "Front-end Developer",
  LinkedIn: "https://www.linkedin.com/in/davidbueno/",
  foto: "http://localhost:8080/photos/DavidBueno.png",
});

// Expertos

db.expertos.insertOne({
  nombre: "Josema Ezquerra",
  bio: "Josema ha combinado la ingenier??a de sistemas con el emprendimiento, creando y liderando m??ltiples startups. Ha desarrollado su carrera profesional como programador, docente, consultor, Director de Proyectos, General Manager o CEO, trabajando siempre en importantes compa????as tecnol??gicas. Trajo a M??laga los bootcamps tecnol??gicos en 2016, que ha desarrollado en diferentes proyectos de ??xito. Su pasi??n desde hace a??os es crear un nexo com??n que una a la comunidad tecnol??gica en M??laga.",
  posicion: "CEO Releevant",
  LinkedIn: "https://www.linkedin.com/in/jose-manuel-ezquerra-lebron/",
  foto: "http://localhost:8080/photos/JosemaEzquerra.jpg",
});

db.expertos.insertOne({
  nombre: "Pedro Gamero",
  bio: "Trabaj?? 30 a??os en Telef??nica, en posiciones de programador, analista de aplicaciones, jefe de proyectos y finalmente como economista. Paralelamente ha sido emprendedor participando en inversi??n, arranque y gesti??n de empresas de diferentes sectores, como Digi Sign Products (I+D), Geprost (Consultor??a tecnol??gica), Futur Energic (planta solar), BFT (cl??nica deportiva), Byevolution (BlockChain). Gran experiencia en gesti??n de empresas , as?? como  inicio y orientaci??n de nuevos negocios.",
  posicion: "CSO Releevant",
  LinkedIn: "linkedin.com/in/pedrogamero",
  foto: "http://localhost:8080/photos/PedroGamero.jpg",
});

db.expertos.insertOne({
  nombre: "Cristina Mesa",
  bio: "Cristina Mesa es Operations Manager de la Red ??nica de Tiendas Fintech en Espa??a, Dineo Cr??dito. Estudi?? en la UMA y al finalizar, vol?? a tierras germanas donde desarroll?? sus idiomas. Luego realiz?? un MBA y empez?? su andadura profesional en Cash Converters. Tras trabajar con diferentes m??todos de gesti??n de proyectos, implantando y aplicando metodolog??as ??giles descubri?? que ??stas impactaron en su manera de adaptar las situaciones cambiantes que nos rodean ???easier & faster??? en el d??a a d??a, un reto a gran escala.",
  posicion: "Business Manager at Releevant",
  LinkedIn: "https://www.linkedin.com/in/cmesapostigo/",
  foto: "http://localhost:8080/photos/CristinaMesa.png",
});

db.expertos.insertOne({
  nombre: "Israel Menis",
  bio: "Cuando finaliz?? Ingenier??a de Telecomunicaciones, comenz?? su carrera profesional como programador de aplicaciones m??viles para pasar luego a programar aplicaciones web y servicios web. En los ??ltimos a??os ha pasado por hitos muy importantes como responsable t??cnico de plataformas web y streaming de LaSexta, Antena3 y Canal Sur, para luego crear una empresa de desarrollo software que fue adquirida por una empresa de UK, pasando en ese momento a ser Director T??cnico del grupo.",
  posicion: "Lead Developer and Managing Director",
  LinkedIn: "https://www.linkedin.com/in/israelmenis/",
  foto: "http://localhost:8080/photos/IsraelMenis.JPEG",
});

db.expertos.insertOne({
  nombre: "David Bueno",
  bio: "Profesor Titular de la Universidad de M??laga. Durante 10 a??os ha sido el CIO de la Ciudad de M??laga (Gerente del Centro Municipal de Inform??tica 2011-2021). Entre sus responsabilidades: la transformaci??n digital del Ayuntamiento. Coordin?? y particip?? en los proyectos relacionados con ciudad inteligente, chatbots, gobierno abierto (transparencia, participaci??n y datos abiertos) y administraci??n electr??nica de la ciudad de M??laga. Program?? el primer chatbot ciudadano en Espa??a.",
  posicion: "Front-end Developer",
  LinkedIn: "https://www.linkedin.com/in/davidbueno/",
  foto: "http://localhost:8080/photos/DavidBueno.png",
});

db.expertos.insertOne({
  nombre: "Eugenio Luque",
  bio: "Eugenio, es licenciado en Derecho y Master en Derecho Concursal por la UMA, formando parte de la primera promoci??n de Startups Lawyers del IE Law School, con formaci??n en Proptech tambi??n por el IE, as?? como en Corporate Legal por el IE y Venture Capital por el Instituto Cajasol. Es profesor de Derecho Mercantil Inmobiliario en la Escuela de Negocios Real Estate Business School (REBS) Asesora a startups en fase seed y grow y a fondos e inversores en Startups, Real Estate y Negocios Innovadores.",
  posicion: "Legal Counsel",
  LinkedIn: "https://www.linkedin.com/in/eugenio-luque-mart%C3%ADnez-67466113/",
  foto: "http://localhost:8080/photos/EugenioLuque.jpg",
});

db.expertos.insertOne({
  nombre: "David L??pez",
  bio: "David ha creado soluciones de software durante 20 a??os, adem??s de haber fundado varias compa????as eCommerce de ??xito. Adicionalmente a su formaci??n t??cnica y experiencia en la gesti??n de proyectos internacionales, posee un Executive MBA por el IE Business School y el Global Senior Management Program de Chicago Booth / IE. Actualmente aconseja diferentes corporaciones en el ??rea de arquitectura y estrategia t??cnica desde su posici??n como Head of Partner Services en Rindus Technology.",
  posicion: "Head of Partner Services",
  LinkedIn: "https://www.linkedin.com/in/david-l%C3%B3pez-pastoriza-1127b41/",
  foto: "http://localhost:8080/photos/DavidL??pez.jpg",
});

db.expertos.insertOne({
  nombre: "Alex L??pez",
  bio: "Alex es titulado en Ingenier??a Superior en Inform??tica por la UMA y tambi??n cuenta con un MBA por ESESA. Inici?? su andadura en el mundo del emprendimiento en 2008, justo despu??s de finalizar su MBA. Con m??s de 15 a??os de experiencia en el desarrollo de software, y con su esp??ritu emprendedor y dotes de liderazgo, ha llevado a Plytix hasta alcanzar unas tasas de crecimiento del 150% anuales y una presencia en 29 pa??ses. Cuando no ejerce de emprendedor tecnol??gico, ocupa su tiempo con sus dos preciosas hijas.",
  posicion: "Senior Developer and CTO",
  LinkedIn: "https://www.linkedin.com/in/aletorreblanca/",
  foto: "http://localhost:8080/photos/AlexL??pez.jpg",
});

db.expertos.insertOne({
  nombre: "V??ctor Gamero",
  bio: "V??ctor es licenciado en derecho y ha desarrollado su carrera profesional en los sectores de la abogac??a y las relaciones internacionales. Cuenta con un LLM en Trasnational Business Practice por la University of the Pacific (EEUU) y un m??ster en derecho internacional, comercio exterior y relaciones internacionales por el ISDE. Con m??s de 12 a??os de experiencia profesional, compagina sus labores como socio del despacho Gamero & Bravo Abogados con la direcci??n del Dpto. de Relaciones Internacionales del Ilustre Colegio de Abogados de Madrid. Aunque para por M??laga muy a menudo, actualmente vive en Los Angeles y trabaja como Vicepresidente de Producto para Blanket, una startup que tiene como objetivo automatizar los procesos de ventas B2B usando inteligencia artificial asistida.",
  posicion: "Business Developer & International Relations",
  LinkedIn: "https://www.linkedin.com/in/vgamerocabo/",
  foto: "http://localhost:8080/photos/VictorGamero.jpg",
});

db.expertos.insertOne({
  nombre: "Miguel Caballero",
  bio: "Miguel es emprendedor e ingeniero inform??tico. Durante su etapa en Microsoft, desarroll?? productos como Microsoft Office, Visual Studio y Skype. Cre?? su propia empresa llamada Mochilo que ayudaba a mentes inquietas a conocer el mundo.  ",
  posicion: "VP of Product",
  LinkedIn: "https://www.linkedin.com/in/miguelcaballero/",
  foto: "http://localhost:8080/photos/MiguelCaballero.png",
});

db.expertos.insertOne({
  nombre: "Juan Luis Mu??oz",
  bio: "Economista, Executive MBA ESADE Business & Law, Programa de Direcci??n General (PDG), IESE Business School Universidad de Navarra, Postgrado en estrategia empresarial por Henley Business School (UK) y en nuevas tecnolog??as aplicadas a los negocios por McCombs School of Business (USA). Compagina sus funciones ejecutivas con la impartici??n de programas formativos, as?? como la mentorizaci??n de empresas, en Universidad de Ja??n, Universidad de Granada, EOI, y Fundaci??n Incyde.",
  posicion: "Economista / Financial and Strategic Advisory",
  LinkedIn: "https://www.linkedin.com/in/juanluismv71/",
  foto: "http://localhost:8080/photos/JuanLuisMu??oz.jpg",
});

db.expertos.insertOne({
  nombre: "Eva Illescas",
  bio: "Eva es Product Designer Lead en Inspire Clean Energy, donde dise??a productos que ayudan a combatir el Cambio Clim??tico. Es malague??a de nacimiento, aunque actualmente reside en Los ??ngeles. Ha trabajado para Microsoft, donde impact?? positivamente el Revenue en millones de d??lares; tambi??n en Abstract, donde lider?? proyectos que aumentaron el n??mero de empresas utilizando el producto de 4 a +145, en 6 meses.  Toda una profesional y l??der en su campo.",
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
    "Campo texto, donde escribimos detalles sobre el posible cliente (observaciones, conversaci??n que hemos tenido, etc.)",
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
    "Campo texto, donde escribimos detalles sobre el posible cliente (observaciones, conversaci??n que hemos tenido, etc.)",
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
