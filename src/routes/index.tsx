import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import search from '../pages/search'

const MainRouter: React.FC = () => (<Routes>
  <Route path={'/search'} element={<search/>}>
    <Route path={':searchQuery'} element={<search/>}/>
  </Route>
  <Route path={'/'} element={<Navigate to={'/search'}/>}/>
  <Route path={'*'} element={<h1>404 Not Found</h1>}/>
</Routes>)

export default MainRouter
