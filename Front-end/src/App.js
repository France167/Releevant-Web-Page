import "./App.css";
import { Route, Routes } from "react-router-dom";
import Alumnos from "./views/Admin/Alumnos";
import Detalles from "./views/Admin/Detalles";
import Error from "./views/Admin/Error";
import Update from "./views/Admin/Update";
import AnadirAlumno from "./views/Admin/AnadirAlumno";
import SendAlumni from "./views/Admin/SendAlumni";
import Alumni from "./views/Admin/Alumni";
import DetallesAlumni from "./views/Admin/DetallesAlumni";
import UpdateAlumni from "./views/Admin/UpdateAlumni";
import Docentes from "./views/Admin/Docentes";
import AnadirDocente from "./views/Admin/AnadirDocente";
import Expertos from "./views/Admin/Expertos";
import AnadirExperto from "./views/Admin/AnadirExperto";
import Candidatos from "./views/Admin/Candidatos";
import AnadirCandidato from "./views/Admin/AnadirCandidato";
import Eventos from "./views/Admin/Eventos";
import AnadirEvento from "./views/Admin/AnadirEvento";
import UpdateEvento from "./views/Admin/UpdateEvento";
import UpdateCandidato from "./views/Admin/UpdateCandidato";
import Layout from "./components/Layout";
import Login from "./views/Admin/Login";
import RequireAuth from "./components/RequireAuth";
import UpdateDocente from "./views/Admin/UpdateDocente";
import UpdateExperto from "./views/Admin/UpdateExperto";
import Inicio from "./views/Releevant/Inicio";
import Desarrollo from "./views/Releevant/Desarrollo";
import Releevant from "./views/Releevant/Releevant";
import CorsoWeb from "./views/Releevant/CorsoWeb";
import PoliticaCookies from "./views/Releevant/PoliticaCookies";
import PoliticaPrivacy from "./views/Releevant/PoliticaPrivacy";
import Careers from "./views/Releevant/Careers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="inicio" element={<Inicio />} />
        <Route path="desarrollo" element={<Desarrollo />} />
        <Route path="releevant" element={<Releevant />} />
        <Route path="curso-desarrollo" element={<CorsoWeb />} />
        <Route path="politica-cookie" element={<PoliticaCookies />} />
        <Route path="politica-privacy" element={<PoliticaPrivacy />} />
        <Route path="careers" element={<Careers />} />
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route index element={<Alumnos />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="anadir" element={<AnadirAlumno />} />
          <Route path="detalles/:_id" element={<Detalles />} />
          <Route path="update/:_id" element={<Update />} />
          <Route path="update/alumni/:_id" element={<UpdateAlumni />} />
          <Route path="send/:_id" element={<SendAlumni />} />
          <Route path="detalles/alumni/:_id" element={<DetallesAlumni />} />
          <Route path="docentes" element={<Docentes />} />
          <Route path="anadirdocente" element={<AnadirDocente />} />
          <Route path="expertos" element={<Expertos />} />
          <Route path="anadirexperto" element={<AnadirExperto />} />
          <Route path="candidatos" element={<Candidatos />} />
          <Route path="anadircandidato" element={<AnadirCandidato />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="anadirevento" element={<AnadirEvento />} />
          <Route path="updateevento/:_id" element={<UpdateEvento />} />
          <Route path="updatecandidato/:_id" element={<UpdateCandidato />} />
          <Route path="updatedocente/:_id" element={<UpdateDocente />} />
          <Route path="updateexperto/:_id" element={<UpdateExperto />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
