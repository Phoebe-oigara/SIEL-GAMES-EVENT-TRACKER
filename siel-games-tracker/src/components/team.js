import React from "react";

function Teams(team){ 
     const {game} = team;

return (
  <div>
 <h2>{game['HOME']}</h2>
  </div>
);
}

export default Teams