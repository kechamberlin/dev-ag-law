import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, message } = req.body;

    if (
      !name ||
      name.trim() === ' ' ||
      !phone ||
      !email ||
      !email.includes('@') ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }
    // Store in a database
    const newMessage = {
      name,
      phone,
      email,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://06-dev-ag-law-14:ifrbrNi3iMRNjOM8@dev-ag-law.hsirf.mongodb.net/dev-ag-law?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message FAILED!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}
