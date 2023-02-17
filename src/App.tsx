import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CharacterDetails from './pages/CharacterDetails'
import Characters from './pages/Characters'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={isAuthenticated? <Characters/>: <Home/>}/>
        <Route path="/characters/:slug" element={<CharacterDetails/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
