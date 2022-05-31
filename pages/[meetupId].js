import Head from "next/head";
import MeetupDetail from "../components/meetups/MeetupDetail";

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
  // Make a GET call to /api/meetups
  const response = await fetch("http://localhost:3000/api/meetups");
  const meetups = await response.json();

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
  // Make a GET call to /api/:meetupId
  const response = await fetch(
    "http://localhost:3000/api/" + context.params.meetupId
  );
  const meetup = await response.json();
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
