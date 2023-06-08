import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Characters from './components/pages/Characters'
import EditCharacter from './components/pages/EditCharacter'
import NewCharacter from './components/pages/NewCharacter'
import { useState } from 'react'
import ListContext from './context/ListContext'


function App() {
  const [characters, setCharacters] = useState(null)
  const [indexEdit, setIndexEdit] = useState(null)
  
  return (
    <ListContext.Provider value={{ characters, setCharacters, indexEdit, setIndexEdit}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/new-character" element={<NewCharacter />} />
          <Route path="/edit-character" element={<EditCharacter />} />


        </Routes>

      </BrowserRouter>
    </ListContext.Provider>
  )
}

export default App
