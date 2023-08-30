import React from "react";
import './section1.css';
import { NavLink } from "react-router-dom";


const Section1 = () => {
    return(
        <div className="url">
            <h1 className="direcprincipal">@ani_landoni</h1>
            <div>
                <div className="direcciones">
                    <i className="bi bi-linkedin iconodirec"></i>
                    <a href="https://www.linkedin.com/in/analauralandoni" className="direc">www.linkedin.com/in/analauralandoni</a>
                </div>
                <div className="direcciones">
                    <i className="bi bi-github iconodirec"></i>
                    <a href="https://www.github.com/AnaLandoni" className="direc">www.github.com/AnaLandoni</a>
                </div>
                <div className="direcciones">
                    <i className="bi bi-instagram iconodirec"></i>
                    <a href="https://www.instagram.com/ani_landoni" className="direc">www.instagram.com/ani_landoni</a>
                </div>
            </div> 
           
        </div>
    )
}


export { Section1 }