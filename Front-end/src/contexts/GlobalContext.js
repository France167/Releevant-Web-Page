import { createContext, useContext, useState, useEffect } from "react";

const globalContext = createContext({
  alumnos: [],
  setAlumnos: () => {},
  alumni: [],
  setAlumni: () => {},
  candidatos: [],
  setCandidatos: () => {},
  eventos: [],
  setEventos: () => {},
  docentes: [],
  setDocentes: () => {},
  expertos: [],
  setExpertos: () => {},
});

export const useGlobalContext = () => {
  return useContext(globalContext);
};

export function GlobalContextProvider({ children }) {
  const [alumnos, setAlumnos] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [candidatos, setCandidatos] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [docentes, setDocentes] = useState([]);
  const [expertos, setExpertos] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:3001/", {
        mode: "cors",
      });
      let json = await response.json();
      setAlumnos(json);
    }

    fetchApi();
  }, []);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:3001/alumni", {
        mode: "cors",
      });
      let json = await response.json();
      setAlumni(json);
    }

    fetchApi();
  }, []);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:3001/candidatos", {
        mode: "cors",
      });
      let json = await response.json();
      setCandidatos(json);
    }

    fetchApi();
  }, [candidatos]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:3001/eventos", {
        mode: "cors",
      });
      let json = await response.json();
      setEventos(json);
    }

    fetchApi();
  }, []);

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch("http://localhost:3001/docentes", {
          mode: "cors",
        });
        let json = await response.json();
        setDocentes(json);
      }

      fetchApi();
    },
    [docentes]
  );

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch("http://localhost:3001/expertos", {
          mode: "cors",
        });
        let json = await response.json();
        setExpertos(json);
      }

      fetchApi();
    },
    [expertos]
  );

  const value = {
    alumnos,
    setAlumnos,
    alumni,
    setAlumni,
    candidatos,
    setCandidatos,
    eventos,
    setEventos,
    docentes,
    setDocentes,
    expertos,
    setExpertos,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
