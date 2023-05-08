import React, { useState, useEffect, Fragment } from "react";
import GameCard from "./SingleGame";
import SearchBar from "./SearchBar";
import { FaCalendarCheck, FaWeight } from "react-icons/fa";

function GameList() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((r) => r.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  const filteredGames = games.filter((item) => {
    return search.toLowerCase() === "" ? item : item.HOME && item.HOME.toLowerCase().includes(search)

  });

  const gameCards = filteredGames.length === 0 ? (
    <h1 className="error" >Sorry "{search}" is not a team in this Tournament"</h1>

  ) : (
  
  filteredGames.map((game) => {
    return (
      <div className="card">
        <div className="card-left">
          <p style={{ color: "#C0C0C0" }}>{game["GAME NO."]}</p>
          <div className="opn">
          <h2>{game["HOME"]}</h2>
          <p>Vs</p>
          <h2>{game["AWAY"]}</h2>
          </div>
          <p className="date" style={{ }} ><FaCalendarCheck />  {game["DATE"]} {game["TIME"]}</p>
        </div>
        <div className="card-right">
          
          <h2 className="venue">VENUE </h2>
          <p>Court: {game["COURT"]}</p>
          <p>Location: {game["LOCATION"]}</p>
        </div>
      </div>
    );
  })
  )

  function handleInput(e) {
    setSearch(e.target.value);
  }

  return (
    
<Fragment>
<SearchBar handleInput={handleInput} />
    <div className="container">
      {gameCards}
    </div>
    </Fragment>
  );
}

export default GameList;
