import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'

import HomeScreen from './Pages/Homescreen/HomeScreen'
import CharacterInfo from './Pages/CharacterInfo/CharacterInfo'

import CharacterInfoContext from './Contexts/CharacterInfoContext'

const App = () => {
  return (
    <CharacterInfoContext>
        <BrowserRouter>
          <Routes>
            <Route path="/:id" element={<CharacterInfo id/>} />
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        </BrowserRouter>
    </CharacterInfoContext>
  )
}

export default App