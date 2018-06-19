const testimonialsDefault = [];

export default ( state = testimonialsDefault, action ) => {
    switch( action.type ){

        case "ADD_TESTIMONIAL" : {
            return [ ...state, action.testimonial  ]
        }

        case "SET_TESTIMONIALS" : {
            return action.testimonials;
        }

        default:
        return state;
    }      
};