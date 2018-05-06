import uuid from "uuid";


export const addProject = ( 
    { 
        id = "", 
        title = "",
        subTitle = "",
        overview = "", 
        floorPlan = "",  
        locationMapInfo = "",
        address = "",  
        specs = "",
        amenities = "",
        brochure = "", 
        createdOn = 0,
        imageLocation = "",
        thumbnailLocation = "",
        status = "" 
    } = {} 
) => ({
    type : "ADD_PROJECT",
    project : {
        id : uuid(),
        title,
        subTitle,
        overview,
        floorPlan,
        locationMapInfo,
        address,
        specs,
        amenities,
        brochure,
        createdOn,
        imageLocation,
        thumbnailLocation,
        status
    }
});

 export const removeProject= ( { id } = {} ) => ({
    type : "REMOVE_PROJECT",
    id    
});

 export const editProject = ( id, project ) => ({
    type : "EDIT_PROJECT",
    id,
    project    
});