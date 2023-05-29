const { Categories, Products, ProductImages } = require('../models')

const fs = require('fs');

async function get_categories(req, res) {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function add_category(req, res) {
  try {
    const { name } = req.body;

    const category = await Categories.create({ name });
    
    res.status(201).json({ id: category.id, name: category.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// async function delete_category_id(req, res) {
//   try {
//     const categoryId = req.params.id;

//     // Delete associated products first
//     await Products.destroy({
//       where: { categoryId: categoryId },
//     });

//     // Delete the category
//     const rowsDeleted = await Categories.destroy({
//       where: { id: categoryId },
//     });

//     if (rowsDeleted === 0) {
//       res.status(404).json({ error: 'Category not found' });
//     } else {
//       res.status(204).json({ success: 'Category and products are successfully deleted' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

async function delete_category_id(req, res) {
  try {
    const categoryId = req.params.id;

    // Find the products associated with the category
    const products = await Products.findAll({
      where: {
        categoryId: categoryId,
      },
    });

    // Delete the associated product images and unlink their image paths
    for (const product of products) {
      const productImages = await ProductImages.findAll({
        where: {
          productId: product.id,
        },
      });

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
    }

    // Delete the products associated with the category
    await Products.destroy({
      where: {
        categoryId: categoryId,
      },
    });

    // Delete the category
    const rowsDeleted = await Categories.destroy({
      where: {
        id: categoryId,
      },
    });

    if (rowsDeleted === 0) {
      res.status(404).json({ error: 'Category not found' });
    } else {
      res.status(204).json({ success: 'Category and associated products/images successfully deleted' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


async function put_category_id(req, res) {
  try {
    const id = req.params.id;
    const { name } = req.body;

    const category = await Categories.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    category.name = name;
    await category.save();

    res.json({ status: 'Category updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  get_categories,
  add_category,
  delete_category_id,
  put_category_id
}
