import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    });
    const meetup = await response.json();
    console.log("meetup data", meetup);
    // Redirect user to the homepage using router
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
