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

const HomePage = (props) => {
  return <MeetupsList meetups={props.meetups} />;
};

// Export method to implement static site generation
// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
// }

// Export method to implement server side rendering
export async function getServerSideProps(context) {
  context.res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
