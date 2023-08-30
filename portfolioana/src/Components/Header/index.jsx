import React from "react";
import './Header.css';
import FotoPerfil from './assets/FotoPerfilchica.jpg'
import Iconopasaporte from './assets/passport.png'

const Header = () => {
    return(
        <div className="perfil">
        <div >
            <h1 className="nombre">Landoni</h1>
            <h1 className="apellido">Ana Laura Inés</h1>  
        </div>
        
        <div className="textoperfil">
            
            <h2 className="ing">INGENIERA INDUSTRIAL, MBA, FULL STACK DEVELOPER</h2>
    
            <div>
                <div className="PASSPORT">
                <img src={Iconopasaporte} alt="Nacionalidad" />
                    <h2 className="DirecContacto">Argentina / Italiana</h2>
                </div>
                <div className="correo">
                    <i className="bi bi-envelope iconoperfil"></i>
                    <h2 className="DirecContacto">analauralandoni@gmail</h2>
                </div>
                <div className="telefono">
                    <i className="bi bi-telephone iconoperfil"></i>
                    <h2 className="DirecContacto">342-4071591</h2>
                </div>   
            </div>


        </div>

       
        
       <img src={FotoPerfil} alt="fotoperfil" className="foto"/>

       
        
        </div>
    )
}
export {Header}