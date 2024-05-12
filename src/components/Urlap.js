import React, { useState } from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Urlap() {
  const { tevekenysegLista, bejegyzesekList, postAdat, setBejegyzesLista } = useAdatContext();
  const osztalyLista = ["szf1", "szf2", "szf3", "szf4", "szf5"];

  const [osztaly, setOsztaly] = useState("");
  const [tevekenyseg, setTevekenyseg] = useState("");
  

  function kuld(event) {
    event.preventDefault();
    let adat = {
      tevekenyseg_id: tevekenyseg,
      osztaly_nev: osztaly,
      allapot: 0,
    };
    if (!(osztaly === "valassz" || tevekenyseg === "valassz")) {
      postAdat(adat, "api/bejegyzesek", setBejegyzesLista);
    } else {
      console.log(osztaly)
      console.log("hibás adatok");
    }
  }
  return (
    <form className="my-3" onSubmit={kuld}>
      <select
        className="form-select"
        id="osztaly"
        name="osztaly"
        onChange={(event) => {
          setOsztaly(event.target.value);
        }}
      >
        <otion value="valassz">Válassz osztályt!</otion>
        {osztalyLista.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      <select
        className="form-select"
        id="tevekenyseg"
        name="tevekenyseg"
        onChange={(event) => {
          setTevekenyseg(event.target.value);
        }}
      >
        <otion value="valassz">Válassz tevékenységet!</otion>
        {tevekenysegLista.map((element, index) => {
          return (
            <option value={element.tevekenyseg_id} key={index}>
              {element.tevekenyseg_nev}
            </option>
          );
        })}
      </select>
      <input
        type="submit"
        className="btn btn-success"
        value="Küld"
        id="submit"
      />
    </form>
  );
}
