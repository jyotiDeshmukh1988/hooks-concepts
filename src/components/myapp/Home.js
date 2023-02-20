import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import About from './About'
import Nav from './Nav'
import Index from './Index'
import Login from './login'

const Home = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Route path="/index">
        <Index/>
    </Route>
    <Route path="/about">
        <About/>
    </Route>
    <Route path="/login">
        <Login/>
    </Route>
    </BrowserRouter>
  )
}

export default Home