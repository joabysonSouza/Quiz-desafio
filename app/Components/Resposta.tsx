import React from 'react'

interface RespostaProps {
    valor ?: string 
    indice ?: number
    letra ?: string
    corLetra?: string


}

const Resposta = ({valor, indice, letra, corLetra}: RespostaProps) => {


  return (
    <div className='flex p-5'>
        <div className=''>
           <div className=' flex p-2 bg-white rounded-lg'>    {/*Frente do Card */}
                  <div className='w-10 h-9 flex  items-center justify-center font-extrabold rounded-full' style={{backgroundColor: corLetra}}>{letra}</div>
                  <div className="w-full p-1 ml-3 text-black text-2xl font-extrabold "  > Resposta : {valor}</div>
             </div>
        </div>
      
    </div>
  )
}

export default Resposta
