import React from "react";
import { Link } from "react-router-dom";

 function NavTabs(){
return(
    <ul className="nav nav-tabs">
       <li className="nav-item px-4"><Link to="/Home">Home</Link></li>

      
        <li className="nav-item px-4">
            <Link to="/AboutMe">About me</Link>
        </li>

        <li className="nav-item px-4">
            <Link to="/Contact">contacts</Link>
        </li>

        <li className="nav-item px-4">
             <Link to="/Projects">Projects</Link>
        </li>
    </ul>
);

}

export default NavTabs;