import React from "react";
import './Navbar.css'
import Fotobtn from '../Header/assets/FotoPerfilchica.jpg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="logo">
        
                <img src={Fotobtn} alt="fotouser" className="fotouser"/>
                
                <div className="NombreLink">
                    <h1>Curriculum</h1>
                    <h2>Ana Laura Inés Landoni</h2>
                </div>
            </div>
            <div className="iconosdelinks">
            
        
                <a href="#footermsj"><button className="btnnav1"><i className="bi bi-envelope-fill iconolink"></i></button></a>
                <a href="#skillbutton"><button className="btnnav1"><i className="bi bi-tools iconolink"></i></button></a>
                <a href="https://www.linkedin.com/in/analauralandoni/" className="navlinkmanolike"><button className="btnnav1"><i className="bi bi-linkedin iconolink"></i></button></a>
               
                
            </div>
    
        </div>
    )
}


export { Navbar }