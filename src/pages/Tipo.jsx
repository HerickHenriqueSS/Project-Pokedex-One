import React, { useEffect, useState } from 'react'
import TipoItem from '../comp/TipoItem';
import ApiTipo from '../search/ApiTipo';

export default function Tipo() {
  const [tipos, setTipos] = useState(null);
    const [tipoNome, settipoNome] = useState('normal');

    useEffect(() =>{
        const url = `https://pokemon.danielpimentel.com.br/v1/tipos`;
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setTipos(dados))
            .catch(error => console.log(error));
        
    }, []);

    if( tipos == null){
        return(
            <div className='text-center '>
                Carregando Dados...
            </div>
        )
    }


    function clickTipos(nomeTipo){
        /* alert(nomeTipo) */
        settipoNome(nomeTipo)
    }
    return (
        <>
            <div className=''></div>
            <div className="w-auto h-96 bg-yellow-500 border-b-8 border-blue-600">
                <div className='box flex w-auto'>
                    <div className='m-3 uppercase cursor-pointer text-center w-auto text-4xl'><b> 
                        {tipos.tipos.map((tiposMap) =>(
                        <TipoItem tipos={tiposMap} key={tiposMap.nome} ClickTipos={clickTipos} />))}
                        </b>
                    </div>

                    <div className=''>
                        <ApiTipo tipo={tipoNome}/>
                    </div>
                </div>
            </div>
        </>
    )
}
