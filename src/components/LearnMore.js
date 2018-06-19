import React from "react";
import { 
    Row, 
    Col
} from "reactstrap";
import { NavLink } from "react-router-dom"; 

class LearnMore extends React.Component {

    state = {
        activeRoute : this.props.redirect || "home",
        activeClass : this.props.darkBackground ? "more__navlink dark__background" : "more__navlink"
    }

    render(){
        return (
            <Row className = "justify-content-end more__link-container" >
                <Col lg="2" md="4" xs="12" className="text__align-center">
                    <NavLink to = {`/${this.state.activeRoute}`} className={this.state.activeClass}> More →</NavLink>
                </Col>
            </Row>
        );
    }
}; 

export default LearnMore;