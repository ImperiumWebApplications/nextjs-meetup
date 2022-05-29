import { useRouter } from "next/router";
import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const router = useRouter();
  const { meetupId } = router.query;
  const meetup = props.meetups.find((meetup) => meetup.id === meetupId);
  return (
    <Fragment>
      {meetup && (
        <div className={classes.detail}>
          <img src={meetup.image} alt="image" />
          <h1>{meetup.title}</h1>
          <p>{meetup.description}</p>
          <p>{meetup.address}</p>
          <p>{meetup.date}</p>
        </div>
      )}
    </Fragment>
  );
};

export default MeetupDetail;
