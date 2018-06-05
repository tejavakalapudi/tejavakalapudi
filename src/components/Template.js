import React from "react";
import AppRouter from "../routers/AppRouter";
import { Provider } from "react-redux";

// For all supported HTML attributes in JSX https://reactjs.org/docs/dom-elements.html
// For all event handlers https://reactjs.org/docs/events.html
// For component lifecycles https://reactjs.org/docs/react-component.html

class AkruthiApp extends React.Component {

    render(){

        return(
            <div>
                <Provider store = { this.props.store } >
                    <AppRouter/>
                </Provider>
            </div>
        );
    }

};

export default AkruthiApp; 