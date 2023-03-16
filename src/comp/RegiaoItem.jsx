import React from 'react'

export default function RegiaoItem({regiao, ClickRegiao}) {
  return (
    <div className='border-2 border-black mb-5 bg-white'>
      <div onClick={() =>ClickRegiao(regiao.nome)}>{regiao.nome}</div>
    </div>
  )
}
