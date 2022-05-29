import MeetupDetail from "../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from ".";

const MeetupDetails = (props) => {
  return <MeetupDetail meetups={DUMMY_MEETUPS} />;
};

export default MeetupDetails;
