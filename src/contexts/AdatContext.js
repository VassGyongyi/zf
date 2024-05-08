import React,{ createContext, useContext, useState, useEffect, Children, useCallback } from "react";
import axios from "../api/axios";

const AdatContext = createContext();

export const AdatProvider =({children})=>{
    const[bejegyzesLista, setBjegyzesLIsta]=useState([]);
    const [tevekenysegLista, setTevekenysegLista] =useState([]);

    const getLista =async(vegpont, callBack)=>{
        const{data}=await axios.get(vegpont);
        callBack(data);
    };
    const postAdat=async({...adat},vegpont)=>{
        try{
            await axios.post(vegpont, adat);
            getLista("api/bejegyzesek", setBjegyzesLIsta);

        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getLista("api/bejegyzesek", setBjegyzesLIsta)
        getLista("api/tevekenysegek", setTevekenysegLista)
    }, []);

    return(
        <AdatContext.Provider
            value={{bejegyzesLista, tevekenysegLista, postAdat}}
            >
            {children}
            </AdatContext.Provider>
    )
}
export default function useAdatContext(){
    return useContext(AdatContext);
}