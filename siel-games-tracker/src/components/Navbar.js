import React from "react";
import { NavLink } from "react-router-dom";
import pic from "./images/sl_022820_28430_12-removebg-preview.png";

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
      All Teams
    </NavLink>
        </div>
    )
}
export default Navbar;