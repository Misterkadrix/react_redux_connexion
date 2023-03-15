import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/store'
import { Bienvenue } from './components/bienvenue/bienvenue'
import { Connexion } from './components/connexion/Connexion'

import { Route, Router,Routes, } from 'react-router-dom'


export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
      <Route path = "/" element={<Connexion/>} />
      <Route path = "/bienvenue" element={<Bienvenue/>} />
      </Routes>
    </Provider>
  )
}
