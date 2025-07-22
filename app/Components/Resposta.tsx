import React from 'react'

interface RespostaProps {
    valor ?: string 
    indice ?: number
    letra ?: string
    corLetra?: string


}

const Resposta = ({valor, indice, letra, corLetra}: RespostaProps) => {


  return (
    <div className='flex '>
        <div className=''>
           <div >    {/*Frente do Card */}
                  <div>letra {letra}</div>
                  <div className="w-full" style={{backgroundColor: corLetra}} > Resposta : {valor}</div>
             </div>
        </div>
      
    </div>
  )
}

export default Resposta
