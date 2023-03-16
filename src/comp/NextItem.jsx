import React from 'react'

export default function NextItem({CliquePagina}) {
  let pagina = 1
    function proximaPagina(){
        pagina ++
        return pagina;
    }
    
  return (
    <div className='text-2xl m-auto border-2 border-black mb-5 bg-white'>
      <button className='m-1'  onClick={() => CliquePagina(proximaPagina)}><b>Proximo ▶</b></button>
    </div>
  )
}
