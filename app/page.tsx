'use client'

import { useState } from "react";
import Questao from "./Components/questao";
import Resposta from "./Components/Resposta";
import QuestaoModel from "./model/questao";
import RespostaModel from "./model/resposta";
import Temporizador from "./Components/Temporizador";

export default function Home() {

  const questaoTeste = new QuestaoModel(1, "Quantos dedos tem uma mão ?", [
    RespostaModel.errado("23 dedos"),
    RespostaModel.errado("2 dedos"),
    RespostaModel.certa("5 dedos"),
    RespostaModel.errado("4 dedos"),
  ]);

  const atributoLetra = [
    {valor:"A" , cor:"#F2C866"},
      {valor:"B" , cor:"#F266BA"},
        {valor:"C" , cor:"#85D4F2"},
          {valor:"D" , cor:"#BCE596"},
  ]


  const [questao, setQuestao] = useState(questaoTeste)


  const respostaFornecida = (indice: number)=>{
    console.log(indice)
    setQuestao(questao.responderCom(indice))

  }

  return (
    <>
      <Questao enunciado={questaoTeste.enunciado} />
      
      {questao.respostas.map((res, i) => (

        <Resposta 
        respostaClicada={respostaFornecida}
        indice={i}
        valor={res.valor}  
        key={i} 
        letra={atributoLetra[i].valor}
         corLetra={atributoLetra[i].cor} 
         certa={res.certa}
         revelada ={res.revelada}

         />

      ))}

      <div>
        <Temporizador />
      </div>

    
    </>
  );
}
