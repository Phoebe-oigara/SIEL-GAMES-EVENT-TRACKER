import React, { useState, useEffect, Fragment } from "react";
import GameCard from "./SingleGame";
import SearchBar from "./SearchBar";

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

  const gameCards = filteredGames.map((game) => {
    return (
      <div className="card">
        <div className="card-left">
          <p style={{ color: "#01295C" }}>{game["GAME NO."]}</p>
          <h2>{game["HOME"]}</h2>
          <p>Vs</p>
          <h2>{game["AWAY"]}</h2>
        </div>
        <div className="card-right">
          <p>Date: {game["DATE"]}</p>
          <p>Time: {game["TIME"]}</p>
          <p>Court: {game["COURT"]}</p>
          <p>Location: {game["LOCATION"]}</p>
        </div>
      </div>
    );
  });

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
