import React from 'react'

export default function TipoItem({tipos, ClickTipos}) {
  return (
    <div className='border-2 border-black mb-5 bg-white'>
      <div onClick={() =>ClickTipos(tipos.nome)}>{tipos.nome}</div>
    </div>
  )
}
