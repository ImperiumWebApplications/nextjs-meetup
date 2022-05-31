import Head from "next/head";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        {/* Set the meta tags */}
        <meta name="description" content="Meetups App" />
        <meta name="keywords" content="meetups, app" />
      </Head>
      <MeetupDetail meetup={props.meetup} />;
    </>
  );
};

export async function getStaticPaths() {
  // Get the meetups from the database
  const client = await MongoClient.connect(
    "mongodb+srv://root:tiktik123@cluster0.lhsfo.mongodb.net?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  const db = await client.db("meetups");
  const meetupsCollection = await db.collection("meetups");
  const meetups = await meetupsCollection.find({}).toArray();

  const paths = meetups.map((meetup) => {
    return {
      params: {
        meetupId: meetup._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Get the meetup from the database by meetupId
  const client = await MongoClient.connect(
    "mongodb+srv://root:tiktik123@cluster0.lhsfo.mongodb.net?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  const db = await client.db("meetups");
  // Find the data by meetupId
  const meetup = await db.collection("meetups").findOne({
    _id: ObjectId(context.params.meetupId),
  });
  return {
    props: {
      meetup: {
        ...meetup,
        _id: meetup._id.toString(),
      },
    },
  };
}

export default MeetupDetails;
