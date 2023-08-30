import { useState } from 'react';
import React from "react";
import './Footer.css';


const Footer = () => {
  
    const [Send, setSend] = useState(0);
    const sumarsend = () => {
        return setSend(Send+1);
    };
    return(
        <div id="footermsj">
             <form action="https://formspree.io/f/xbjegzjn" method="post">
                <div className="msj">
                    <textarea name="mensaje" id="mensaje" className="mensaje" placeholder="Tu mensaje"></textarea>
                    <button type="submit" className="enviar" onClick={sumarsend}>Enviar</button>
                </div>
            </form>
        </div>
    )
}
export {Footer}