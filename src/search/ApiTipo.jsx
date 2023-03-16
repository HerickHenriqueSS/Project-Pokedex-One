import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NextItem from '../comp/NextItem';
import PrevItem from '../comp/PrevItem';

export default function ApiTipo({tipo}) {
  const [ pokemonT, setPokemon] = useState(null)
    const [page , setPage] = useState(1)
    if (!tipo)
        tipo = "normal"
    

    useEffect(() =>{
        typePokemon();
    }, [tipo]);

    useEffect(() =>{
        pagePokemon();
    }, [page]);



    function pagePokemon() {
        console.log(tipo)
        console.log(page)
        const url = `https://pokemon.danielpimentel.com.br/v1/pokemon/tipo/${tipo}/20/${page}`

        fetch(url)
            .then(answer => answer.json())
            .then(answer => setPokemon(answer))
            .catch(error => console.log(error))
    }
    
    function typePokemon() {
        console.log(tipo)
        console.log(page)
        const url = `https://pokemon.danielpimentel.com.br/v1/pokemon/tipo/${tipo}/20/1`

        fetch(url)
            .then(resp => resp.json())
            .then(resp => setPokemon(resp))
            .catch(error => console.log(error))

        setPage(1)
    }

    if (pokemonT ==null){
      return(
          <div className='text-center '>
              Carregando Dados...
          </div>
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
            <div className='flex '>
              <PrevItem CliquePagina={AntePagina}/>
              <NextItem CliquePagina={ProxPagina}/>
            </div>

            <div className='grid grid-cols-5 ' >{console.log(pokemonT)}
            {pokemonT.pokemon.map((poke) => (
                <span className=''> 
                    <div className='m-2 p-1 text-center bg-slate-800 ' key={poke.numero}>
                        
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
