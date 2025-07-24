import Questao from "./Components/questao";
import Resposta from "./Components/Resposta";
import QuestaoModel from "./model/questao";
import RespostaModel from "./model/resposta";

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

  return (
    <>
      <Questao enunciado={questaoTeste.enunciado} />
      
      {questaoTeste.respostas.map((res, i) => (

        <Resposta 
        valor={res.valor}  
        key={i} 
        letra={atributoLetra[i].valor}
         corLetra={atributoLetra[i].cor} />

      ))}

    
    </>
  );
}
