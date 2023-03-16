import React from 'react'

export default function PrevItem({CliquePagina}) {
  let pagina = 1
    function paginaAnterior(){
        pagina --
        return pagina;
    }
    
  return (
    <div className='text-2xl m-auto mt-6 border-2 border-black mb-5 bg-white'>
      <button className='m-1' onClick={() => CliquePagina(paginaAnterior)}><b>◀ Anterior</b></button>
    </div>
    
  )
}
