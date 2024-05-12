import React, { useEffect, useState } from "react";
import Sor from "./Sor";

import useAdatContext from "../contexts/AdatContext";

export default function Kezdolap() {
  const { bejegyzesLista } = useAdatContext();
  const { tevekenysegLista } = useAdatContext();
  const { bejegyzesekList } = useAdatContext();
  const [osztalyok, setOsztalyok] = useState({});
  const [selectedOsztaly, setSelectedOsztaly] = useState("");
  
  useEffect(() => {
    const osztalyokObj = {};
    // Iterálás az összes bejegyzésen, hogy számoljuk az osztályok összpontszámát
    bejegyzesekList.forEach((bejegyzes) => {
        const osztalyNev = bejegyzes.osztaly_nev;
        const pontszam = bejegyzes.pontszam;
      if (osztalyokObj[osztalyNev]) {
        osztalyokObj[osztalyNev] += pontszam;
      } else {
        osztalyokObj[osztalyNev] = pontszam;
      }
    });
    setOsztalyok(osztalyokObj);
  }, [bejegyzesekList]);

  const filteredBejegyzesekList = selectedOsztaly
    ? bejegyzesekList.filter(
        (bejegyzes) => bejegyzes.osztaly_nev === selectedOsztaly
      )
    : bejegyzesekList;
    
  return (
    <>
      <select
        value={selectedOsztaly}
        onChange={(e) => setSelectedOsztaly(e.target.value)}
      >
        <option value="">Összes osztály</option>
        {Object.keys(osztalyok).map((osztalyNev) => (
          <option key={osztalyNev} value={osztalyNev}>
            {osztalyNev}
          </option>
        ))}
      </select>
     
      <table class="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>tevékenység</th>
            <th>osztály</th>
            <th>állapot</th>
          </tr>
        </thead>
        <tbody>
          {filteredBejegyzesekList
            .map((element, index) => {
            return <Sor adat={element} key={index} />;
          })}
        </tbody>
      </table>
      <table class="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>osztály</th>
            <th>pontszám</th>
          </tr>
        </thead>
        <tbody>
        {Object.entries(osztalyok)
            .sort(([, a], [, b]) => b-a) // A pontszám szerinti növekvő sorrend rendezése
            .map(([osztalyNev, osszpontszam]) => (
              <tr key={osztalyNev}>
                <td>{osztalyNev}</td>
                <td>{osszpontszam}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
