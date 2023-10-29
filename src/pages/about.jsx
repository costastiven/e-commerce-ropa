/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import a6 from '../assets/images/about/a6.jpg'
import video from '../assets/images/about/1.mp4'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'

import mobileImage from '../assets/images/mobileimage.jpg'
const about = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Conócenos</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Quienes somos nosotros</b></h1>
          <p className="card-text mb-3">Descubre una amplia selección de ropa que abarca desde lo casual <br /> hasta lo elegante. Estamos dedicados a 
          ofrecerte lo último en moda y <br /> los clásicos que perduran en el tiempo. <br /> <br /> Compra con confianza en nuestra tienda en línea con 
          opciones de pago <br /> seguras y envíos rápidos. Tu estilo personal encuentra su hogar aquí.</p>
        </div>
      </div>
    </section>

    <section className="about-app p-5">
      <h2 className='fs-1 text-center mb-4' >Descarga nuestra <Link>App</Link></h2>
      <div className="col-12 p-5 col-md-8 mx-auto">
        {isMobile ? (
          // Render a mobile-friendly video or image here
          <img src={mobileImage} alt="Mobile Image" className='w-100' />
        ) : (
          // Render the video for larger screens
          <video loop muted autoPlay src={video} className='w-100'></video>
        )}
      </div>
    </section>

    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>Lo que dicen nuestros clientes ...</h1>
            <p className='mb-4'>Nuestros clientes nunca pierden la oportunidad de brindar comentarios</p>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">¡Amo la tienda de ropa! Siempre encuentro las últimas tendencias a precios increíbles. ¡Mi armario está lleno de sus prendas de moda!</p>
                    <p className="card-text"><small className="text-body-secondary">Última actualización ahora</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">¡Me encanta comprar aquí! Siempre tienen ropa elegante y cómoda. Las devoluciones son fáciles y el proceso de compra es rápido.</p>
                    <p className="card-text"><small className="text-body-secondary">Última actualización hace 1 minuto</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tristian Ann</h5>
                    <p className="card-text mb-3">La calidad de la ropa de esta tienda es asombrosa. Mis compras siempre llegan a tiempo, y la atención al cliente es excepcional.</p>
                    <p className="card-text"><small className="text-body-secondary">Última actualización hace 2 minutos</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Phillip Omosh</h5>
                    <p className="card-text mb-3">Recomendaría esta tienda de ropa a cualquiera. Los precios son justos, y su ropa es perfecta para todas las ocasiones.</p>
                    <p className="card-text"><small className="text-body-secondary">Última actualización hace 3 minutos</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">No puedo dejar de elogiar a esta tienda. Su selección es inmejorable, y sus promociones son geniales. ¡Compro aquí de forma regular!</p>
                    <p className="card-text"><small className="text-body-secondary">Última actualización hace 4 minutos</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Me sorprende la variedad de estilos que ofrece esta tienda. Encuentro ropa para el trabajo, salidas informales y noches elegantes. ¡Una maravilla!</p>
                    <p className="card-text"><small className="text-body-secondary">Última actualización hace 5 minutos</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
                <img src={orders} alt="" className='img-fluid' />
                <p className="card-text mb-2">Órd. Rápidas</p>
              </div>
              <div>
                <img src={orders1} alt="" className='img-fluid' />
                <p className="card-text mb-2">Envío rápido</p>

              </div>
              <div>
                <img src={orders2} alt="" className='img-fluid' />
                <p className="card-text mb-2">Altos ahorros</p>
              </div>
              <div>
                <img src={orders3} alt="" className='img-fluid' />
                <p className="card-text">Soporte 24/7</p>
              </div>
              <div>
                <img src={orders4} alt="" className='img-fluid' />
                <p className="card-text">Pedidos online</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default about