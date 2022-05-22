import { Outlet, NavLink } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Navbar from "./Navbar";
import FooterRel from "./FooterRel";
import ScrollToTop from "./ScrollTop";

function Layout() {
  const { auth, logout } = useAuthContext();
  return (
    <div>
      <ScrollToTop />
      {!auth && <Navbar />}
      {auth && (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink to="/inicio">
                {" "}
                <img
                  src="../../LogoDef.png"
                  alt="logo Releevant"
                  style={{ width: "35%" }}
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item float-end">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Alumnos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/alumni"
                  >
                    Alumni
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/eventos">
                    Eventos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/expertos">
                    Expertos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/docentes">
                    Docentes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/candidatos">
                    Candidatos
                  </NavLink>
                </li>
              </ul>
              <div className="ml-5 float-end">
                <button onClick={() => logout()} className="btn btn-warning">
                  Log Out
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
      <main className="App">
        <Outlet />
        <FooterRel />
      </main>
    </div>
  );
}

export default Layout;
