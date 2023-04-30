import React, { useState, useEffect } from 'react'
import { Route } from "wouter";

import Home from './pages/Home';
import SearchResults from './pages/SearchResults'

import './App.css'
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <section className='app-content'>

        <Header 
          className="compHeader"
        />

        
        <Route path="/"> <Home/> </Route>
         
        <Route path="/search/:keyword" component={SearchResults}> </Route>

      </section>
    
    </div>
  )
}

export default App
