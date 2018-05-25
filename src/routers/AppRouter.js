import React from "react";

//https://reacttraining.com/react-router/web/guides/philosophy
import { BrowserRouter, Route, Switch } from "react-router-dom"; 

import HomePage from "../components/HomePage";
import AboutUsPage from "../components/AboutUsPage";
import ProjectsPage from "../components/ProjectsPage";
import ContactUsPage from "../components/ContactUsPage";
import BuyersGuidePage from "../components/BuyersGuidePage";
import AdminPage from "../components/AdminPage";
import NotFound from "../components/NotFoundPage";
import ProjectItemWithInfo from "../components/ProjectItemWithInfo";
import AddProjectPage from "../components/AddProjectPage";
import EditProjectPage from "../components/EditProjectPage";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path = "/" component = { HomePage } exact={true}/>
                <Route path = "/home" component = { HomePage }/>
                <Route path = "/aboutus" component = { AboutUsPage } />
                <Route path = "/projects" component = { ProjectsPage } />
                <Route path = "/projectinfo/:id" component = { ProjectItemWithInfo } />
                <Route path = "/addproject" component = { AddProjectPage } />
                <Route path = "/editproject/:id" component = { EditProjectPage } />
                <Route path = "/buyersguide" component = { BuyersGuidePage } />
                <Route path = "/contactus" component = { ContactUsPage } />
                <Route path = "/admin" component = { AdminPage } /> 
                <Route component = { NotFound } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
