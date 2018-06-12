import React from "react";

//https://reacttraining.com/react-router/web/guides/philosophy
import { Route, Switch, withRouter } from "react-router-dom"; 

import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage";
import ProjectsPage from "./ProjectsPage";
import ContactUsPage from "./ContactUsPage";
import BuyersGuidePage from "./BuyersGuidePage";
import AdminPage from "./AdminPage";
import NotFound from "./NotFoundPage";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import AddProjectPage from "./AddProjectPage";
import EditProjectPage from "./EditProjectPage";
import Header from "./Header";
import WelcomeScreen from "./WelcomeScreen";
import Footer from "./Footer";

class SwitchComponent extends React.Component {

    state = {
        routeChanged : false
    }

    componentWillMount() {
        this.routeChange = this.props.history.listen((location, action) => {
            this.setState({
                routeChanged : true
            });
        });
    }

    componentWillUnmount() {
        this.routeChange();
    }
    
    render(){

        return(
            <div id = "bodyDiv">
                {
                    !this.state.routeChanged && <WelcomeScreen />
                }
                <Header projectInfoPage = { this.props.location.pathname.search("projectinfo") > -1 && true }/>
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
                    <Route path = "/contact/:title" component = { ContactUsPage } />
                    <Route path = "/admin" component = { AdminPage } /> 
                    <Route component = { NotFound } />
                </Switch>
                <Footer /> 
            </div>
        );
    }
}

export default withRouter( SwitchComponent );
