//docker compose -p dnm up

require('dotenv').config();
const tareaRoutes = require("./routes/tareaRoutes");
const authRoutes = require("./routes/authRoutes");

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:3000' || process.env.CORS_ORIGIN,

}

app.use(express.json());

console.log("clave secreta:", jwtSecret)
console.log("PORT:", port)

app.get('/', (req, res) => {
    res.send('Api Backend Funcionando')

});

app.use("/api", tareaRoutes);
app.use("/api", authRoutes);



app.listen(port, () => {
    console.log("Servidor escuchando el puerto " + port);
})