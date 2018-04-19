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
import nandanavanamThumbnail from "../public/images/NandanavanamSquare.jpg";
import venkatadriThumbnail from "../public/images/VenkatadriSquare.jpg";

import { Provider } from "react-redux";

//http://www.tgnickel.com/ (For Scroll bar and header) <3 <3
//http://moncon.com/#projects (For Projects single page)
//https://www.gothamorg.com/?follow=show (For welcome note and font style)
//http://www.flintlockllc.com/ (Navbar style, testimonial section)
//http://builtbybuffalo.com/
//http://www.case-3d.com/projects/

// Use normalize to have same styling format across cross browser
// https://necolas.github.io/normalize.css/

import 'bootstrap/dist/css/bootstrap.min.css';
//https://reactstrap.github.io/

//styles.scss should be imported after bootstrap styles to have our custom styling
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch( addProject({ 
    title: "Venkatadri",
    subTitle: "2 & 3 BHK, GHMC Approved Project",  
    overview: "nizampet", 
    status: "ongoing",
    imageLocation: venkatadri,
    thumbnailLocation: venkatadriThumbnail 
} ) );

store.dispatch( addProject({ 
    title: "Nandanavanam",
    subTitle: "2 & 3 BHK, GHMC Approved Project", 
    overview: "Residential and commercial space in the ground floor while the other floors are exclusively residential. Airy spaces, modern fittings, beautiful views and attention to detail are some of the aspects that define this venture. Standing in the middle of the most sizzling location of the Hitech City MMTS, these apartments combine ultra modern architecture with uber chic designing concepts and prudent planning. Take your pick from the abundant choice.", 
    status : "ongoing", 
    amenities: "Amenities of this project!",
    imageLocation: nandanavanam,
    thumbnailLocation: nandanavanamThumbnail,
    specs: [
        { "Structure":	"R.C.C Framed Structure" },
        { "Super Structure":	"Red Brunt brick Walls in CM" },
        { "Plastering": "Two Coat plastering with sponge finish" }
    ] 
}));

const state = store.getState();

const jsx = (
        <div>
            <Provider store = { store } >
                <AppRouter/>
            </Provider>
        </div>
);
   
ReactDOM.render( jsx, document.getElementById("app") );