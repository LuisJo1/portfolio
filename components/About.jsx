import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px]  md:grid grid-cols-3 gap-8 m-4 lg:m-auto">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Quién soy</h2>
          <p className="py-2 text-gray-600">
            Soy un desarrollador especializado en la creación de aplicaciones de
            interfaz de usuario de front-end con capacidad de respuesta móvil.
            Mis habilidades incluyen la conexión de estas aplicaciones con API y
            otras tecnologías de back-end.
          </p>
          <p className="py-2 text-gray-600">
            Mis competencias principales se encuentran en el desarrollo de
            aplicaciones front-end utilizando HTML, CSS, Javascript, React,
            Vuejs y Angular. Sin embargo, estoy en constante aprendizaje y
            adaptación, capaz de dominar nuevas pilas tecnológicas según sea
            necesario.
          </p>
          <p className="py-2 text-gray-600">
            Actualmente, estoy expandiendo mis habilidades para incluir
            tecnologías de back-end, lo que demuestra mi compromiso con el
            aprendizaje continuo. Creo firmemente que ser un gran desarrollador
            no se trata de usar un lenguaje específico, sino de elegir la mejor
            herramienta para el trabajo.
          </p>
          <p className="py-2 text-gray-600">
            En resumen, soy un desarrollador apasionado, adaptable y rápido para
            aprender, siempre buscando la mejor solución para cada tarea.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-800 underline cursor-pointer">
              Mira algunos de mis últimos proyectos.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
