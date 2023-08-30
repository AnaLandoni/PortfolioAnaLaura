import React from "react";
import './section4.css';


const Section4 = () => {
    return(
        <div>
        {/* <div className="sec4">
            <h1 className="titulo4">Experiencia</h1>
            <hr className="linea4"/>
        </div> */}
        <div className="sec2">
            <h1 className="titulo2">Estudios</h1>
            <hr className="linea2"/>
        </div>
        <div className="experiencias">
            <div className="experiencia">
                <div className="Trabajo">
                    <div className="work">
                        <h1>Coordinadora Logistica</h1>
                        <a href="https://www.linkedin.com/company/musimundo/">MUSIMUNDO</a>
                    </div>
                    <p>Contratar y coordinar los servicios logísticos en base a la disponibilidad y requerimientos. Planificar y llevar a cabo el cronograma de reposición que abastece a todo el país, así como el seguimiento del envío de productos a los clientes (última milla). Realizar el presupuesto logístico y supervisar los equipos de trabajo.</p>
                    <h3>Febrero 2022 a Agosto 2023</h3>
                </div>
                <div className="Trabajo">
                    <div className="work">
                        <h1>Analista de Supply Chain</h1>
                        <a href="https://www.savencia-fd.com.ar/">SAVENCIA S.A.</a>
                    </div>
                    <p>Elaboración del programa de producción semanal; desarrollo y seguimiento de indicadores para el control de gestión; revisión de stock productos; generación de análisis específicos para la propuesta de mejoras.</p>
                    <h3>Febrero 2020 a Enero 2022</h3>
                </div>
            </div>    
            <div className="experiencia">   
                <div className="Trabajo">
                    <div className="work">
                        <h1>Analista de compras productivas</h1>
                        <a href="https://www.linkedin.com/company/companiacerveceriasunidas/">CCU S.A.</a>
                    </div>
                    <p>Control diario del stock de insumos; recepción de requerimientos de compra; negociación con proveedores; análisis de cotizaciones; emisión y seguimiento de órdenes de compra; elaboración de reportes de gestión y actualización constante de la base de datos.</p>
                    <h3>Junio 2019 a Noviembre 2019</h3>
                </div>
                <div className="Trabajo">
                    <div className="work">
                        <h1>Supervisora de Planificación</h1>
                        <a href="https://www.linkedin.com/company/companiacerveceriasunidas/">CCU S.A.</a>
                    </div>
                    <p>Elaboración del programa de producción semanal; seguimiento de inventarios; actualización de la base de datos de control mensual de gestión; generación de reportes y análisis; participación de proyectos.</p>
                    <h3>Marzo 2018 a Mayo 2019</h3>
                </div>
            </div>   
            <div className="experiencia"> 
                <div className="Trabajo">
                    <div className="work">
                        <h1>Pasante de Fabrica</h1>
                        <a href="https://www.linkedin.com/company/gani-s.a./">CCU S.A.</a>
                    </div>
                    <p>Elaboración de un proyecto de inversión en el sector de producción de espuma de poliuretano. Objetivos: definir un sistema de transporte para mecanizar el transporte de bloques de poliuretano y rediseñar el layout del sector de corte de espuma.</p> 
                    <h3>Marzo 2017 a Junio 2017</h3>
                </div>
                <div className="Trabajo">
                    <div className="work">
                        <h1>Pasante de Investigación</h1>
                        <a href="https://www.linkedin.com/company/conicet/">INTEC</a>
                    </div>
                    <p>Investigación de modelos de configuración de cadenas de suministro sustentables. Herramienta utilizada: IBM ILOG CPLEX Optimization Studio.</p>
                    <h3>Agosto 2016 a Agosto 2017</h3>
                </div>
            </div>
        </div>
        </div>
    )
}
export {Section4}