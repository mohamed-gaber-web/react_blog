import React from "react";
import Posts from "../../Components/Posts/index.component";
import Head from "../../Components/HeadComponent/index.component";

export const HomePage = () => {
    return(
        <div className="container">
            <Head />
            <Posts />
        </div>
        
    );
}