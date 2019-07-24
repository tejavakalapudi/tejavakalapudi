import React from "react";

//https://reacttraining.com/react-router/web/guides/philosophy
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import AboutMePage from "../components/AboutMePage";
import Testimonials from "../components/Testimonials";
import TravelDiaries from "../components/TravelDiaries";
import TravelPage from "../components/TravelPage";
import ContactUsPage from "../components/Contact";
import Footer from "../components/Footer";
import NotFound from "../components/NotFoundPage";
import AdminPage from "../components/AdminPage";

class SwitchComponent extends React.Component {
  state = {
    routeChanged: false
  };

  componentWillMount() {
    this.routeChange = this.props.history.listen((location, action) => {
      this.setState({
        routeChanged: true
      });
    });
  }

  componentWillUnmount() {
    this.routeChange();
  }

  render() {
    return (
      <div id="bodyDiv">
        {/*<Header/>*/}
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutMePage} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/traveldiaries" component={TravelDiaries} />
          <Route path="/travel/:id" component={TravelPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/me" component={AdminPage} />
          <Route component={NotFound} />
        </Switch>
        {/*<Footer /> */}
      </div>
    );
  }
}

export default withRouter(SwitchComponent);
