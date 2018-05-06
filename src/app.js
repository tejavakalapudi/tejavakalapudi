import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addProject } from "./actions/projects";
import { checkUserAuth } from "./actions/auth";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/projects";
import nandanavanam from "../public/images/Nandanavanam.jpg";
import venkatadri from "../public/images/VenkatadriTowers.jpg";
import venkatadriElevation from "../public/images/VenkatadriElevation.jpg";
import nandanavanamThumbnail from "../public/images/NandanavanamSquare.jpg";
import venkatadriThumbnail from "../public/images/VenkatadriSquare.jpg";

import srinivasamThumbnail from "../public/images/SrinivasamSquare.jpg";
import brindavanamThumbnail from "../public/images/BrindavanamSquare.jpg";
import anandaNilayamThumbnail from "../public/images/AnandaNilayam.jpg";
import vishnuNivasThumbnail from "../public/images/VishnuNivasSquare.jpg";

import { Provider } from "react-redux";

//http://www.tgnickel.com/ (For Scroll bar and header) <3 <3
//http://moncon.com/#projects (For Projects single page)
//https://www.gothamorg.com/?follow=show (For welcome note and font style)
//http://www.flintlockllc.com/ (Navbar style, testimonial section)
//http://builtbybuffalo.com/
//http://www.case-3d.com/projects/
//https://www.styleshout.com/templates/preview/Infinity10/#portfolio
//https://bootstrapmade.com/demo/Imperial/
//https://www.badshahny.com/

// Use normalize to have same styling format across cross browser
// https://necolas.github.io/normalize.css/

import 'bootstrap/dist/css/bootstrap.min.css';
//https://reactstrap.github.io/

//styles.scss should be imported after bootstrap styles to have our custom styling
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// Company dimensions = [ 17.516247, 78.385560 ]

const store = configureStore();

store.dispatch( addProject({ 
    title: "Venkatadri Towers",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    overview: "Akruti's Venkatadri Towers is an ongoing HMDA Approved Gated Community project by Akruthi Constructions & Developers in the locality of Reddy Avenues,Near By Nizampet Village Panchayati Office, Nizampet, Kukatpally, Hyderabad.",
    status: "ongoing",
    amenities: [ 
        "AC Gym", 
        "Generator Backup", 
        "Children play area and landscaped garden",
        "Club House",
        "24 hours Security with intercom facility",
        "Solar fence all around the boundary"
    ],
    imageLocation: venkatadriElevation,
    thumbnailLocation: venkatadriThumbnail,
    specs: [
        { "Structure":	"R.C.C Framed Structure" },
        { "Super Structure":	"Red Brunt brick Walls in CM" },
        { "Plastering": "Two Coat plastering with sponge finish" },
        { "Finishing" : "Vitrified Tiles 2'2'" },
        { "Main Doors" : "Modular Doors (or) Veneers Doors & Godrej Key" },
        { "Internal Doors":	"Frames - Teak wood, Shutters - company made flush door along with necessary hardware and paint" },
        { "Windows": "Aluminum Power Coated Window system with Opoque glass and safety grills" },
        { "Paints" : "Plastic Emulsion & luppam finish / External as per Elevation" },
        { "Electrical" :"Concealed PVC pipes and copper wiring with cable with ISI brand" },
        { "Water Supply" : "Bore water will be supplied through sump and over head tank. And provision for manjeera water supply" },
        { "Toilets" :	"Ceramic tiles cladding up 6' height and best quality sanitary fittings, flooring quality ceramic Tile one European Style, one Orissa pan Sanitary" },
        { "Kitchen" :	"Cooking platform and sink with granitc stone with dado in glazed tiles to a height of 4' Feet" },
        { "Lift":	"Standard Make" },
        { "Generator": "In Hall one light, one fan only and lift and common areas all" },
        { "Common Extra":"Generator, Transformer, Electricity meter, Panel Board, Drainage and Car Parking" }
    ],
    locationMapInfo : [17.516707, 78.385796],
    address : "59, Blooming Dale Road, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090, India"
}));

store.dispatch( addProject({ 
    title: "Nandanavanam Towers",
    subTitle: "2 & 3 BHK, GHMC Approved Project", 
    overview: "Residential and commercial space in the ground floor while the other floors are exclusively residential. Airy spaces, modern fittings, beautiful views and attention to detail are some of the aspects that define this venture. Standing in the middle of the most sizzling location of the Hitech City MMTS, these apartments combine ultra modern architecture with uber chic designing concepts and prudent planning. Take your pick from the abundant choice.", 
    status : "ongoing", 
    amenities: [ 
        "AC Gym", 
        "Generator Backup", 
        "Children play area and landscaped garden",
        "Club House",
        "24 hours Security with intercom facility",
        "Solar fence all around the boundary"
    ],
    imageLocation: nandanavanam,
    thumbnailLocation: nandanavanamThumbnail,
    specs: [
        { "Structure":	"R.C.C Framed Structure" },
        { "Super Structure":	"Red Brunt brick Walls in CM" },
        { "Plastering": "Two Coat plastering with sponge finish" }
    ],
    locationMapInfo : [ 17.486014, 78.373993 ],
    address : "Gopalnagar Society, Hafeezpet, Hyderabad, Telangana 500085, India"
}));

store.dispatch( addProject({ 
    title: "Srinivasam",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "ongoing",
    thumbnailLocation: srinivasamThumbnail 
} ) );

store.dispatch( addProject({ 
    title: "Srinivasam",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: srinivasamThumbnail 
} ) );
store.dispatch( addProject({ 
    title: "Brindavanam",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: brindavanamThumbnail 
} ) );
store.dispatch( addProject({ 
    title: "Ananda Nilayam",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: anandaNilayamThumbnail 
} ) );

store.dispatch( addProject({ 
    title: "Vishnu Nivas",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: vishnuNivasThumbnail 
} ) );
store.dispatch( addProject({ 
    title: "Vishnu Nivas",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: vishnuNivasThumbnail 
} ) );
store.dispatch( addProject({ 
    title: "Vishnu Nivas",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: vishnuNivasThumbnail 
} ) );
store.dispatch( addProject({ 
    title: "Brindavanam",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: brindavanamThumbnail 
} ) );
store.dispatch( addProject({ 
    title: "Ananda Nilayam",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    status: "completed",
    thumbnailLocation: anandaNilayamThumbnail 
} ) );


const state = store.getState();

const jsx = (
        <div>
            <Provider store = { store } >
                <AppRouter/>
            </Provider>
        </div>
);
   
ReactDOM.render( jsx, document.getElementById("app") );