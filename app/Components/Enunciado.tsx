import React from 'react'
import questoes from '../api/bancoQuestoes'

const Enunciado = () => {

   const Questoesrenderizada = questoes.map((questao, i) => questao)

  console.log(Questoesrenderizada)
  return (
    <div>
      
    </div>
  )
}

export default Enunciado
