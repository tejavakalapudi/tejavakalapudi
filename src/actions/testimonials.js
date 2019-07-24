import { database, storageRef } from "../firebase/firebase";

export const addTestimonial = testimonial => ({
  type: "ADD_TESTIMONIAL",
  testimonial
});

export const startAddTestimonial = (testiData = {}) => {
  return dispatch => {
    const {
      id = "",
      imageUrl = "",
      name = "",
      testimonial = "",
      title = ""
    } = testiData;

    return database
      .ref("webinfo/linkedinTestimonials")
      .push(testiData)
      .then(ref => {
        dispatch(
          addTestimonial({
            id: ref.key,
            ...testiData
          })
        );
      })
      .catch(error => {
        console.log("Add Testimonial failed: " + error.message);
      });
  };
};

export const setTestimonials = (testimonials = []) => ({
  type: "SET_TESTIMONIALS",
  testimonials
});

export const startSetTestimonials = () => {
  return dispatch => {
    return database
      .ref("webinfo/linkedinTestimonials")
      .once("value")

      .then(snapshot => {
        const testimonials = [];

        snapshot.forEach(testimonial => {
          testimonials.push({
            id: testimonial.key,
            ...testimonial.val()
          });
        });

        dispatch(setTestimonials(testimonials));
      })
      .catch(e => {
        console.log("Fetching testimonials data has failed with error ", e);
      });
  };
};
