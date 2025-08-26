import React from 'react'
import QuestaoModel from '../model/questao'
import Temporizador from './Temporizador'


interface enunciadoProps {
    enunciado : string
    tempoEsgotado: ()=> void

}




const Questao = ({enunciado, tempoEsgotado}: enunciadoProps) => {


  return (

    <div className='w-full flex justify-center items-center mt-4'>
           <div className=" absolute top-40  right-14">
        <Temporizador duracao={4} tempoEsgotado={tempoEsgotado}/>
      </div>
      

   
    <p className='w-1/2 h-auto bg-blue-600 p-7 rounded-xl  flex justify-center '>
      {enunciado} 
      
    </p>
     </div>
  )
}

export default Questao
