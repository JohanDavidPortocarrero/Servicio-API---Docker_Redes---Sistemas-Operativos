const {
    Router
} = require('express');
const router = Router();

router.get('/', (req, res) => res.send("<h1>No se encontro la ruta</h1>"));

const {
    getUsuarios,
    getUsuario,
    getUsuarioAutenticado,
    createUsuario,
    deleteUsuario,
    updateUsuario
} = require('../controllers/UsuarioController');

router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.get('/usuarios/:email/:pass', getUsuarioAutenticado);
router.post('/usuarios', createUsuario);
router.delete('/usuarios/:id', deleteUsuario);
router.put('/usuarios/:id', updateUsuario);

const {
    getProductos,
    getProducto,
    createProductos,
    deleteProductos,
    updateProductos
} = require('../controllers/ProductosController');

router.get('/productos', getProductos);
router.get('/productos/:id', getProducto);
router.post('/productos', createProductos);
router.delete('/productos/:id', deleteProductos);
router.put('/productos/:id', updateProductos);

const {
    getWishLists,
    getWishListscomple,
    getWishList,
    createWishList,
    deleteWishList,
    updateWishList
} = require('../controllers/WishListController');

router.get('/wishlist', getWishLists);
router.get('/wishlistcomple/:id', getWishListscomple);
router.get('/wishlist/:id', getWishList);
router.post('/wishlist', createWishList);
router.delete('/wishlist/:id', deleteWishList);
router.put('/wishlist/:id', updateWishList);

const {
    getWishListProducts,
    getWishListProduct,
    createWishListProduct,
    deleteWishListProduct,
    updateWishListProduct
} = require('../controllers/WishListProductController');

router.get('/wishlistproduct', getWishListProducts);
router.get('/wishlistproduct/:id', getWishListProduct);
router.post('/wishlistproduct', createWishListProduct);
router.delete('/wishlistproduct/:id', deleteWishListProduct);
router.put('/wishlistproduct/:id', updateWishListProduct);

module.exports = router;