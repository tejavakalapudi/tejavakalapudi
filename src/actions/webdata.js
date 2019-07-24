import { database, storageRef } from "../firebase/firebase";
import { setTestimonials } from "./testimonials";
import { setTravelPages } from "./travelDiaries";
import testimonials from "../reducers/testimonials";

export const fetchWebContent = () => {
  return dispatch => {
    const event = new Date();

    console.log("Fetching content from database at ", event.toTimeString());

    const ref = database.ref("webinfo");

    return ref
      .once("value")

      .then(snapshot => {
        const testimonials = [],
          travelDiaries = [];

        snapshot.child("linkedinTestimonials").forEach(testimonial => {
          testimonials.push({
            id: testimonial.key,
            ...testimonial.val()
          });
        });

        dispatch(setTestimonials(testimonials));

        snapshot.child("travelDiaries").forEach(travel => {
          travelDiaries.push({
            id: travel.key,
            ...travel.val()
          });
        });

        dispatch(setTravelPages(travelDiaries));
      })
      .catch(e => {
        console.log("Fetching testimonials data has failed with error ", e);
      });
  };
};
