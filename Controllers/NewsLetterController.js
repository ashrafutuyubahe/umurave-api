
const Newsletter = require('../Models/NewsLetter');




exports.SubscribeToNewsLetter= async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
   
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({ message: 'This email has already subscribed.' });
    }

    
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'You have successfully subscribed to our newsletter!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error subscribing to newsletter.' });
  }
  
}




