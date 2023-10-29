/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password == '') {
      setError('¡Por favor ingrese los detalles correctos!');
    } else {
      // TODO: Enviar solicitud de registro al servidor
      setError('Inicio de sesión exitoso');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-center">LOGIN</h2>
                  <p className="text-center mb-4">¡Bienvenido de nuevo!</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                      Ingrese su dirección de correo electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="ingrese el correo electrónico aquí ..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label mb-3">
                      Ingresa tu contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Ingrese la contraseña aquí..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                    <div className="mb-3">
                      <Link to="/forgotpasword" className="form-link">
                      ¿Has olvidado tu contraseña?
                      </Link>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className='m-0'>¿No tienes una cuenta?</p>
                      <Link to="/signup" className="form-link">
                        Registrarse
                      </Link>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Login</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;