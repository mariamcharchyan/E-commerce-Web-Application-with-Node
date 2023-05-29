const orderItems_controller = require('../controllers/orderItems_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')

function get_orderItems_orderId_route(app){
    app.get('/orderItems/:orderId',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    orderItems_controller.get_orderItems_orderId)
}

module.exports = {
    get_orderItems_orderId_route
}