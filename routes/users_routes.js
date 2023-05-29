const users_controller = require('../controllers/users_controller')
const upload=require('../multer/multerForUsers')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')

function register_user_route(app){
    app.post('/user/register', upload.single('image'), users_controller.register_user)
}

function login_user_route(app){
    app.post('/user/login', users_controller.login_user)
}

function delete_user_route(app){
    app.delete('/user/delete/:id',
    (jwt_authentication.authenticateToken || 
        (jwt_authorization.checkStatusUser && jwt_authorization.checkStatusAdmin)
    ),
    users_controller.delete_user_id)
}

function get_one_user_route(app){
    app.post('/user/data', 
    (jwt_authentication.authenticateToken || 
        (jwt_authorization.checkStatusUser && jwt_authorization.checkStatusAdmin)
    ),
    users_controller.get_user_by_email_and_password)
}

function get_all_users(app){
    app.get('/users/datas', 
    (jwt_authentication.authenticateToken || jwt_authorization.checkStatusAdmin),
    users_controller.get_all_users)
}

module.exports = {
    register_user_route,
    login_user_route,
    delete_user_route,
    get_one_user_route,
    get_all_users
}