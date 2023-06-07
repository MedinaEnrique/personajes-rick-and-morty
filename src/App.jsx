import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Characters from './components/pages/Characters'
import EditCharacter from './components/pages/EditCharacter'
import NewCharacter from './components/pages/NewCharacter'


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Characters/> } />
      <Route path="/new-character" element={ <NewCharacter/> } />
      <Route path="/edit-character" element={ <EditCharacter/> } />


    </Routes>
   
   </BrowserRouter>
  )
}

export default App
