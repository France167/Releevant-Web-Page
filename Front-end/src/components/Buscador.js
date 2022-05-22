import { useState, useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import useDebounce from "../hooks/useDebounce";

export default function Search() {
  const { setAlumnos, setAlumni, setCandidatos, setEventos } =
    useGlobalContext();
  const [inputText, setInputText] = useState("");
  const debouncedSearch = useDebounce(inputText, 300);

  function search(e) {
    setInputText(e.target.value);
  }

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(`http://localhost:3001/busca/${debouncedSearch}`);
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setAlumnos(json);
      }
      async function fetchAlumnos() {
        let response = await fetch("http://localhost:3001/", {
          mode: "cors",
        });
        let json = await response.json();
        setAlumnos(json);
      }
      if (debouncedSearch !== "") {
        fetchApi();
      }
      if (debouncedSearch === "") {
        fetchAlumnos();
      }
    },
    [inputText, setAlumnos, debouncedSearch]
  );

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(
          `http://localhost:3001/buscar/alumni/${debouncedSearch}`
        );
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setAlumni(json);
      }
      async function fetchAlumni() {
        let response = await fetch("http://localhost:3001/alumni", {
          mode: "cors",
        });
        let json = await response.json();
        setAlumni(json);
      }
      if (debouncedSearch !== "") {
        fetchApi();
      }
      if (debouncedSearch === "") {
        fetchAlumni();
      }
    },
    [inputText, setAlumni, debouncedSearch]
  );

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(
          `http://localhost:3001/busca/candidatos/${debouncedSearch}`
        );
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setCandidatos(json);
      }
      async function fetchCandidatos() {
        let response = await fetch("http://localhost:3001/candidatos", {
          mode: "cors",
        });
        let json = await response.json();
        setCandidatos(json);
      }
      if (debouncedSearch !== "") {
        fetchApi();
      }
      if (debouncedSearch === "") {
        fetchCandidatos();
      }
    },
    [inputText, setCandidatos, debouncedSearch]
  );

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(
          `http://localhost:3001/buscar/eventos/${debouncedSearch}`
        );
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setEventos(json);
      }
      async function fetchEventos() {
        let response = await fetch("http://localhost:3001/eventos", {
          mode: "cors",
        });
        let json = await response.json();
        setEventos(json);
      }
      if (debouncedSearch !== "") {
        fetchApi();
      }
      if (debouncedSearch === "") {
        fetchEventos();
      }
    },
    [inputText, setEventos, debouncedSearch]
  );

  return (
    <div>
      <form className="d-flex mb-5">
        <input
          onChange={search}
          className="form-control m w-75 m-auto"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          value={inputText}
        />
      </form>
    </div>
  );
}
