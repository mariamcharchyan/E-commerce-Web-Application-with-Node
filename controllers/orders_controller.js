const { Orders, OrderItems, Baskets, Products, SavedCards, ShippingAddresses} = require('../models')


async function add_order(req, res) {
    try {
      const { userId, cardId, shippingAddressId } = req.body;
      let totalAmount = 0;
      let quantitySold; // Declare the quantitySold variable here
  
      const basketItems = await Baskets.findAll({
        where: { userId },
        include: [
          {
            model: Products,
            as: 'productData',
            attributes: ['id', 'price'],
          },
        ],
      });
  
      if (basketItems.length === 0) {
        return res.status(404).json({ error: 'No basket items found' });
      } else {
        basketItems.forEach((product) => {
          totalAmount += product.quantity * product.productData.price;
        });
      }
      console.log('totalAmount = ', totalAmount);
  
      const card = await SavedCards.findByPk(cardId);
  
      if (!card) {
        return res.status(404).json({ error: 'No card item found' });
      }
  
      const order = await Orders.create({
        userId,
        shippingAddressId,
        cardNumber: card.cardNumber,
        cardHolder: card.cardHolder,
        cardExpiry: card.cardExpiry,
        cardCVV: card.cardCVV,
        totalAmount,
      });
  
      if (!order) {
        return res.status(404).json({ error: 'Order rejected' });
      }
  
      // Add basket items to OrderItems and delete from Baskets
      await Promise.all(
        basketItems.map(async (product) => {
          await OrderItems.create({
            orderId: order.id,
            productId: product.productId,
            quantity: product.quantity,
          });
  
          quantitySold = await Products.findByPk(product.productId);
          if (!quantitySold) {
            return res.status(404).json({ error: 'Product not found' });
          } else {
            quantitySold.quantity_sold += product.quantity;
            quantitySold.quantity -= product.quantity;
            await quantitySold.save();
          }
  
          await product.destroy();
        })
      );
  
      return res.status(201).json({
        success: 'Order successfully',
        order,
        'quantitySold.quantity_sold': quantitySold.quantity_sold,
        basketItems,
        card,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
}
  




async function get_orders_userId(req, res) {
    try {
        const offset = parseInt(req.query.offset);
        const limit = parseInt(req.query.limit);

        const orders = await Orders.findAll({
          offset,
          limit,
          where: {
            userId: req.params.userId,
          },
          include: [
            {
              model: ShippingAddresses,
              as: 'shippingAddress',
              attributes: [ 'address', 'city', 'state', 'zipcode' ],
            },
          ],
        });  

        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



async function get_orders(req, res) {
    try {
        const offset = parseInt(req.query.offset);
        const limit = parseInt(req.query.limit);

        const orders = await Orders.findAll({
          offset,
          limit,
          include: [
            {
              model: ShippingAddresses,
              as: 'shippingAddress',
              attributes: [ 'address', 'city', 'state', 'zipcode' ],
            },
          ],
        });  

        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    add_order,
    get_orders_userId,
    get_orders
}