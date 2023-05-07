import React, {useState , useEffect}from 'react';
import Teams from './team';


function AllTeams() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((r) => r.json())
      .then((data) => {
        // remove duplicates from data
        const filteredData = data.filter(
          (game, index, self) =>
            index === self.findIndex((t) => t.HOME === game.HOME)
        );
        setGames(filteredData);
      });
  }, []);

  return (
    <div className="team">
      {games.map((game) => (
        <Teams  game={game} key={game["HOME."]} />
      ))}
    </div>
  );
}


export default AllTeams;