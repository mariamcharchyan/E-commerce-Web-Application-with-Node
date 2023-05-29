const productImages_controller = require('../controllers/productImages_controller')
const jwt_authentication = require('../jwt/jwt_authentication')
const jwt_authorization = require('../jwt/jwt_authorization')
const upload=require('../multer/multerForProducts')

function get_productImage_id_route(app){
    app.get('/productImage/:id',productImages_controller.get_productImage_id)
}


function get_productImages_productId_route(app){
    app.get('/productImages/:productId',productImages_controller.get_productImages_productId)
}


function add_productImage_route(app){
    app.post('/productImage/new',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    upload.single('image'),
    productImages_controller.add_productImage)
}


function delete_productImage_id_route(app){
    app.delete('/productImage/delete/:id',
    jwt_authentication.authenticateToken,
    jwt_authorization.checkStatusAdmin,
    productImages_controller.delete_productImage_id)
}


module.exports = {
    get_productImage_id_route,
    get_productImages_productId_route,
    add_productImage_route,
    delete_productImage_id_route,
}