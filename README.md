# E-commerce Web Application with Node - Backend

## Description

This is the backend server for an E-commerce Web Application that serves as an online toy store. It is built using Node.js and utilizes various libraries and tools such as MySQL database, Sequelize ORM, migration, seeders, Nodemailer, bcrypt, jsonwebtoken, and JWT authorization.

## Features

* User authentication and authorization using JWT (JSON Web Tokens).
* Secure password hashing using bcrypt.
* User registration and login functionality with email verification.
* Email verification using Nodemailer to ensure valid user email addresses.
* Category management: Create, Read, Update, and Delete (CRUD) operations for toy categories.
* Product management: Create, Read, Update, and Delete (CRUD) operations for toy products.
* Product images management: Upload and associate images with products.
* Shipping address management: Create, Read, Update, and Delete (CRUD) operations for user shipping addresses.
* User shipping address management: Associate shipping addresses with user.
* Payment card management: Add, Read, and Delete operations for user payment cards.
* Order placement and management: Create, Read operations for orders.
* Order items management: Associate products with orders and manage quantities.
* Basket management: Add products to the cart, update quantities, and remove products.
* MySQL database integration: Utilize MySQL as the backend database for storing application data.
* Migration: Use Sequelize ORM to handle database migrations, making it easier to evolve the database schema over time.
* Seeding: Populate the database with initial data using Sequelize seeders to ensure a consistent starting state.
* API endpoints management: Design and implement robust and secure API endpoints to handle various CRUD operations and interactions with the database.

## Prerequisites
* Node.js - Make sure you have Node.js installed globally on your machine.
* MySQL database - Set up a MySQL database for storing the application data.

### Installing

1. Clone the repository:
```
git clone https://github.com/mariamcharchyan/E-commerce-Web-Application-with-Node.git
```

2. Navigate to the project directory:
```
cd E-commerce-Web-Application-with-Node
```

3. Install the dependencies:
```
npm install
```

4. Set up the database:
* Create a new MySQL database for the application.
* Update the database configuration in the config/config.js file to match your MySQL database settings.

5. Run database migrations and seeders:
* Run the following command to run the migrations:
```
npx sequelize-cli db:migrate
```
* Run the following command to seed the database with sample data:
```
npx sequelize-cli db:seed:all
```

6. Start the server:
```
nodemon server.js
```

By default, the server will run on http://localhost:5000.

# API Endpoints

The server exposes the following API endpoints:

## User Endpoints
* `POST /user/register`- Register a new user.
* `POST /user/login` - Log in a user.
* `DELETE /user/delete/:id` - Delete a user.
* `POST /user/data` - Get user data.
* `GET /users/datas `- Get data of all users.

## Category Endpoints
* `GET /categories` - Get all categories.
* `POST /category/new` - Create a new category.
* `DELETE /category/delete/:id` - Delete a category.
* `PUT /category/update/:id` - Update a category.

## Product Endpoints
* `GET /products` - Get all products.
* `GET /product/:id` - Get a specific product by ID.
* `GET /products/:categoryId` - Get all products in a specific category.
* `POST /product/new` - Create a new product.
* `DELETE /product/delete/:id `- Delete a product.
* `PUT /product/update/:id` - Update a product.
* `GET /newProducts` - Get new products.
* `GET /bestSellingProducts` - Get best-selling products.

## Product Image Endpoints
* `GET /productImage/:id` - Get a specific product image by ID.
* `GET /productImages/:productId` - Get all product images for a specific product.
* `POST /productImage/new` - Add a new product image.
* `DELETE /productImage/delete/:id` - Delete a product image.

## Basket Item Endpoints
* `POST /basketItem/new` - Add a new item to the basket.
* `GET /basketItems/:userId` - Get all basket items for a specific user.
* `DELETE /basketItems/delete/:userId` - Delete all basket items for a specific user.
* `DELETE /basketItem/delete/:id` - Delete a basket item by ID.
* `PUT /basketItem/update/:id` - Update a basket item by ID.

## Saved Card Endpoints
* `POST /savedCard/new` - Add a new saved card.
* `DELETE /savedCard/delete/:id` - Delete a saved card by ID.
* `GET /savedCards/:userId` - Get all saved cards for a specific user.

