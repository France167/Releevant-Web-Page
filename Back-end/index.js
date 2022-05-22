const express = require("express");
const { ObjectId } = require("mongodb");
const app = express();
app.use(express.json());
const path = require("path");
const cors = require("cors");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
var db;

var MongoClient = require("mongodb").MongoClient;

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/", function (err, database) {
  if (err) throw err;

  db = database;

  // Start the application after the database connection is ready
  app.listen(3001);
  console.log("Listening on port 3001");
});

// Importing mongoose module
/* const mongoose = require("mongoose");

// Database Address
const url = "mongodb://localhost:27017/releevant";

// Connecting to database
mongoose
  .connect(url)
  .then((ans) => {
    console.log("Connected Successful");
  })
  .catch((err) => {
    console.log("Error in the Connection");
  });

// Schema class
const Schema = mongoose.Schema;

// Creating Structure of the collection
const collection_structure = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// Creating collection
const collections = mongoose.model("admin", collection_structure);

/* // Inserting one document
collections
  .create({
    email: "email@email.com",
    password: md5("emailemail"),
  })
  .then((ans) => {
    console.log("Document inserted");
  }); */

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled" });
});

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// ENDPOINTS FOR ALUMNOS

// Sacar todos los alumnos
app.get("/", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("alumnos")
    .find()
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

app.get("/promocion1", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("alumnos")
    .find({ "alumno.curso": "Promocion 1" })
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

app.get("/promocion2", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("alumnos")
    .find({ "alumno.curso": "Promocion 2" })
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

//  Sacar todos los alumnos tramite nombre
app.get("/busca/:nombre", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let nombre = request.params.nombre;
  let telefono = request.params.nombre.toString();
  let database = db.db("releevant");

  database
    .collection("alumnos")
    .find({
      $or: [
        {
          "alumno.datosPersonales.nombre": {
            $regex: new RegExp(nombre, "i"),
          },
        },
        {
          "alumno.datosPersonales.telefono": {
            $regex: new RegExp(telefono, "i"),
          },
        },
      ],
    })
    .toArray((err, results) => {
      if (err) throw err;
      results.forEach((value) => {});
      response.json(results);
    });
});

// Sacar alumno con id
app.get("/buscar/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;
  let database = db.db("releevant");

  database
    .collection("alumnos")
    .find({ _id: ObjectId(_id) })
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });
});

