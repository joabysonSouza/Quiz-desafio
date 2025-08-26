import React from "react";
import RespostaModel from "../model/resposta";

interface RespostaProps {
  valor?: string;
  indice: number ;
  letra?: string;
  corLetra?: string;
  certa?: boolean;
  revelada: boolean
  respostaClicada : (indice: number)=> void
}

const Resposta = ({ valor, indice, letra, corLetra, certa, respostaClicada,revelada }: RespostaProps) => {
  return (
    <div className="flex p-5">
      <div className="" >


        {!revelada ? (
          
          <div className=" flex p-2 bg-white rounded-lg" onClick={()=> respostaClicada(indice)}>
            {" "}
            {/*Frente do Card */}
            <div
              className="w-10 h-9 flex  items-center justify-center font-extrabold rounded-full"
              style={{ backgroundColor: corLetra }}
            >
              {letra}
            </div>
            <div className="w-full p-1 ml-3 text-black text-2xl font-extrabold ">
              {" "}
              Resposta : {valor}
            </div>
          </div>
     
        ):(
          <div>
            {certa ? (
   <div className="bg-green-500 text-white p-3 rounded-lg">
    ✅ A resposta  certa
  </div>
) : (
  <div className="bg-red-500 text-white p-3 rounded-lg">
    ❌ Sua resposta está errada
  </div>
)}

          </div>
       
  )}

   

  </div>
  </div>
  )}


export default Resposta;
