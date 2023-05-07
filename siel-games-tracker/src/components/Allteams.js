import React, {useState , useEffect}from 'react';
import Teams from './team';

function AllTeams  () {
  const [games, setGames] = useState([]);
  

  useEffect(() => {
   fetch ("http://localhost:8000/games")
   .then ((r) => r.json())
   .then (data => {setGames(data)} )
  }, []);


  return (
    <div className="container">

      {games.map(game => (
        <Teams game={game} key={game['HOME.']} />
      ))}
     
    </div>
  );
}

export default AllTeams;