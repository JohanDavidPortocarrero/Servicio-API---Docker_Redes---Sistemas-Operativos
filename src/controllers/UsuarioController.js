const Usuario = require('../models/Usuario');

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const getUsuario = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const usuarios = await Usuario.findByPk(id);
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const getUsuarioAutenticado = async (req, res) => {
    try {
        const {
            email,
            pass
        } = req.params;
        const usuarios = await Usuario.findAll({
            where:{
                email: email,
                password: pass
            }
        })
        res.json(usuarios);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const createUsuario = async (req, res) => {

    try {
        const {
            nombre,
            username,
            email,
            password,
            telefono
        } = req.body;

        const usuarios = await Usuario.create({
            nombre,
            username,
            email,
            password,
            telefono
        })

        res.json({
            mjs: "Usuario creado",
            usuario: usuarios
        })
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }

}

const deleteUsuario = async (req, res) => {
    try {

        const {
            id
        } = req.params;

        await Usuario.destroy({
            where: {
                id: id
            }
        })

        res.json({
            message: "Usuario eliminado con exito"
        })

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const updateUsuario = async (req, res) => {
    try {

        const {
            id
        } = req.params;
        const {
            nombre,
            username,
            email,
            password,
            telefono
        } = req.body;

        const usuarios = await Usuario.findByPk(id);

        usuarios.update({
            nombre,
            username,
            email,
            password,
            telefono
        })

        res.json({
            mjs: "Usuario actualizada",
            usuario: usuarios
        })

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }

}

module.exports = {
    getUsuarios,
    getUsuario,
    getUsuarioAutenticado,
    createUsuario,
    deleteUsuario,
    updateUsuario
}