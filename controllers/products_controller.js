const { Products, ProductImages, Categories } = require('../models')

const fs = require('fs');

// async function get_products(req, res) {
//     try {
//         const offset = parseInt(req.query.offset);
//         const limit = parseInt(req.query.limit);
//         const prod = await Products.findAll({ offset, limit });
//         res.json(prod);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
//   }

async function get_products(req, res) {
    try {
      const offset = parseInt(req.query.offset);
      const limit = parseInt(req.query.limit);
  
      const products = await Products.findAll({
        offset,
        limit,
        include: [
          {
            model: Categories,
            as: 'category',
            attributes: ['name'],
          },
          {
            model: ProductImages,
            as: 'productImages',
            attributes: ['imagePath'],
          },
        ],
      });  
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  

  async function get_product_id(req, res) {
    if (req.params.id) {
        try {
            const prod = await Products.findByPk(req.params.id, {
                include: [
                    {
                      model: Categories,
                      as: 'category',
                      attributes: ['name'],
                    },
                    {
                      model: ProductImages,
                      as: 'productImages',
                      attributes: ['id', 'imagePath'],
                    },
                ],
            });
            if (!prod) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json(prod);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}




async function get_products_categoryTD(req, res) {
    if (req.params.categoryId) {
        try {
            const offset = parseInt(req.query.offset);
            const limit = parseInt(req.query.limit);
            const prod = await Products.findAll({
                offset, 
                limit,
                where: {
                    categoryId: req.params.categoryId,
                },
                include: [
                    {
                      model: Categories,
                      as: 'category',
                      attributes: ['name'],
                    },
                    {
                      model: ProductImages,
                      as: 'productImages',
                      attributes: ['imagePath'],
                    },
                ],
            });
            if (prod.length === 0) {
                return res.status(404).json({ error: 'No products found' });
            } else {
                res.json(prod);
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.status(400).json({ error: 'Invalid categoryID' });
    }
}



async function post_product(req, res) {
    try {
        const { 
            categoryId, 
            name, 
            price, 
            discountPercentage, 
            quantity, 
            description 
        } = req.body;
        const prod = await Products.create({ 
            categoryId, 
            name, 
            price, 
            discountPercentage, 
            quantity, 
            description });
        res.status(201).json({ successed: 'Product added successfully',  prod});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



async function delete_product_id(req, res) {
    try {
        const id = req.params.id;
  
        // Find the product images associated with the product
        const productImages = await ProductImages.findAll({
            where: {
            productId: id,
            },
        });
  
        // Delete the product images and unlink their image paths
        for (const productImage of productImages) {
            const imagePath = productImage.imagePath;
  
            await ProductImages.destroy({
                where: {
                    id: productImage.id,
                },
            });
    
            if (imagePath) {
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        console.error('Error deleting image file:', err);
                    }
                });
            }
        }
  
        // Delete the product after deleting associated images
        const rowsDeleted = await Products.destroy({
            where: {
                id: id,
            },
        });
  
        if (rowsDeleted === 0) {
            res.json({ error: 'Product not found' });
        } else {
            res.json({ success: 'Product and associated images successfully deleted' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
  

async function put_product_id(req, res) {
    try {
        const id = req.params.id;
        const { 
            name, 
            price, 
            discountPercentage, 
            quantity, 
            description, 
            categoryId 
        } = req.body;
  
        const product = await Products.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
  
        product.name = name;
        product.price = price;
        product.discountPercentage = discountPercentage;
        product.description = description;
        product.categoryId = categoryId;
        product.quantity = quantity;
  
        await product.save();
        res.json({ status: 'Product updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



async function get_newProducts(req, res) {
    try {
      const products = await Products.findAll({
        include: [
          {
            model: Categories,
            as: 'category',
            attributes: ['name'],
          },
          {
            model: ProductImages,
            as: 'productImages',
            attributes: ['imagePath'],
          },
        ],
        order: [['createdAt', 'DESC']],
        limit: 6,
      });
  
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}



async function get_best_selling_products(req, res) {
    try {
      const products = await Products.findAll({
        include: [
          {
            model: Categories,
            as: 'category',
            attributes: ['name'],
          },
          {
            model: ProductImages,
            as: 'productImages',
            attributes: ['imagePath'],
          },
        ],
        order: [['quantity_sold', 'DESC']],
        limit: 6,
      });
  
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}
  
  
module.exports = {
    get_products,
    get_product_id,
    get_products_categoryTD,
    post_product,
    delete_product_id,
    put_product_id,
    get_newProducts,
    get_best_selling_products
}