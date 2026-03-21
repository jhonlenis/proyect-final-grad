const express = require('express');
const cors = require('cors'); // Importante para conectar con el puerto 3000
const app = express();

// --- CONFIGURACIÓN DE MIDDLEWARES ---
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Permite que el servidor entienda los datos JSON que envías

// --- RUTAS ---

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de SENA a un Clic funcionando melamente');
});

// Ruta de Login (Cambiamos a POST para seguridad)
app.post('/api/login', (req, res) => {
  // Aquí recibimos los datos del formulario del frontend
  const { tipo_documento, numero_documento, correo, password } = req.body;

  console.log(`Intento de login para: ${correo}`);

  // Validación de prueba (Esto luego lo conectarás a tu DB)
  if (numero_documento === "1234567890" && password === "1234") {
    return res.status(200).json({
      success: true,
      message: '¡Bienvenido al portal!',
      user: {
        nombre: "Andres Garcia",
        rol: "Aprendiz"
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Documento o contraseña incorrectos'
    });
  }
});

// --- ARRANCAR SERVIDOR ---
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`✅ CORS habilitado para el frontend`);
});