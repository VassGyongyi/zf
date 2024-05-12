import React,{ createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "../api/axios";

const AdatContext = createContext();

export const AdatProvider =({children})=>{
    const[bejegyzesLista, setBejegyzesLista]=useState([]);
    const [tevekenysegLista, setTevekenysegLista] =useState([]);
    const [bejegyzesekList, setBejegyzesekList] =useState([]);

    const getLista =async(vegpont, callBack)=>{
        const{data}=await axios.get(vegpont);
        
        callBack(data);
       // console.log(data)
    };
    const postAdat=async({...adat},vegpont)=>{
        try{
            await axios.post(vegpont, adat);
            getLista("api/bejegyzesek", setBejegyzesLista);
            console.log(adat)

        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getLista("api/bejegyzesekList", setBejegyzesekList);
        getLista("api/bejegyzesek", setBejegyzesLista);
     
        getLista("api/tevekenysegek", setTevekenysegLista);
      
    }, [bejegyzesekList,bejegyzesLista,tevekenysegLista]);

    return(
        <AdatContext.Provider
            value={{bejegyzesLista, bejegyzesekList, tevekenysegLista, postAdat}}
            >
            {children}
            </AdatContext.Provider>
    )
}
export default function useAdatContext(){
    return useContext(AdatContext);
}