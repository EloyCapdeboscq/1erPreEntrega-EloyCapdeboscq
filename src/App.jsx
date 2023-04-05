import { useState } from 'react'

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListCointainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

 return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting={"ItemListContainer"}/>
    </div>
  )
}

export default App