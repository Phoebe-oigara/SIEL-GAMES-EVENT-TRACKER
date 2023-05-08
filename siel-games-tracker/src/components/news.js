import React  from "react";
import pic from "./images/sl_022820_28430_12-removebg-preview.png";

function News(){

    return (
        <div class="news-cards">
<div class="card2">
    <div class="card2-img">
      <img src={pic} alt="News image"/>
    </div>
    <div class="card2-content">
      <h3 class="card2-title">The start date </h3>
      <p class="card2-description"> The first game, GSLG01, will see Savio take on Bantu Sports in a 
      Western Conference matchup starting at 10.00AM. </p>
    </div>
  </div>
  
  <div class="card2">
    <div class="card2-img">
    <img src={pic} alt="News image"/>
    </div>
    <div class="card2-content">
      <h3 class="card2-title">Exciting Basketball Games on March 4th in Komarock</h3>
      <p class="card2-description">Basketball fans in Komarock are in for a treat on March 4th, with two exciting games 
      scheduled to take place at the KFC Court. The first game, GSLG01, will see Savio take on Bantu Sports in a 
      Western Conference matchup starting at 10.00AM. </p>
    </div>
  </div>
  
  <div class="card2">
    <div class="card2-img">
    <img src={pic} alt="News image"/>
    </div>
    <div class="card2-content">
      <h3 class="card2-title">Top Performers in the March 4th Basketball Games</h3>
      <p class="card2-description">he March 4th basketball games in Komarock were nothing short of exciting, with four teams battling it out in Western Conference matchups. </p>
    </div>
  </div>
  
  <div class="card2">
    <div class="card2-img">
    <img src={pic} alt="News image"/>
    </div>
    <div class="card2-content">
      <h3 class="card2-title">Komarock Basketball Court Gets an Upgrade</h3>
      <p class="card2-description">Basketball players and fans in Komarock can rejoice, as the KFC Court has recently undergone some major renovations</p>
    </div>
  </div>
  
  <div class="card2">
    <div class="card2-img">
    <img src={pic} alt="News image"/>
    </div>
    <div class="card2-content">
      <h3 class="card2-title">The Importance of Sportsmanship in Basketball</h3>
      <p class="card2-description">Basketball is not only a game of skill, but also a game of sportsmanship. The March 4th basketball games in Komarock were a great example of this</p>
    </div>
  </div>
</div>

   
    )
}
export default News