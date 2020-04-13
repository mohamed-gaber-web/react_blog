import React from "react";
import "./index.style.scss";

const Head = () => {

    return(
        <div className="parent__head">
            <div className="img-block">
                <img src="img/art-art-materials-artist-914922-442x442.jpg" alt="" />
            </div>
            <div className="text-block">
                <h3> Unleash your creativity </h3>
                <p> Johannes is a theme carefully designed and developed
                    to get the most out of the new WordPress editor. Unleash the power of
                    blocks - an awesome new way of creating rich content in WordPress!
                </p>
            </div>
        </div>
        
    );
}

export default Head;