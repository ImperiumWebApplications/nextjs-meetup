import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Head from "next/head";

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
    // Redirect user to the homepage using router
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>New Meetup</title>
        {/* Set the meta tags */}
        <meta name="description" content="Meetups App" />
        <meta name="keywords" content="meetups, app" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
};

export default NewMeetup;
