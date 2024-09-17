import React from "react";

import "../componentsCSS/Footer.css"
import DevImage from "../assets/Ft-PfGoogle1.png"

const Footer = () => {
return (
    <div className="footer-box">
    <div className="footer-text">
        <h2> Desenvolvido por <strong>wittalloM</strong></h2>
        <h2>GitHub - <strong>github.com/wittalloM</strong></h2>
    </div>
    <div className="imgDev-box">
        <img src={DevImage}></img>
    </div>
    </div>
)
}

export default Footer