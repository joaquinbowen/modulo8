// función que simula una "respuesta del servidor"
function traerDatos() {
  return new Promise(resolve => {
    // simulamos que se demora en responder
    setTimeout(() => {
      resolve({ nombre: "Juan", edad: 20 });
    }, 2000);
  });
}

async function obtenerUsuario() {

  console.log("1. Iniciando petición...");

  try {
    // aquí espera como si fuera una petición real
    const respuesta = await traerDatos();

    console.log("2. Respuesta recibida");

    // ya tenemos los datos
    const usuario = respuesta;

    console.log("3. Datos:", usuario);

  } catch (error) {
    console.log("Error:", error);
  }

  console.log("4. Fin de la función");
}

// ejecutamos
obtenerUsuario();

// esto corre antes porque JS no se queda esperando
console.log("5. Esto sale antes que la respuesta");