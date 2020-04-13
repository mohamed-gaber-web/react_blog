import React from "react";
import "./index.style.scss";

import { NavLink } from 'react-router-dom';


const Post = props => { 
    return(
        <div className="col-lg-4 col-md-6" key={props.id}>
            <img src={props.image} alt="" />
            <h3> <NavLink to=""> {props.title} </NavLink> </h3>
            <div className="text-info">
                <ul className="list-unstyled list-text">
                    <li> By: <b>Joanna Wellick</b> </li>
                    <li> {props.date} </li>
                    <li> 1.5K views </li>
                </ul>
            </div> 
            <p> {props.content} </p>
        </div>
        )
}

export default Post;