// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Conectarse a MongoDB
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir esquema de usuario
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// eslint-disable-next-line reaccionar-refresh/solo-exportar-componentes
const User = mongoose.model('User', userSchema);

// Analizar los cuerpos de solicitud JSON
app.use(bodyParser.json());

// Manejar solicitudes de registro
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario ya existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Crear nuevo usuario
  const newUser = new User({ email, password });
  await newUser.save();

  res.json({ message: 'Signup successful' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});