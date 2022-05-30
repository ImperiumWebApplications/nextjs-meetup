import { MongoClient } from "mongodb";

// GET endpoint for getting all meetups
async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Connect to mongodb database using connection string
      const client = await MongoClient.connect(
        "mongodb+srv://root:tiktik123@cluster0.lhsfo.mongodb.net?retryWrites=true&w=majority",
        { useNewUrlParser: true }
      );
      const db = await client.db("meetups");
      const meetupsCollection = await db.collection("meetups");
      const meetups = await meetupsCollection.find({}).toArray();
      client.close();
      res.status(200).json(meetups);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
}

export default handler;
