import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Characters from './components/pages/Characters'
import NewCharacter from './components/NewCharacter'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Characters/> } />
      <Route path="//new-character" element={ <NewCharacter/> } />

    </Routes>
   
   </BrowserRouter>
  )
}

export default App
