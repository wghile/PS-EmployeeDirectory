import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'

function App() {
  
  // const profileUpdate = (e) => {
  //   const profile = {
  //     name: e.current.value,
  //     role: e.current.value,
  //     img: e.current.value
  //   }
  // }

  return (
   <div className='App'>
    <Homepage />
    <EmployeePage />
   </div>
  )
}

export default App
