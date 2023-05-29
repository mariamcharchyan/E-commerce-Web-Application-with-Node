const userShippingAddresses_controller = require('../controllers/userShippingAddresses_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')

function add_userShippingAddress_route(app){
    app.post('/userShippingAddress/new',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    userShippingAddresses_controller.add_userShippingAddress)
}

function delete_userShippingAddress_id_route(app){
    app.delete('/userShippingAddress/delete/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    userShippingAddresses_controller.delete_userShippingAddress_id)
}

function get_userShippingAddresses_userId_route(app){
    app.get('/userShippingAddresses/:userId', 
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    userShippingAddresses_controller.get_userShippingAddresses_userId)
}


module.exports = {
    add_userShippingAddress_route,
    delete_userShippingAddress_id_route,
    get_userShippingAddresses_userId_route
}