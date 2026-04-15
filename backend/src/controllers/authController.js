const authServices = require("../services/authServices");

async function registrarUsuario(req, res) {
    try {
        const usuario = await authServices.registrarUsuario(req.body);
        res.status(201).json({ message: "Usuario registrado correctamente", data: usuario });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

async function loginUsuario(req, res) {
    try {
        const token = await authServices.loginUsuario(req.body);
        res.status(200).json({ message: "Usuario loggeado correctamente", data: token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    loginUsuario,
    registrarUsuario

}