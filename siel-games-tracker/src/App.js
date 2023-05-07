import React from 'react';
import GameList from './components/GameList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AllTeams from './components/Allteams';


function App() {

  return (
    <div className="app">
      <div className="sidebar">
      <Navbar   />
      </div>
     <div className="content">
      <SearchBar />
      <GameList />
      <AllTeams />
     </div>
     
    </div>
  );
}

export default App;