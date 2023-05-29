const products_controller = require('../controllers/products_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')

function get_products_route(app){
    app.get('/products', products_controller.get_products)
}

function get_product_id_route(app){
    app.get('/product/:id',products_controller.get_product_id)
}

function get_products_categoryTD_route(app){
    app.get('/products/:categoryId',products_controller.get_products_categoryTD)
}

function post_product_route(app){
    app.post('/product/new',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    products_controller.post_product)
}

function delete_product_route(app){
    app.delete('/product/delete/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    products_controller.delete_product_id)
}

function put_product_id(app){
    app.put('/product/update/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    products_controller.put_product_id)
}

function get_best_selling_products_route(app){
    app.get('/newProducts',products_controller.get_newProducts)
}

function get_newProducts_route(app){
    app.get('/bestSellingProducts',products_controller.get_best_selling_products)
}

module.exports = {
    get_products_route,
    get_product_id_route,
    get_products_categoryTD_route,
    post_product_route,
    delete_product_route,
    put_product_id,
    get_newProducts_route,
    get_best_selling_products_route
}

