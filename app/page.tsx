
import Questao from "./Components/questao";
import QuestaoModel from "./model/questao";
import RespostaModel from "./model/resposta";

export default function Home() {

  const questaoTeste = new QuestaoModel(1, "Quantos dedos tem uma mão", [
    RespostaModel.errado("23"),
    RespostaModel.errado("2"),
    RespostaModel.certa("5"),
    RespostaModel.errado("4")

  ])
  return (

    <Questao enunciado = {questaoTeste}  /> 
    

    
  );
}
