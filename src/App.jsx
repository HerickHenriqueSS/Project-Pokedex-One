
import Tipo from './pages/Tipo'
import Regiao from './pages/Regiao'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ApiPokemon from './search/ApiPokemon'
import Home from './pages/Home'

function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/tipos/' element={<Tipo />}/>
          <Route path = '/regioes/' element={<Regiao />}/>
          <Route path = '/pokemon/:nome' element={<ApiPokemon />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
