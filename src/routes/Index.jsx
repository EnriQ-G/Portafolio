import React, { Route, Routes } from 'react'
import Home from '../pages/Home'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

    </Routes>
  )
}

export default RoutesIndex
