import React, { useState } from "react";
import "./responsive.style.scss";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [open, setOpen] = useState(true);

    const hanldeOpenMenu = () => {
        setOpen(!open);
    }

    const hanldeCloseMenu = () => {
        setOpen(!open);
    }
    
    return(
        <div className="parent__header">
           <div className="logo">
            <h1> Blog<b>.</b> </h1>
           </div> 

           <div className="menu">
               <ul className="nav">
                   <li> <NavLink to="/" > Home </NavLink> </li>
                   <li> <NavLink to="/features" > Features </NavLink> </li>
                   <li> <NavLink to="/about" > About Us </NavLink> </li>
                    <li> <NavLink to="/addpost" > Add Post </NavLink> </li>
                   <li> <NavLink to="/contact" > Contact Us </NavLink> </li>
               </ul>
           </div>

           <div className="open" onClick={hanldeOpenMenu}>
               <img src="img/open.png" alt="open_nav" className="open_btn"  />
           </div>

           <div className="top_social">
               Social
           </div>

           <div className={open === true ? "menu_mobile hide" : "menu_mobile"}>
               <ul className="nav">
                   <button className="close" onClick={hanldeCloseMenu}> 
                        <img src="img/close.png" alt="open_nav" className="close_btn"  /> 
                    </button>
                   <li> <NavLink to="/" > Home </NavLink> </li>
                   <li> <NavLink to="/features" > Features </NavLink> </li>
                   <li> <NavLink to="/about" > About Us </NavLink> </li>
                   <li> <NavLink to="/contact" > Contact Us </NavLink> </li>
               </ul>
           </div>

        </div>

        
    );
}

export default Header;