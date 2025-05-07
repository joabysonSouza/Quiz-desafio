import { NextRequest, NextResponse } from "next/server";
import questoes from "../../bancoQuestoes"

export async function GET(req: NextRequest,  {params}: {params:{id: string}}) {
    const indice = Number(params.id)

    const questao = questoes.find(questaoId => questaoId.id == indice)

    if(!questao){
        return NextResponse.json({ erro: "Questão não encontrada" }, { status: 204 })
    }

    return NextResponse.json(questoes[Number(indice)].converterParaObjeto())
}

