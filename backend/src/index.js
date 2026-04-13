const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api Backend Funcionando')

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor escuchando el puerto " + PORT);
})