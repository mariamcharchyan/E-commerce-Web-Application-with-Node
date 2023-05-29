const { ShippingAddresses  } = require('../models')


async function get_shippingAddresses(req, res) {
    try {
        const prod = await ShippingAddresses.findAll();
        res.json(prod);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }


async function get_shippingAddress_id(req, res) {
    if (req.params.id) {
        try {
            const shippingAddress = await ShippingAddresses.findByPk(req.params.id);
            if (!shippingAddress) {
                return res.status(404).json({ error: 'ShippingAddress not found' });
            }
            res.json(shippingAddress);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}



async function post_shippingAddress(req, res) {
    try {
        const { address, city, state, zipcode } = req.body;
        const newShippingAddress = await ShippingAddresses.create({ 
            address, city, state, zipcode });
        res.status(201).json({ successed: 'ShippingAddress added successfully',  newShippingAddress});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



async function delete_shippingAddress_id(req, res) {
    try {
        const shippingAddress = await ShippingAddresses.findByPk(req.params.id);
        if (!shippingAddress) {
            return res.status(404).json({ error: 'ShippingAddress not found' });
        }

        await ShippingAddresses.destroy({ where: { id: req.params.id } });

        return res.status(201).json({ successful: 'ShippingAddress deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
  

async function put_shippingAddress_id(req, res) {
    try {
        const id = req.params.id;
        const { address, city, state, zipcode } = req.body;
  
        const shippingAddress = await ShippingAddresses.findByPk(id);
        if (!shippingAddress) {
            return res.status(404).json({ error: 'ShippingAddress not found' });
        }
  
        shippingAddress.address = address;
        shippingAddress.city = city;
        shippingAddress.state = state;
        shippingAddress.zipcode = zipcode;
  
        await shippingAddress.save();
        res.json({ status: 'ShippingAddress updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
  

module.exports = {
    get_shippingAddresses,
    get_shippingAddress_id,
    post_shippingAddress,
    delete_shippingAddress_id,
    put_shippingAddress_id
}