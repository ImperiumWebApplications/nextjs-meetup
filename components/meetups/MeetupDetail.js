import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <Fragment>
      {props.meetup && (
        <div className={classes.detail}>
          <img src={props.meetup.image} alt="image" />
          <h1>{props.meetup.title}</h1>
          <p>{props.meetup.description}</p>
          <p>{props.meetup.address}</p>
          <p>{props.meetup.date}</p>
        </div>
      )}
    </Fragment>
  );
};

export default MeetupDetail;
