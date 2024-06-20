// src/App.js
import React from 'react';
import PrimarySearchAppBar from './components/appbar';
import Hero from './components/hero';
import Category from './components/categories'
import './App.css';

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Hero />
      <Category/>
    </div>
  );
}

export default App;
