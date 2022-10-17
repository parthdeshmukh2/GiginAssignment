import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Forms from './Forms'
import HomePage from './HomePage'

const MainRoutes = () => {
  return (
  <Routes>
    <Route  path='/' element={<HomePage/>}  />
    <Route  path='/add' element={<Forms/>}  />
  </Routes>
  )
}

export default MainRoutes