## Shipping Address Endpoints
* `GET /shippingAddresses` - Get all shipping addresses.
* `GET /shippingAddress/:id` - Get a specific shipping address by ID.
* `POST /shippingAddress/new` - Add a new shipping address.
* `DELETE /shippingAddress/delete/:id` - Delete a shipping address by ID.
* `PUT /shippingAddress/update/:id` - Update a shipping address by ID.

## User Shipping Address Endpoints
* `POST /userShippingAddress/new` - Add a new user shipping address.
* `DELETE /userShippingAddress/delete/:id` - Delete a user shipping address by ID.
* `GET /userShippingAddresses/:userId` - Get all user shipping addresses for a specific user.

## Orders Endpoints
* `POST /order/new` - Place a new order.
* `GET /orders/:userId` - Get all orders for a specific user.
* `GET /allOrders` - Get all orders.

## Order Items Endpoints
* `GET /orderItems/orderId` - Get all order items for a specific order.

**When a user places a new order (POST /order/new), the basket data for that user, identified by the userId, is moved to the order items (orderItems) table. The corresponding items are deleted from the basket. Additionally, the quantity of the products in the products table decreases and the quantity_sold increases.**

**See the code for detailed information on each endpoint and their usage.**

## Project Structure


- **config/** Contains the configuration file config.json for database settings.
  - **config.json**                     
- **controllers/** Holds the controllers responsible for handling different API endpoints and their related logic.
  - **basket_controller.js**
  - **categories_controller.js**
  - **mail_controller.js**
  - **orderItems_controller.js**
  - **orders_controller.js**
  - **productImages_controller.js**
  - **products_controller.js**
  - **savedCards_controller.js**
  - **shippingAddresses_controller.js**
  - **users_controller.js**
  - **userShippingAddresses_controller.js**

- **jwt/** Contains modules for JWT authentication and authorization.
  - **jwt_authentication.js**
  - **jwt_authorization.js**
  - **jwt_generate.js**

- **mailer/** Contains the mailer module for sending emails.
  - **mailer.js**

- **migrations/** Contains the migration files for creating database tables.
  - **create-users.js**
  - **create-categories.js**
  - **create-products.js**
  - **create-productImages.js**
  - **create-baskets.js**
  - **create-shippingAddresses.js**
  - **create-userShippingAddresses.js**
  - **create-savedCards.js**
  - **create-orders.js**
  - **create-orderItems.js**

- **models/** Defines the database models using Sequelize for different entities.
  - **baskets.js**
  - **categories.js**
  - **index.js**
  - **orderItems.js**
  - **orders.js**
  - **productImages.js**
  - **products.js**
  - **savedCards.js**
  - **shippingAddresses.js**
  - **users.js**
  - **userShippingAddresses.js**

- **multer/** Contains the multer middleware configuration for handling file uploads.
  - **multerForProducts.js**
  - **multerForUsers.js**
 
- **routes/** Contains the route files that define the API endpoints and their corresponding 
  - **basket_routes.js**
  - **categories_routes.js**
  - **mail_routes.js**
  - **orderItems_routes.js**
  - **orders_routes.js**
  - **productImages_routes.**
  - **products_routes.js**
  - **savedCards_routes.js**
  - **shippingAddresses_routes.js**
  - **users_routes.js**
  - **userShippingAddresses_routes.js**

- **seeders/** Contains the seed files for populating the initial data in the database.
  - **add-users.js**
  - **add-categories.js**
  - **add-products.js**
  - **add-productImages.js**
  - **add-shippingAddresses.js**
  - **add-savedCards.js**

- **uploads/** Directory to store uploaded images.

- **server.js** The entry point of the application, where the server is initialized and started.


## Environment Variables
The server uses the following environment variables, which can be set in a .env file or configured in your deployment environment:

. `SECRET` - A secret key used for signing and verifying JWT tokens.
. `PASSWORD_MAIL` - The password for the email account used for sending verification emails with Nodemailer.
. `MYSQL_HOST` - The hostname of the MySQL database server.
. `MYSQL_USER ` - The username for connecting to the MySQL database.
. `MYSQL_PASSWORD` - The password for connecting to the MySQL database.
. `MYSQL_DATABASE` - The name of the MySQL database used for the E-commerce web application.

Make sure to configure these environment variables appropriately before running the server to ensure proper functionality and connectivity with the MySQL database.