import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import Login from './pages/Login'

function App() {
 
  
  return (
    <>
    <Routes>
      <Route path='/' element = { <Login/> } />
      <Route path='/Products' element = {<Products/>} />
    </Routes>
  
    </>
  )
  }

export default App
