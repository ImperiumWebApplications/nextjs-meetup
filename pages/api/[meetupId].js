import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const client = await MongoClient.connect(
        "mongodb+srv://root:tiktik123@cluster0.lhsfo.mongodb.net?retryWrites=true&w=majority",
        { useNewUrlParser: true }
      );
      const db = await client.db("meetups");
      // Find the data by meetupId
      const meetup = await db.collection("meetups").findOne({
        _id: ObjectId(req.query.meetupId),
      });
      // Send the meetup as a response
      res.status(200).json(meetup);
      client.close();
    } else {
      res.status(405).json({
        message: "Method not allowed",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default handler;
