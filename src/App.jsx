import React from 'react'
import HomePage from './Pages/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SuccessPage from './Pages/SuccessPage'
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/success' element={<SuccessPage/>}/>
   </Routes>
   
   </BrowserRouter>
   
      
    
    </>
  )
}

export default App