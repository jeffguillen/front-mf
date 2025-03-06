import axios from 'axios'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import Principal from './Principal';
import Persona from './Persona';

export default function Body(){

    const queryParameters = new URLSearchParams(window.location.search)
    const param = queryParameters.get("param")

    let resultado = []
    

     console.log("aaa", resultado);
     console.log("ttt", param);

     if(param){
        
        return <>
                <Persona></Persona>
              </> 
     }else{
        return <Principal></Principal>
     }

   

}