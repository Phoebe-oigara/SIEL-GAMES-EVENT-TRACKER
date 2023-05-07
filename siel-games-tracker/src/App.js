import React from 'react';
import GameList from './components/GameList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AllTeams from './components/Allteams';
import { Routes,Route } from 'react-router-dom';


function App() {

  return (
    <div className="app">

      <div className="sidebar">
      <Navbar   />
      

      </div>

     <div className="content">
     
      <Routes>
      <Route  exact path="/" element={ <GameList />} />
      <Route  exact path="/teams" element={ <AllTeams className="team" />} />
      </Routes>
      
     </div>
     
    </div>
  );
}

export default App;