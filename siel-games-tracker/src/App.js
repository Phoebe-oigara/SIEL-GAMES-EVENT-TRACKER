import React from 'react';
import GameList from './components/GameList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AllTeams from './components/Allteams';
import { Routes,Route } from 'react-router-dom';
import News from './components/news';


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
      <Route  exact path="/news" element={<News /> } />
      </Routes>
      
     </div>
     
    </div>
  );
}

export default App;