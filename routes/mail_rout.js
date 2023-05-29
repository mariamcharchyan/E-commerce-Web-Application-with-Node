const mail_controller = require('../controllers/mail_controller')

function get_verify_user_route(app){
    app.get('/verify/:code', mail_controller.verify_user)
}

module.exports = {get_verify_user_route}