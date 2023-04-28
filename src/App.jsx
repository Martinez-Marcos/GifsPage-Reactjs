import React, { useState, useEffect } from 'react'
import { Route } from "wouter";

import Home from './pages/Home';
import ListOfGifs from './components/SearchResults'

import './App.css'
import "./components/SearchResults/list.css"
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <section className='app-content'>

        <Header 
          className="compHeader"
        />

        <Route 
          component={Home} 
          path="/"
        />
         
        <Route 
          component={ListOfGifs} 
          path="/search/:keyword"
        />

      </section>
    
    </div>
  )
}

export default App
