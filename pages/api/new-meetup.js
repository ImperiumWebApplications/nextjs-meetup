import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      // Connect to mongodb database using connection string
      const client = await MongoClient.connect(
        "mongodb+srv://root:tiktik123@cluster0.lhsfo.mongodb.net?retryWrites=true&w=majority",
        { useNewUrlParser: true }
      );
      const db = await client.db("meetups");
      const meetupsCollection = await db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      const id = result.insertedId;
      client.close();
      res.status(201).json({ id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
}
