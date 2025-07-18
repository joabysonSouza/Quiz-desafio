import React from 'react'
import QuestaoModel from '../model/questao'


interface enunciadoProps {
    enunciado : string

}

const Questao = ({enunciado}: enunciadoProps) => {


  return (
    <div>
       questao: {enunciado}
      
    </div>
  )
}

export default Questao
