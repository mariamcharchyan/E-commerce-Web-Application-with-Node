const savedCards_controller = require('../controllers/savedCards_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')

function add_savedCard_route(app){
    app.post('/savedCard/new',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    savedCards_controller.add_savedCard)
}

function delete_savedCard_id_route(app){
    app.delete('/savedCard/delete/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    savedCards_controller.delete_savedCard_id)
}

function get_savedCards_userId_route(app){
    app.get('/savedCards/:userId', 
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusUser,
    savedCards_controller.get_savedCards_userId)
}


module.exports = {
    add_savedCard_route,
    delete_savedCard_id_route,
    get_savedCards_userId_route
}