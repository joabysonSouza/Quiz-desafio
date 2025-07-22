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

  return (
    <>
      <Questao enunciado={questaoTeste.enunciado} />
      {questaoTeste.respostas.map((res,i) => (
   
          <Resposta valor={res.valor}  key={i} letra="A" corLetra="#255057"/>
      
      ))}

      <h1>ola</h1>
    </>
  );
}
