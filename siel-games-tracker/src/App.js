import React from 'react';
import GameList from './components/GameList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';


function App() {

  return (
    <div className="app">
      <div className="sidebar">
      <Navbar   />
      </div>
     <div className="content">
      <SearchBar />
      <GameList />
     </div>
     
    </div>
  );
}

export default App;