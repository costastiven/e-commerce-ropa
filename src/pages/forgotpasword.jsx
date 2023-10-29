/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Ocurrió un error. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-4">
                  <h2 className="text-center">Has olvidado tu contraseña</h2>
                  <p className="text-center mb-4">
                    Ingrese su dirección de correo electrónico para recibir una confirmación de reinicio
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mb-3"
                      >
                        Ingrese su dirección de correo electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="ingrese el correo electrónico aquí ..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Enviar</button>
                    </div>
                  </form>
                  {message && <p className="text-center mt-4">{message}</p>}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;