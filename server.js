const express = require('express');
const app = express();
app.use(express.json());
// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('./uploads'));
const cors = require('cors');
app.use(cors());
const users_routes = require('./routes/users_routes');
const mail_rout = require('./routes/mail_rout');
const categories_routes = require('./routes/categories_routes');
const products_routes = require('./routes/products_routes');
const productImages_routes = require('./routes/productImages_routes');
const basket_routes = require('./routes/basket_routes');
const shippingAddresses_routes = require('./routes/shippingAddresses_routes');
const userShippingAddresses = require('./routes/userShippingAddresses');
const savedCards_routes = require('./routes/savedCards_routes');
const orders_routes = require('./routes/orders_routes');
const orderItems_routes = require('./routes/orderItems_routes');


users_routes.register_user_route(app);
users_routes.login_user_route(app);
users_routes.delete_user_route(app);
users_routes.get_one_user_route(app);
users_routes.get_all_users(app);

mail_rout.get_verify_user_route(app);

categories_routes.get_categories_route(app);
categories_routes.add_category_route(app);
categories_routes.delete_category_id_route(app);
categories_routes.put_category_id_route(app);

products_routes.get_products_route(app);
products_routes.get_product_id_route(app);
products_routes.get_products_categoryTD_route(app);
products_routes.post_product_route(app);
products_routes.delete_product_route(app);
products_routes.put_product_id(app);
products_routes.get_newProducts_route(app);
products_routes.get_best_selling_products_route(app);

productImages_routes.get_productImage_id_route(app);
productImages_routes.get_productImages_productId_route(app);
productImages_routes.add_productImage_route(app);
productImages_routes.delete_productImage_id_route(app);

basket_routes.get_basketItems_userId_route(app);
basket_routes.delete_basketItems_userId_route(app);
basket_routes.delete_basketItem_id_route(app);
basket_routes.add_basketItem_route(app);
basket_routes.update_basketItemQuantity_route(app);

shippingAddresses_routes.get_shippingAddresses_route(app);
shippingAddresses_routes.get_shippingAddress_id_route(app);
shippingAddresses_routes.post_shippingAddress_route(app);
shippingAddresses_routes.delete_shippingAddress_id_route(app);
shippingAddresses_routes.put_shippingAddress_id_route(app);

userShippingAddresses.add_userShippingAddress_route(app);
userShippingAddresses.delete_userShippingAddress_id_route(app);
userShippingAddresses.get_userShippingAddresses_userId_route(app);

savedCards_routes.add_savedCard_route(app);
savedCards_routes.delete_savedCard_id_route(app);
savedCards_routes.get_savedCards_userId_route(app);

orders_routes.add_order_route(app);
orders_routes.get_orders_userId_route(app);
orders_routes.get_orders_route(app);

orderItems_routes.get_orderItems_orderId_route(app);

app.listen(5000, () => {
console.log('Server running on port 5000');
});