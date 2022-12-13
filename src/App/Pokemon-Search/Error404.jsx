import React from "react";

const Error404 = () => {
    return(
        <div className="error-404-container">
            <div className="image-404-container">
                <img className="image-404" src="./Imagenes/pokeball404.png" alt="" />
            </div>
            <span className="oh-no">Oh no!</span>
            <span className="error-message">You didn't catch that pokemon yet!</span>
        </div>
    )
}

export default Error404