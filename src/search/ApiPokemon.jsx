import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ApiPokemon() {
    
    const {nome} = useParams();
    const [pokemon, setPokemon] =useState(null);

    useEffect(() => {
        showPokemon();
    }, [])

    function showPokemon (){
        const url =`https://pokemon.danielpimentel.com.br/v1/pokemon/nome/${nome}`

        fetch(url)
            .then(resp => resp.json())
            .then(resp => setPokemon(resp))
            .catch(error => console.log(error))       
    }

    if (pokemon ==null){
        return(
            <div className='text-center '>
                Carregando Dados...
            </div>
        )
    }
  return (
    <div>
        <div className='h-40 bg-yellow-500 '></div>
        <div className='border-4 max-w-3xl m-auto text-center rounded-3xl'> 
            {console.log(pokemon.pokemon)}                
                <div key={pokemon.numero}>
                <div className='text-4xl capitalize'><b>{pokemon.pokemon.nome}</b></div>
                <div className='flex justify-center'>
                    <ul className='w-96 text-2xl '> 

                        <li> <b>Altura:</b> {pokemon.pokemon.altura}</li>
                        <li> <b>Peso:</b> {pokemon.pokemon.peso}</li>
                        <li> <b>Attack:</b> {pokemon.pokemon.atk}</li>
                        <li> <b>Deffence:</b> {pokemon.pokemon.def}</li>
                        <li> <b>Special Attack:</b> {pokemon.pokemon.spatk}</li>
                        <li> <b>Special Deffence:</b> {pokemon.pokemon.spdef}</li>
                        <li> <b>Speed:</b> {pokemon.pokemon.speed}</li>
                        <li> <b>Tipo:</b> {pokemon.pokemon.tipo}</li>
                        <li> <b>Evoluções:</b> {pokemon.pokemon.evolucoes}</li>
                        <li> <b>Geração:</b> {pokemon.pokemon.geracao}º</li>

                    </ul>
                    <img className='' src={pokemon.pokemon.img} alt="" />
                    
                </div>

            </div>
            
        </div>

    </div>
  )
}
