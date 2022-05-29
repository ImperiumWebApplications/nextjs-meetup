import MeetupDetail from "../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from ".";

const MeetupDetails = (props) => {
  return <MeetupDetail meetups={props.meetups} />;
};

export async function getStaticPaths() {
  return {
    // paths: DUMMY_MEETUPS.map((meetup) => `/${meetup.id}`),
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
