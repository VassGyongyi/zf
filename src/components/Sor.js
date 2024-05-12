import React from "react";

export default function Sor({adat}){
    return(
        <tr>
        <td>{adat.id}</td>
        <td>{adat.tevekenyseg_nev}</td>
        <td>{adat.osztaly_nev}</td>
        {adat.allapot === "0" ? <td>nincs elfogadva</td>: <td>elfogadva</td>}
        </tr>
    )
}