// Introducir un alumno nuevo
app.post("/new", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let MyAlumno = request.body;

  let database = db.db("releevant");

  database
    .collection("alumnos")
    .findOne({})
    .then((doc) => {
      database.collection("alumnos").insertOne(MyAlumno);

      database
        .collection("alumnos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// Update alumno donde via nombre

app.put("/updateone/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let myBody = request.body;
  let _id = request.params._id;

  let database = db.db("releevant");

  database
    .collection("alumnos")
    .findOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database.collection("alumnos").updateOne(
        { _id: ObjectId(_id) },
        {
          $set: {
            alumno: {
              curso: myBody.alumno.curso,
              datosPersonales: {
                nombre: myBody.alumno.datosPersonales.nombre,
                foto: myBody.alumno.datosPersonales.foto,
                fechaNacimiento: myBody.alumno.datosPersonales.fechaNacimiento,
                residencia: myBody.alumno.datosPersonales.residencia,
                telefono: myBody.alumno.datosPersonales.telefono,
                email: myBody.alumno.datosPersonales.email,
                LinkedIn: myBody.alumno.datosPersonales.LinkedIn,
              },
              infoBootcamp: {
                fechaFalta: myBody.alumno.infoBootcamp.fechaFalta,
                proyectoFinal: {
                  titulo: myBody.alumno.infoBootcamp.proyectoFinal.titulo,
                  detalles: myBody.alumno.infoBootcamp.proyectoFinal.detalles,
                  comentariosProf:
                    myBody.alumno.infoBootcamp.proyectoFinal.comentariosProf,
                },
              },
              infoReleevant: {
                origen: myBody.alumno.infoReleevant.origen,
                pc: myBody.alumno.infoReleevant.pc,
                matricula: myBody.alumno.infoReleevant.matricula,
                tipoDePago: myBody.alumno.infoReleevant.tipoDePago,
                detallesPago: myBody.alumno.infoReleevant.detallesPago,
              },
              detalles: myBody.alumno.detalles,
            },
          },
        }
      );

      database
        .collection("alumnos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// - Eliminar los alumnos con id
app.delete("/delete/alumno/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;
  let query = _id.toString();
  console.log(query);
  let database = db.db("releevant");

  database.collection("alumnos");

  database
    .collection("alumnos")
    .deleteOne({ _id: ObjectId(query) })
    .then((doc) => {
      database
        .collection("alumnos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

//////// ALUMNI ENDPOINTS//////////

// Sacar todos los alumni
app.get("/alumni", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("alumni")
    .find()
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

// Sacar alumni con id
app.get("/buscare/alumni/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;
  let database = db.db("releevant");

  database
    .collection("alumni")
    .find({ _id: ObjectId(_id) })
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });
});

//  Sacar todos los alumni tramite nombre
app.get("/buscar/alumni/:nombre", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let nombre = request.params.nombre;
  let telefono = request.params.nombre.toString();

  let database = db.db("releevant");

  database
    .collection("alumni")
    .find({
      $or: [
        {
          "alumno.datosPersonales.nombre": {
            $regex: new RegExp(nombre, "i"),
          },
        },
        {
          "alumno.datosPersonales.telefono": {
            $regex: new RegExp(telefono, "i"),
          },
        },
      ],
    })
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

// Introducir un alumni nuevo
app.post("/new/alumni", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let MyAlumno = request.body;
  let database = db.db("releevant");

  let alumno = await database
    .collection("alumnos")
    .findOne({ _id: ObjectId(MyAlumno.idAlumno._id) });

  console.log(alumno._id);

  let myAlumni = {
    alumno: alumno.alumno,
    empresa: MyAlumno.empresa,
    comienzo: MyAlumno.comienzo,
  };

  await database.collection("alumni").insertOne(myAlumni);

  await database
    .collection("alumnos")
    .deleteOne({ _id: ObjectId(MyAlumno.idAlumno._id) });

  database
    .collection("alumni")
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });
});

// Update alumni donde via nombre

app.put("/update/alumni/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let myBody = request.body;
  let _id = request.params._id;

  let database = db.db("releevant");

  database
    .collection("alumnos")
    .findOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database.collection("alumni").updateOne(
        { _id: ObjectId(_id) },
        {
          $set: {
            "alumno.curso": myBody.alumno.curso,
            "alumno.datosPersonales.nombre":
              myBody.alumno.datosPersonales.nombre,
            "alumno.datosPersonales.foto": myBody.alumno.datosPersonales.foto,
            "alumno.datosPersonales.fechaNacimiento":
              myBody.alumno.datosPersonales.fechaNacimiento,
            "alumno.datosPersonales.residencia":
              myBody.alumno.datosPersonales.residencia,
            "alumno.datosPersonales.telefono":
              myBody.alumno.datosPersonales.telefono,
            "alumno.datosPersonales.email": myBody.alumno.datosPersonales.email,
            "alumno.datosPersonales.LinkedIn":
              myBody.alumno.datosPersonales.LinkedIn,
            "alumno.infoBootcamp.fechaFalta":
              myBody.alumno.infoBootcamp.fechaFalta,
            "alumno.infoBootcamp.proyectoFinal.titulo":
              myBody.alumno.infoBootcamp.proyectoFinal.titulo,
            "alumno.infoBootcamp.proyectoFinal.detalles":
              myBody.alumno.infoBootcamp.proyectoFinal.detalles,
            "alumno.infoBootcamp.proyectoFinal.comentariosProf":
              myBody.alumno.infoBootcamp.proyectoFinal.comentariosProf,
            "alumno.infoReleevant.origen": myBody.alumno.infoReleevant.origen,
            "alumno.infoReleevant.pc": myBody.alumno.infoReleevant.pc,
            "alumno.infoReleevant.matricula":
              myBody.alumno.infoReleevant.matricula,
            "alumno.infoReleevant.tipoDePago":
              myBody.alumno.infoReleevant.tipoDePago,
            "alumno.infoReleevant.detallesPago":
              myBody.alumno.infoReleevant.detallesPago,
            "alumno.detalles": myBody.alumno.detalles,
            empresa: myBody.empresa,
            comienzo: myBody.comienzo,
          },
        }
      );

      database
        .collection("alumni")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// - Eliminar los alumnos con id
app.delete("/delete/alumni/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;
  let database = db.db("releevant");

  database.collection("alumni");

  database
    .collection("alumni")
    .deleteOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database
        .collection("alumni")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

///////// EVENTOS ENDPOINT /////////////////////

// Sacar todos los eventos
app.get("/eventos", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("eventos")
    .find()
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

//  Sacar todos los alumni tramite titulo
app.get("/buscar/eventos/:titulo", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let titulo = request.params.titulo;
  let database = db.db("releevant");

  database
    .collection("eventos")
    .find({
      titulo: { $regex: new RegExp(titulo, "i") },
    })
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

// Introducir evento nuevo
app.post("/new/evento", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let MyEvento = request.body;

  let database = db.db("releevant");

  database
    .collection("eventos")
    .findOne({})
    .then((doc) => {
      database.collection("eventos").insertOne(MyEvento);

      database
        .collection("eventos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// Update eventos tramite titulo

app.put("/update/evento/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let myBody = request.body;
  let _id = request.params._id;

  let database = db.db("releevant");

  database
    .collection("eventos")
    .findOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database.collection("eventos").updateOne(
        { _id: ObjectId(_id) },
        {
          $set: {
            fecha: myBody.fecha,
            titulo: myBody.titulo,
            descripcion: myBody.descripcion,
            ponentes: myBody.ponentes,
            enlace: myBody.enlace,
            foto: myBody.foto,
            marketing: myBody.marketing,
            "asistentes.inscrito": myBody.asistentes.inscrito,
            "asistentes.reales": myBody.asistentes.reales,
          },
        }
      );

      database
        .collection("eventos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// - Eliminar eventos con id
app.delete("/delete/evento/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;
  let database = db.db("releevant");

  database.collection("eventos");

  database
    .collection("eventos")
    .deleteOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database
        .collection("eventos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

////////// DOCENTES ENDPOINT  ////////////////

// Sacar todos los docentes
app.get("/docentes", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("docentes")
    .find()
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

//  Sacar todos los alumni tramite titulo
app.get("/buscar/docentes/:nombre", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let nombre = request.params.nombre;
  let database = db.db("releevant");

  database
    .collection("docentes")
    .find({ nombre: nombre })
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

// Introducir evento nuevo
app.post("/new/docente", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let MyDocente = request.body;

  let database = db.db("releevant");

  database
    .collection("docentes")
    .findOne({})
    .then((doc) => {
      database.collection("docentes").insertOne(MyDocente);

      database
        .collection("docentes")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// Update eventos tramite titulo

app.put("/update/docente/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let myBody = request.body;
  let _id = request.params._id;

  let database = db.db("releevant");

  database
    .collection("docentes")
    .findOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database.collection("docentes").updateOne(
        { _id: ObjectId(_id) },
        {
          $set: {
            nombre: myBody.nombre,
            bio: myBody.bio,
            posicion: myBody.posicion,
            LinkedIn: myBody.LinkedIn,
            foto: myBody.foto,
          },
        }
      );

      database
        .collection("eventos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// - Eliminar docente con id
app.delete("/delete/docente/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;
  let database = db.db("releevant");

  database.collection("docentes");

  database
    .collection("docentes")
    .deleteOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database
        .collection("docentes")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

////////////// EXPERTO ENDPOINT ///////////////////

// Sacar todos los expertos
app.get("/expertos", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("expertos")
    .find()
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

//  Sacar todos los expertos tramite nombre
/* app.get("/buscar/expertos/:nombre", function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let nombre = request.params.nombre;
  MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) throw err;

    let database = client.db("releevant");

    database
      .collection("expertos")
      .find({ nombre: nombre })
      .toArray((err, results) => {
        if (err) throw err;

        results.forEach((value) => {
          console.log(value);
        });
        response.json(results);
      });
  });
}); */

// Introducir experto nuevo
app.post("/new/experto", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let MyExperto = request.body;

  let database = db.db("releevant");

  database
    .collection("expertos")
    .findOne({})
    .then((doc) => {
      database.collection("expertos").insertOne(MyExperto);

      database
        .collection("expertos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// Update experto tramite nombre

app.put("/update/experto/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let myBody = request.body;
  let _id = request.params._id;

  let database = db.db("releevant");

  database
    .collection("expertos")
    .findOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database.collection("expertos").updateOne(
        { _id: ObjectId(_id) },
        {
          $set: {
            nombre: myBody.nombre,
            bio: myBody.bio,
            posicion: myBody.posicion,
            LinkedIn: myBody.LinkedIn,
            foto: myBody.foto,
          },
        }
      );

      database
        .collection("expertos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// - Eliminar expertos con id
app.delete("/delete/experto/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;

  let database = db.db("releevant");
  database.collection("expertos");

  database
    .collection("expertos")
    .deleteOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database
        .collection("expertos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

////////////////// CANDIDATOS ENDPOINT //////////////////////

// Sacar todos los candidatos
app.get("/candidatos", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */

  let database = db.db("releevant");

  database
    .collection("candidatos")
    .find()
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

app.get("/candidato/:estado/", async function (request, response) {
  let estado = request.params.estado;
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  let database = db.db("releevant");

  database
    .collection("candidatos")
    .find({ estado: estado })
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

//  Sacar todos los candidatos tramite nombre
app.get("/busca/candidatos/:nombre", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let nombre = request.params.nombre;
  let telefono = request.params.nombre.toString();

  let database = db.db("releevant");
  database
    .collection("candidatos")
    .find({
      $or: [
        { nombre: { $regex: new RegExp(nombre, "i") } },
        { telefono: { $regex: new RegExp(telefono, "i") } },
      ],
    })
    .toArray((err, results) => {
      if (err) throw err;

      results.forEach((value) => {});
      response.json(results);
    });
});

// Introducir candidato nuevo
app.post("/new/candidato", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let MyCandidato = request.body;

  let database = db.db("releevant");

  database
    .collection("candidatos")
    .findOne({})
    .then((doc) => {
      database.collection("candidatos").insertOne(MyCandidato);

      database
        .collection("candidatos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// Update candidato tramite nombre

app.put("/update/candidatos/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let myBody = request.body;
  let _id = request.params._id;

  let database = db.db("releevant");

  database
    .collection("candidatos")
    .findOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database.collection("candidatos").updateOne(
        { _id: ObjectId(_id) },
        {
          $set: {
            nombre: myBody.nombre,
            telefono: myBody.telefono,
            email: myBody.email,
            fechaEntrada: myBody.fechaEntrada,
            origen: myBody.origen,
            profesion: myBody.profesion,
            estudios: myBody.estudios,
            edad: myBody.edad,
            cursoInteres: myBody.cursoInteres,
            fechaContacto: myBody.fechaContacto,
            call: myBody.call,
            "cita.fecha": myBody.cita.fecha,
            "cita.ora": myBody.cita.ora,
            detalles: myBody.detalles,
          },
        }
      );

      database
        .collection("candidatos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

// - Eliminar candidato con id ///NO FUNCIONA CON ID, ELIMINA CON nombre P0R AHORA
app.delete("/delete/candidato/:_id", async function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let _id = request.params._id;

  let database = db.db("releevant");

  database.collection("candidatos");

  database
    .collection("candidatos")
    .deleteOne({ _id: ObjectId(_id) })
    .then((doc) => {
      database
        .collection("candidatos")
        .find()
        .toArray((err, results) => {
          if (err) throw err;
          response.json(results);
        });
    });
});

//////// login ///////

app.post("/login", async function (request, response) {
  myBody = request.body;
  response.set("Access-Control-Allow-Origin", "*");
/* response.send({ msg: "This has CORS enabled" }); */
let respuesta = "";
let status = 200;
let database = db.db("releevant");
  var admin = await database.collection("admins").findOne({
    email: { $eq: myBody.email },
    password: { $eq: md5(myBody.password) },
  });
  if (admin != null) {
    const token = jwt.sign(
      {
        email: admin.email,
        _id: admin._id,
      },
      "secretsecretkeykey",
      {
        expiresIn: "1h",
      }
    );
   respuesta = {
    message: "Auth successful",
    token: token,
   }
  
    
  } else {
    status = 403 
  }
  response.status(status).json(respuesta);
});
