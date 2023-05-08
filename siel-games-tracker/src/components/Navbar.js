import React from "react";
import { NavLink } from "react-router-dom";
import pic from "./images/unnamed (1).png";


function Navbar(){
    return (
        <div >
  <img src={pic} alt="logo" className="img" />

     < NavLink 
      to ="/"
      className={"nav"}
     >
      Games
    </NavLink>
    < NavLink 
     className={"nav"}
      to ="/teams"
     >
     Teams
    </NavLink>
    < NavLink 
     className={"nav"}
      to ="/news"
     >
      News
    </NavLink>
    <p className="credits">@ 2023 SIEL</p>
        </div>
    )
}
export default Navbar;