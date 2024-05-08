import React, {useState} from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Urlap(){
    const {tevekenysegLista,postAdat, setBejegyzesLista}=useAdatContext();
    const osztalyLista = ["SZF1", "SZF2", "SZF3"];
    const [osztaly, setOsztaly]=useState("valassz");
    const [tevekenyseg, setTevekenyseg] =useState("valassz");

    function kuld(event){
        event.preventDefault();
        let adat={
            tevekenyseg_id : tevekenyseg,
            o_id: osztaly,
            allapot: 0,
        };
        if(!(osztaly==="valassz" || tevekenyseg==="valassz")){
            postAdat(adat, "api/bejegyzes", setBejegyzesLista)
        }else{
            console.log("hibás adatok")
        }
    }
    return(
<form className="my-3" onSubmit={kuld}>
<select
className="form-select"
id="osztaly"
name="osztaly"
onChange={(event)=>{
    setOsztaly(event.target.value)
}}>
<otion value="valassz">Válassz osztályt!</otion>
{osztalyLista.map((element, index)=>{
    return(<option key={index} value={element}>
        {element}
        </option>)
})}
</select>
<select
className="form-select"
id="tevekenyseg"
name="tevekenyseg"
onChange={(event)=>{
    setTevekenyseg(event.target.value)
}}>
<otion value="valassz">Válassz tevékenységet!</otion>
{tevekenysegLista.map((element, index)=>{
    return(<option value={element.tevekenyseg_id} key={index} >
        {element.tevekenyseg_nev}
        </option>)
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