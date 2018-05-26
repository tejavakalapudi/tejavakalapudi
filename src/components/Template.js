import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppRouter from "../routers/AppRouter";
import WelcomeScreen from "./WelcomeScreen";
import { Provider } from "react-redux";

// For all supported HTML attributes in JSX https://reactjs.org/docs/dom-elements.html
// For all event handlers https://reactjs.org/docs/events.html
// For component lifecycles https://reactjs.org/docs/react-component.html

class AkruthiApp extends React.Component {

    render(){
        return(
            <div>
                <WelcomeScreen />
                <Provider store = { this.props.store } >
                    <AppRouter/>
                </Provider>
                <Footer />
            </div>
        );
    }

};

export default AkruthiApp; 