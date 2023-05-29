const orders_controller = require('../controllers/orders_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')

function add_order_route(app){
    app.post('/order/new',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    orders_controller.add_order)
}


function get_orders_userId_route(app){
    app.get('/orders/:userId',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    orders_controller.get_orders_userId)
}

function get_orders_route(app){
    app.get('/allOrders',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    orders_controller.get_orders)
}

module.exports = {
    add_order_route,
    get_orders_userId_route,
    get_orders_route
}