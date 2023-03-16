import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NextItem from '../comp/NextItem';
import PrevItem from '../comp/PrevItem';

export default function ApiRegiao({regiao}) {
    const [ pokemon, setPokemon] = useState(null)
    const [page , setPage] = useState(1)
    if (!regiao)
        regiao = "kanto"
    


    useEffect(() =>{
        regionPokemon();
    }, [regiao, page]);
    
    function regionPokemon() {
        console.log(regiao)
        console.log(page)
        const url = `https://pokemon.danielpimentel.com.br/v1/pokemon/regiao/${regiao}/20/${page}`

        fetch(url)
            .then(resp => resp.json())
            .then(resp => setPokemon(resp))
            .catch(error => console.log(error))
    }
    if (pokemon == null){
        return(
            <div className='text-center'> Carregando dados...</div>
        )
    }

    function ProxPagina(){
        setPage(page+1);
    }
    function AntePagina(){
        if (page > 1){
            setPage(page-1);
        }else{
            setPage(1);
        }
    }

    return(
        <div className=''>
            <div className='flex'>
                <PrevItem CliquePagina={AntePagina}/>
                <NextItem CliquePagina={ProxPagina}/>
            </div>
            <div className='grid grid-cols-5 ' >{console.log(pokemon)}
            {pokemon.pokemon.map((poke) => (
                <span className=''>
                    <div className='m-2 p-1 text-center bg-slate-800 ' key={poke.id}>
                        
                        <div className='capitalize bg-white'>
                            <b>#{poke.numero}</b> <br />
                            <b>{poke.nome}</b>
                        </div>

                        <Link to ={`/pokemon/${poke.nome}`}>
                            <img className=' w-600' src={poke.img} alt="" />
                        </Link>

                        
                    </div>                   
                </span>               
            ))}
            </div>

            
        </div>
    )
}
