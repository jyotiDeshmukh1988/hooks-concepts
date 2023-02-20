import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import About from './About'
import Nav from './Nav'
import Index from './Index'

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
    </BrowserRouter>
  )
}

export default Home