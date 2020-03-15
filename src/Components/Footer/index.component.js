import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="menu-footer">
                <h3> Quick Link </h3>
                <ul className="">
                    <li> <NavLink to="/" > News </NavLink> </li>
                    <li> <NavLink to="/features" > Agency </NavLink> </li>
                    <li> <NavLink to="/about" > Store </NavLink> </li>
                    <li> <NavLink to="/contact" > grid </NavLink> </li>
                </ul>
            </div>

            <div className="menu-footer">
                <h3> Information </h3>
                <ul className="">
                    <li> <NavLink to="/" > Home </NavLink> </li>
                    <li> <NavLink to="/features" > Features </NavLink> </li>
                    <li> <NavLink to="/about" > About Us </NavLink> </li>
                    <li> <NavLink to="/contact" > Contact Us </NavLink> </li>
                </ul>
            </div>

            <div className="contact_info">
                <h3> Contact Info </h3>
                <ul className="contact">
                    <li> Put Addres Alright To This  </li>
                    <li> contact@info.com </li>
                </ul>
            </div>

            <div className="subscribe">
                <h3> Subscribe to Our Mailing List </h3>
            </div>

        </div>
    );
}

export default Footer;
