import MeetupsList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";

// export const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "someAddress",
//     description: "someDescription",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "someOtherAddress",
//     description: "someOtherDescription",
//   },
// ];

const HomePage = (props) => {
  // Set the header relevant tags using the Head component
  return (
    <>
      <Head>
        <title>Meetups</title>
        {/* Set the meta tags */}
        <meta name="description" content="Meetups App" />
        <meta name="keywords" content="meetups, app" />
      </Head>
      <MeetupsList meetups={props.meetups} />
    </>
  );
};

// Export method to implement static site generation
export async function getStaticProps() {
  // Get the meetups
  const client = await MongoClient.connect(
    "mongodb+srv://root:tiktik123@cluster0.lhsfo.mongodb.net?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  const db = await client.db("meetups");
  const meetupsCollection = await db.collection("meetups");
  const meetups = await meetupsCollection.find({}).toArray();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          ...meetup,
          _id: meetup._id.toString(),
        };
      }),
    },
  };
}

// Export method to implement server side rendering
// export async function getServerSideProps(context) {
//   context.res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
