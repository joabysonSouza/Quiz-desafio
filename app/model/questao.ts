import embaralha from "../Functions/embaralha";
import RespostaModel from "./resposta";

export default class QuestaoModel {
  #id: number;
  #enunciado: string;
  #respostas: RespostaModel[];
  #acertou?: boolean;

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostaModel[],
    acertou?: boolean
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }

  get id() {
    return this.#id;
  }

  get enunciado() {
    return this.#enunciado;
  }

  get respostas() {
    return this.#respostas;
  }

  get acertou() {
    return this.#acertou;
  }

  get respondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  embaralhaRespostas(): QuestaoModel {
    let respostasEmbaralhadas = embaralha(this.#respostas);
    return new QuestaoModel(
      this.#id,
      this.#enunciado,
      respostasEmbaralhadas,
      this.#acertou
    );
  }
  responderCom(indece: number) {
    if (indece === -1) {
    // tempo esgotado: revela todas as respostas
    const respostas = this.#respostas.map(resposta => resposta.revela());
    return new QuestaoModel(this.#id, this.#enunciado, respostas, false);
  }
    const acertou = this.#respostas[indece]?.certa;
    const respostas = this.#respostas.map(
      (resposta: RespostaModel, i: number) => {
        const respostaSelecionada = indece == i;
        const deveRevala = respostaSelecionada || resposta.certa;
        return deveRevala ? resposta.revela() : resposta;
      }
    );

    return new QuestaoModel(this.#id, this.#enunciado, respostas,acertou)
  }
  converterParaObjeto() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map((resp) => resp.converterParaObjeto()),
      acertou: this.#acertou,
    };
  }
}
