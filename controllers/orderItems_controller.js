const { OrderItems, Products, ProductImages } = require('../models')

async function get_orderItems_orderId(req, res) {
  if (req.params.orderId) {
    try {
      const orderItems = await OrderItems.findAll({
        where: {
            orderId: req.params.orderId,
        },
        include: [
          {
            model: Products,
            as: 'orderItemData',
            attributes: ['id', 'name', 'price' ],
            include: [
                {
                  model: ProductImages,
                  as: 'productImages',
                  attributes: ['id', 'imagePath'],
                },
              ],
          },
        ],
      });
      if (orderItems.length === 0) {
        return res.status(404).json({ error: 'No order items found' });
      }
      res.json(orderItems);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(400).json({ error: 'Invalid orderId' });
  }
}


module.exports = {
    get_orderItems_orderId
}
