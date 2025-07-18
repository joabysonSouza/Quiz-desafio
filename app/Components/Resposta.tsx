import React from 'react'

interface RespostaProps {
    valor ?: string 
    indice ?: number
    letra ?: string
    corLetra?: string


}

const Resposta = ({valor, indice, letra, corLetra}: RespostaProps) => {


  return (
    <div className='flex'>
        <div className=''>
           <div className=''>    {/*Frente do Card */}
                  <div>letra {letra}</div>
                  <div> Resposta : {valor}</div>
             </div>
        </div>
      
    </div>
  )
}

export default Resposta
