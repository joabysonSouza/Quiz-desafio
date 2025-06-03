
import { NextRequest, NextResponse } from "next/server";
import questoes from "../../bancoQuestoes"
import embaralha from "@/app/Functions/embaralha";


export async function GET(req: NextRequest,  {params}: {params:{id: string}}) {
    // const indice = Number(params.id)

    // const questao = questoes.find(questaoId => questaoId.id == indice)

    // if(!questao){
    //     return NextResponse.json({ erro: "Questão não encontrada" }, { status: 204 })
    // }
   const ids = questoes.map(ques => ques.id)

   const teste = embaralha(ids)

    return NextResponse.json(teste)
}

