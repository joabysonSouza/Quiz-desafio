import { NextRequest, NextResponse } from "next/server";
import questoes from "../../bancoQuestoes";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const indice = Number(params.id);

   const questaoSelecionada = questoes.find(questao => questao.id === indice);

  if (questaoSelecionada) {
    const questaoEmbaralhada = questaoSelecionada.embaralhaRespostas();
    
    return  NextResponse.json(questaoEmbaralhada.converterParaObjeto())
  } else {
    return NextResponse.json({ erro: "Questão não encontrada" }, { status: 404 });
  }
}
