const { UserShippingAddresses, ShippingAddresses } = require('../models')


async function add_userShippingAddress(req, res) {
    try {
        const { userId, shippingAddressId } = req.body;
        let shippingAddressItem= await UserShippingAddresses.findOne({
            where: { userId, shippingAddressId },
        });
    
        if (!shippingAddressItem) {
            shippingAddressItem = await UserShippingAddresses.create({ userId, shippingAddressId });
        }
    
            res.status(201).json({ success: 'UserShippingAddresses item added successfully', shippingAddressItem });
    } catch (err) {
            res.status(500).json({ error: err.message });
    }
}



async function delete_userShippingAddress_id(req, res) {
    try {
        const { id } = req.params;
    
        const deletedRows = await UserShippingAddresses.destroy({
            where: { id },
        });
    
        if (deletedRows === 0) {
            return res.status(404).json({ error: 'UserShippingAddress not found' });
        }
  
        res.status(200).json({ success: 'UserShippingAddress deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }



async function get_userShippingAddresses_userId(req, res) {
    try {
      const { userId } = req.params;
  
      const userShippingAddresses = await UserShippingAddresses.findAll({
        where: { userId },
        include: {
          model: ShippingAddresses,
          as: 'shippingAddress',
          attributes: ['address', 'city', 'state', 'zipcode'],
        },
      });
  
      res.status(200).json({ userShippingAddresses });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}



module.exports = {
    add_userShippingAddress,
    delete_userShippingAddress_id,
    get_userShippingAddresses_userId
}