import React from 'react'
import QuestaoModel from '../model/questao'


interface enunciadoProps {
    enunciado : string

}

const Questao = ({enunciado}: enunciadoProps) => {


  return (

    <div className='w-full flex justify-center items-center mt-4'>

   
    <p className='w-1/2 h-auto bg-blue-600 p-7 rounded-xl  flex justify-center '>
      {enunciado} 
      
    </p>
     </div>
  )
}

export default Questao
