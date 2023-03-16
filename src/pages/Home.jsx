import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div className='mb-28 mt-28 flex-row justify-center text-center '>
            <span className=' uppercase border-4 bg-white border-black mb-8 text-7xl'> Pokedex </span>
            <ul className='mt-20 m-5'>
                <Link className='m-6 p-2 rounded-3xl capitalize border-4 bg-white border-black mb-8 text-3xl' to="/regioes"> Regiões</Link>
                <Link className='m-6 p-2 rounded-3xl capitalize border-4 bg-white border-black mb-8 text-3xl' to="/tipos"> Tipos</Link>


            </ul>
        </div>
    </div>
  )
}
