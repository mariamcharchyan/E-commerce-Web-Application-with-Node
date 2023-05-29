const shippingAddresses_controller = require('../controllers/shippingAddresses_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')

function get_shippingAddresses_route(app){
    app.get('/shippingAddresses', shippingAddresses_controller.get_shippingAddresses)
}

function get_shippingAddress_id_route(app){
    app.get('/shippingAddress/:id',shippingAddresses_controller.get_shippingAddress_id)
}

function post_shippingAddress_route(app){
    app.post('/shippingAddress/new',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    shippingAddresses_controller.post_shippingAddress)
}

function delete_shippingAddress_id_route(app){
    app.delete('/shippingAddress/delete/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    shippingAddresses_controller.delete_shippingAddress_id)
}

function put_shippingAddress_id_route(app){
    app.put('/shippingAddress/update/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    shippingAddresses_controller.put_shippingAddress_id)
}

module.exports = {
    get_shippingAddresses_route,
    get_shippingAddress_id_route,
    post_shippingAddress_route,
    delete_shippingAddress_id_route,
    put_shippingAddress_id_route
}
