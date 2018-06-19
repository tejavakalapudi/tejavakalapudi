import { database, storageRef } from "../firebase/firebase";
import { startSetTestimonials } from "./testimonials";
import { startSetTravelPages } from "./travelDiaries";

export const fetchWebContent = () => {
    
    return( dispatch ) => {

        var event = new Date();

        console.log( "Fetching content from database at ", event.toTimeString());

        return database.ref( "webinfo" ).once( "value" )

            .then((snapshot) => {

                    const webSections = [];

                    /*snapshot.forEach(( section ) => {
            
                        webSections.push({
                            id : section.key,
                            ...section.val()
                        })
            
                    });

                    console.log("Ravi web sections", webSections );*/
            
                    dispatch( startSetTestimonials() );
                    dispatch( startSetTravelPages() );
            
                }
            )
            .catch( ( e ) => {

                console.log( "Fetching testimonials data has failed with error ", e );
                
            });
    };

};