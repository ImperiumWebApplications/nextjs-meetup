import NewMeetupForm from "../components/meetups/NewMeetupForm";
const NewMeetup = () => {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
