import React, { useState } from "react";

import "./index.style.scss";
import { NavLink } from "react-router-dom";


const Header = () => {

    const [openNav, setOpenNav] = useState(false);
    const hanldeOpenNav = () => setOpenNav(!openNav);

    return (
        <div>
        <div className="parent__header">
           <div className="logo">
            <h1> <NavLink to="/" > Blog<b>.</b> </NavLink> </h1>
           </div> 

           <div className="nav_bar">
                <button onClick={hanldeOpenNav}>
                    <img src="img/open.png" alt="open_nav" className="open" />
                </button>
      
                <div className={openNav === false ? "social_container" : "social_container showSocail"}>
                    <ul>
                        <li onClick={hanldeOpenNav}> <NavLink to="/" > Home </NavLink> </li>
                        <li onClick={hanldeOpenNav}> <NavLink to="/features" > Features </NavLink> </li>
                        <li onClick={hanldeOpenNav}> <NavLink to="/about" > About Us </NavLink> </li>
                        <li onClick={hanldeOpenNav}> <NavLink to="/admin/addpost" > Add Post </NavLink> </li>
                        <li onClick={hanldeOpenNav}> <NavLink to="/contact" > Contact Us </NavLink> </li>
                    </ul>
                </div>
           </div>

        </div>
       
            
        </div>
        
    );
}

export default Header;