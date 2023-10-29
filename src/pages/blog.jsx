/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/b1.jpg'
import b6 from '../assets/images/blog/b6.jpg'
import b2 from '../assets/images/blog/b2.jpg'
import b3 from '../assets/images/blog/b3.jpg'
import b4 from '../assets/images/blog/b4.jpg'
import b5 from '../assets/images/blog/b5.jpg'
import b7 from '../assets/images/blog/b7.jpg'

const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">#Leer más</h1>
            <p className='text-white fs-3'>Conozca lo que dicen nuestros clientes de confianza...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          <h1 className='mb-3'>Explora más en nuestra biblioteca</h1>
          <p className='mb-4'>Por qué tenemos trajes de moda en todas partes</p>
        </div>
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Isabella Martínez</h5>
                <p className="card-text">¡La Tienda de Ropa es mi lugar favorito para comprar en línea! Siempre tienen las últimas tendencias y la calidad es insuperable. Recomiendo ampliamente.</p>
                <p className="card-text"><small className="text-body-secondary">Última actualización ahora</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Sophia Rodríguez</h5>
                      <p className="card-text">Me encanta la variedad de opciones que ofrece esta tienda. Desde ropa casual hasta vestidos elegantes, siempre encuentro lo que necesito. Además, el envío es rápido y seguro.</p>
                      <p className="card-text"><small className="text-body-secondary">Última actualización hace 1 minuto</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Olivia Pérez</h5>
                      <p className="card-text">La atención al cliente de esta tienda es excepcional. Respondieron a todas mis preguntas de manera rápida y amable. La experiencia de compra fue perfecta.</p>
                      <p className="card-text"><small className="text-body-secondary">Última actualización hace 2 minutos</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Ava Sánchez</h5>
                      <p className="card-text"> La ropa de esta tienda es perfecta para expresar mi estilo. Siempre me siento segura de que lo que compro se verá genial. Una elección confiable para cualquier ocasión.</p>
                      <p className="card-text"><small className="text-body-secondary">Última actualización hace 3 minutos</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Sophia Rodríguez</h5>
                      <p className="card-text">Tienen una excelente relación calidad-precio. Sus promociones y descuentos son imperdibles. Compro aquí regularmente y nunca me decepcionan.</p>
                      <p className="card-text"><small className="text-body-secondary">Última actualización hace 4 minutos</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default blog