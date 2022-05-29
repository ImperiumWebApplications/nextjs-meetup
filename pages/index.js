import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/MeetupList";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "someAddress",
    description: "someDescription",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "someOtherAddress",
    description: "someOtherDescription",
  },
];

const HomePage = () => {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setMeetups(DUMMY_MEETUPS));
  }, []);
  return <MeetupsList meetups={meetups} />;
};

export default HomePage;
