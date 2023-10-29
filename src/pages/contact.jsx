/* eslint-disable no-unused-vars */
import React from 'react'

const contact = () => {
  return <>
   <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className=" text">Llegar a nosotros</h1>
            <p className=' text fs-3'>Estamos a solo un paso de ti</p>
        </div>
      </div>
    </div>
  </section>
  <div className="contact-wrapper-details p-5">
    <div className="container-xxl">
      <div className="row text-center align-items-center">
        <div className="col-lg-6 col-md-12 p-3">
          <div className="map card m-auto embed-responsive embed-responsive-16by9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28387.360260015066!2d-55.00007581610695!3d-27.20595939427839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8459730a93049%3A0xb658651352d9c6cc!2sCampo%20Grande%2C%20Misiones%20Province%2C%20Argentina!5e0!3m2!1sen!2ske!4v1698445971484!5m2!1sen!2ske"
             allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Contacta con nosotros</b></h2>
                  <p className='mb-2'><b>Dirección:</b>  Argentina, Misiones, Campo Grande</p>
                  <p className='mb-2'><b>Teléfono:</b>  <a className='footer-tel' href="tel:+5493755650596">Llamame al +54 (9) 3755-650596</a></p>                  
                  <p>¡Conéctate con nosotros! Estamos aquí para ayudarte en todo lo que necesites. Si tienes preguntas, sugerencias o simplemente quieres charlar sobre moda, no dudes en ponerte en contacto. Tu opinión es importante para nosotros, y estamos ansiosos por escucharte.</p>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div className="contact-message p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
        <div className="card p-5">
        <h2 className='text-center mb-4'>Déjanos un mensaje</h2>
        <div className=" d-flex align-items-center justify-content-center">
        <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" />
              </div>
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Ingrese su dirección de correo electrónico</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                   
              </div>
              <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribe tu mensaje</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='col-12 text-center gap-2'>
                <button id='button-link' type="submit">Enviar</button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default contact