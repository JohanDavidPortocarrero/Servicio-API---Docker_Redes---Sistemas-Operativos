const WishList = require('../models/Wish_List');
const WishListProduct = require('../models/Wish_List_product');

const getWishLists = async (req, res) => {
    try {
        const wish = await WishList.findAll();
        res.json(wish);
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const getWishListscomple = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const wish = await WishList.findByPk(id);
        const wish_product = await WishListProduct.findAll({
            where:{
                id_wish_list: id
            }
        });

        res.json({
            wish_lidt: wish,
            list: wish_product
        });

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const getWishList = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const wish = await WishList.findByPk(id);
        res.json(wish);
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const createWishList = async (req, res) => {
    try {
        const {
            id_user,
            total_productos,
            pago_total,
            estado
        } = req.body;

        const wish = await WishList.create({
            id_user,
            total_productos,
            pago_total,
            estado
        })

        res.json({
            mjs: "La lista de deseo hacido creada con exito",
            producto: wish
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const deleteWishList = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        await WishList.destroy({
            where: {
                id: id
            }
        })

        res.json({
            message: "Lista eliminado con exito"
        })
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error",
            data: {},
            error: error
        })
    }
}

const updateWishList = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const {
            id_user,
            total_productos,
            pago_total,
            estado
        } = req.body;

        const wish = await WishList.findByPk(id);

        wish.update({
            id_user,
            total_productos,
            pago_total,
            estado
        })

        res.json({
            mjs: "Lista actualizada",
            lista: wish
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
    getWishLists,
    getWishListscomple,
    getWishList,
    createWishList,
    deleteWishList,
    updateWishList
}