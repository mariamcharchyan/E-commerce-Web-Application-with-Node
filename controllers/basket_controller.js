const { Baskets, Products, ProductImages } = require('../models')


async function get_basketItems_userId(req, res) {
    try {
        const basketItems = await Baskets.findAll({
            where: {
                userId: req.params.userId,
            },
            include: [
                {
                  model: Products,
                  as: 'productData',
                  attributes: ['id', 'name', 'price', 'quantity'],
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
  
        if (basketItems) {
            res.json(basketItems);
        } else {
            res.status(404).json({ error: 'No basket items found' });
        }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }



async function delete_basketItems_userId(req, res) {
    try {
        //result is number of rows affected by the deletion
        const result = await Baskets.destroy({
            where: {
            userId: req.params.userId,
            },
        });
    
        if (result > 0) {
            res.json({ message: 'Basket items deleted successfully' });
        } else {
            res.status(404).json({ error: 'Basket items not deleted' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



async function delete_basketItem_id(req, res) {
    try {
        const basketItem = await Baskets.findByPk(req.params.id);
    
        if (!basketItem) {
            return res.status(404).json({ error: 'Basket item not found' });
        }
    
        await basketItem.destroy();
        res.json({ message: 'Basket item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function add_basketItem(req, res) {
    try {
      const { userId, productId } = req.body;
  
      // Check the product quantity in the Products table
      const product = await Products.findOne({
        where: { id: productId },
      });
  
      if (product && product.quantity > 0) {
        let basketItem = await Baskets.findOne({
          where: { userId, productId },
        });
  
        if (basketItem) {
          if(basketItem.quantity < product.quantity){
            // If the basket item already exists, update the quantity by adding one
            basketItem.quantity += 1;
            await basketItem.save();
          }

        } else {
          // If the basket item doesn't exist, create a new one
          basketItem = await Baskets.create({ userId, productId });
        }
  
        res
          .status(201)
          .json({ success: 'Basket item added successfully', basketItem });
      } else {
        res.status(400).json({ error: 'Product is out of stock' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
// async function add_basketItem(req, res) {
//     try {
//         const { userId, productId } = req.body;
//         let basketItem = await Baskets.findOne({
//             where: { userId, productId },
//         });
    
//         if (basketItem) {
//             // If the basket item already exists, update the quantity by adding one
//             basketItem.quantity += 1;
//             await basketItem.save();
//         } else {
//             // If the basket item doesn't exist, create a new one
//             basketItem = await Baskets.create({ userId, productId });
//         }
    
//         res.status(201).json({ success: 'Basket item added successfully', basketItem });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }



async function update_basketItemQuantity(req, res) {
    try {
        const basketItemId = req.params.id;
        const { quantity } = req.body;
    
        const basketItem = await Baskets.findByPk(basketItemId);
    
        if (!basketItem) {
            return res.status(404).json({ error: 'Basket item not found' });
        }
    
        basketItem.quantity = quantity;
        await basketItem.save();
    
        res.json({ success: 'Basket item quantity updated successfully', basketItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    get_basketItems_userId,
    delete_basketItems_userId,
    delete_basketItem_id,
    add_basketItem,
    update_basketItemQuantity
}