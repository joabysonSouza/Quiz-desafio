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
      <div className="" onClick={()=> respostaClicada(indice)}>


        {!revelada ? (
          <div className=" flex p-2 bg-white rounded-lg">
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
          <div className=" w-full p-3 bg-red-500 rounded-lg">
            {" "}
            {/*atras do card*/}
            sua resposta esta errada
          </div>



















          


        ) }
          
        </div>

          
         
    </div>
  );
};

export default Resposta;
