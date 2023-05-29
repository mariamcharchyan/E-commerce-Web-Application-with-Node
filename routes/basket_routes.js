const basket_controller = require('../controllers/basket_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')



function get_basketItems_userId_route(app){
    app.get('/basketItems/:userId', 
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    basket_controller.get_basketItems_userId)
}



function delete_basketItems_userId_route(app){
    app.delete('/basketItems/delete/:userId',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    basket_controller.delete_basketItems_userId)
}



function delete_basketItem_id_route(app){
    app.delete('/basketItem/delete/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    basket_controller.delete_basketItem_id)
}



function add_basketItem_route(app){
    app.post('/basketItem/new',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    basket_controller.add_basketItem)
}



function update_basketItemQuantity_route(app){
    app.put('/basketItem/update/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    basket_controller.update_basketItemQuantity)
}


module.exports = {
    get_basketItems_userId_route,
    delete_basketItems_userId_route,
    delete_basketItem_id_route,
    add_basketItem_route,
    update_basketItemQuantity_route
}