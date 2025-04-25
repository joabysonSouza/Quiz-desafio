import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questoes:QuestaoModel[] =[
    new QuestaoModel(1, "Qual bicho transmite a lepra",[
        RespostaModel.errado('abelha'),
        RespostaModel.errado('borboleta'),
        RespostaModel.errado('aranha'),
        RespostaModel.certa('rato'),
    ]),
    new QuestaoModel(2, "Qual é o maior planeta do sistema solar?", [
        RespostaModel.errado('Terra'),
        RespostaModel.errado('Marte'),
        RespostaModel.errado('Vênus'),
        RespostaModel.certa('Júpiter'),
    ]),
    
    new QuestaoModel(3, "Quem escreveu a peça 'Romeu e Julieta'?", [
        RespostaModel.errado('Machado de Assis'),
        RespostaModel.errado('Carlos Drummond de Andrade'),
        RespostaModel.errado('José de Alencar'),
        RespostaModel.certa('William Shakespeare'),
    ]),
    
    new QuestaoModel(4, "Qual é o elemento químico representado pelo símbolo 'O'?", [
        RespostaModel.errado('Ouro'),
        RespostaModel.errado('Ósmio'),
        RespostaModel.errado('Oxalato'),
        RespostaModel.certa('Oxigênio'),
    ]),
    
    new QuestaoModel(5, "Quantos lados tem um hexágono?", [
        RespostaModel.errado('4'),
        RespostaModel.errado('5'),
        RespostaModel.errado('8'),
        RespostaModel.certa('6'),
    ]),
    
    new QuestaoModel(6, "Em que país as pirâmides de Gizé estão localizadas?", [
        RespostaModel.errado('México'),
        RespostaModel.errado('Peru'),
        RespostaModel.errado('Índia'),
        RespostaModel.certa('Egito'),
    ]),
    
]

export default questoes