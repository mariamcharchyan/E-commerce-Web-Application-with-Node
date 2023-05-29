const { SavedCards } = require('../models')


async function add_savedCard(req, res) {
    try {
        const { userId, cardNumber, cardHolder, cardExpiry, cardCVV  } = req.body;
        let savedCardItem= await SavedCards.findOne({
            where: { userId, cardNumber, cardHolder, cardExpiry, cardCVV },
        });
    
        if (!savedCardItem) {
            savedCardItem = await SavedCards.create({ userId, cardNumber, cardHolder, cardExpiry, cardCVV });
        }
    
            res.status(201).json({ success: 'SavedCards item added successfully', savedCardItem });
    } catch (err) {
            res.status(500).json({ error: err.message });
    }
}



async function delete_savedCard_id(req, res) {
    try {
        const { id } = req.params;
    
        const deletedRows = await SavedCards.destroy({
            where: { id },
        });
    
        if (deletedRows === 0) {
            return res.status(404).json({ error: 'SavedCard not found' });
        }
  
        res.status(200).json({ success: 'SavedCard deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }



async function get_savedCards_userId(req, res) {
    try {
      const { userId } = req.params;
  
      const userSavedCards= await SavedCards.findAll({
        where: { userId },
      });
  
      res.status(200).json({ userSavedCards });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}



module.exports = {
    add_savedCard,
    delete_savedCard_id,
    get_savedCards_userId
}