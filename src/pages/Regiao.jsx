import React, { useEffect, useState } from 'react'
import RegiaoItem from '../comp/RegiaoItem';
import ApiRegiao from '../search/ApiRegiao';

export default function Regiao() {
    const [regioes, setRegioes] = useState(null);
    const [nomeRegiao , setNomeRegiao] = useState('kanto');

    useEffect(() =>{
        const url = `https://pokemon.danielpimentel.com.br/v1/regioes`;
        
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setRegioes(dados))
            .catch(error => console.log(error));

            
    }, []);

    
    if( regioes == null){
        return(
            <div className='text-center '>
                Carregando Dados...
            </div>
        )
    }

    function clickRegion(regiao){
        setNomeRegiao(regiao)
    }

  return (
    <div className=''>
        <div className=''></div>
        <div className="w-auto h-96 bg-yellow-500 border-b-8 border-blue-600">
            <div className='box flex w-auto'>
                <div className='m-3 uppercase cursor-pointer text-center w-auto text-4xl'><b> 
                {regioes.regioes.map((regioesMap) =>(
                <RegiaoItem regiao={regioesMap} key={regioesMap.nome} ClickRegiao={clickRegion} />))}
                </b>
                </div>

                <div className=''>
                    <ApiRegiao regiao={nomeRegiao}/>
                </div>
            </div>

            
        </div>
    </div>
  )
}
