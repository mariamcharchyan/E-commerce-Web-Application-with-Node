const { ProductImages } = require('../models')
const fs = require('fs');



async function get_productImage_id(req, res) {
  if (req.params.id) {
    try {
      const productImage = await ProductImages.findByPk(req.params.id);
      if (!productImage) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(productImage);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(400).json({ error: 'Invalid id' });
  }
}



async function get_productImages_productId(req, res) {
  if (req.params.productId) {
    try {
      const productImages = await ProductImages.findAll({
        where: {
          productId: req.params.productId,
        },
      });
      if (productImages.length === 0) {
        return res.status(404).json({ error: 'No images found' });
      }
      res.json(productImages);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(400).json({ error: 'Invalid productId' });
  }
}



async function add_productImage(req, res) {
  let imagePath;

  try {
    const productId = req.body.productId;
    const path = req.file.path;
    
    const splitPath = path.split("\\");
    imagePath = splitPath.slice(-3).join("\\");
    console.log({"imagePath":imagePath});
    const productImage = await ProductImages.create({
      imagePath,
      productId,
    });

    if (!productImage) {
      res.status(404).send('No products found');
    } else {
      res.json(productImage);
    }
  } catch (error) {
    if (imagePath) {
      console.log({"imagePath":imagePath});
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Error deleting image file:', err);
        }
      });
    }
    res.status(500).send(JSON.stringify({ error: error.message, status: 'Error adding product image' }));
  }
}



async function delete_productImage_id(req, res) {
  try {
    const productImage = await ProductImages.findOne({ where: { id: req.params.id } });
    if (!productImage) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const imagePath = productImage.imagePath; 
    
    await ProductImages.destroy({ where: { id: req.params.id } });

    if (imagePath) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Error deleting image file:', err);
        }
      });
    }

    return res.status(201).json({ successful: 'Image deleted' });
  } catch (err) {
      return res.status(500).json({ error: err.message });
  }
}



module.exports = {
  get_productImage_id,
  get_productImages_productId,
  add_productImage,
  delete_productImage_id
}
