import React from "react";

//https://reacttraining.com/react-router/web/guides/philosophy
import { BrowserRouter, Route, Switch , Link, NavLink } from "react-router-dom"; 

import HomePage from "../components/HomePage";
import HomePage1 from "../components/HomePage1";
import AboutUsPage from "../components/AboutUsPage";
import ProjectsPage from "../components/ProjectsPage";
import ContactUsPage from "../components/ContactUsPage";
import BuyersGuidePage from "../components/BuyersGuidePage";
import AkurthiApp from "../components/Template";
import AdminPage from "../components/AdminPage";
import NotFound from "../components/NotFoundPage";
import ProjectItemWithInfo from "../components/ProjectItemWithInfo";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <AkurthiApp/>
            <Switch>
                <Route path = "/" component = { HomePage1 } exact={true}/>
                <Route path = "/home" component = { HomePage1 }/>
                <Route path = "/aboutus" component = { AboutUsPage } />
                <Route path = "/projects" component = { ProjectsPage } />
                <Route path = "/projectinfo/:id" component = { ProjectItemWithInfo } />
                <Route path = "/buyersguide" component = { BuyersGuidePage } />
                <Route path = "/contactus" component = { ContactUsPage } />
                <Route path = "/admin" component = { AdminPage } /> 
                <Route component = { NotFound } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
