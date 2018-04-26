import React from "react";
import { NavLink } from "react-router-dom"; 
//import logoImage from "../../public/images/Logo-image.png";
//import logoText from "../../public/images/Logo-font.png";
import logoText from "../../public/images/Logo8.png";
import { 
    Button, 
    ButtonGroup,
    NavbarToggler,
    Nav,
    NavItem,
    Navbar,
    Collapse 
} from 'reactstrap';
    
class Header extends React.Component {

    state = {
        headerClass : "header",
        collapsed : true
    }

    isElementInViewport = (el) => {

        var rect = el.getBoundingClientRect();
    
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render(){
        
        window.onscroll = () => {

            if( window.pageYOffset >= document.getElementsByClassName( "header" )[0].offsetTop ){

                this.setState({
                    headerClass : "header fixed-top"
                })

            }

            if( this.isElementInViewport( document.getElementById( "welcomeImage" ) ) ){

                this.setState({
                    headerClass : "header"
                })

            }

        }

        return(
            <div>
                <div className = {this.state.headerClass} >
                    <div className = "container-fluid row justify-content-between ml-1" >
                        <div>
                            <img src={logoText} alt="logoText" width = "220px" height = "40px"/>
                        </div>

                        <Navbar color="faded" dark>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" color="primary" />
                            
                            <Collapse isOpen={!this.state.collapsed} navbar >
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink to = "/" activeClassName = "is-active" exact={true} className = "header__navlink" > Home </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to = "/aboutus" activeClassName = "is-active" className = "header__navlink"> About </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to = "/projects" activeClassName = "is-active" className = "header__navlink"> Projects </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to = "/buyersguide" activeClassName = "is-active" className = "header__navlink"> Buyer's Guide </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to = "/contactus" activeClassName = "is-active" className = "header__navlink"> Contact Us </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>

                    </div>
                </div>
            </div>
        
        );
    }
};

export default Header;

// Use https://github.com/pedronauck/react-simpletabs for tabs

// Use http://madscript.com/halogen/ for loader icons

// Use https://gorangajic.github.io/react-icons/md.html (react-icons/lib/md/home) for LOGO
// logojoy.com

// https://www.logoorbit.com/industry/construction/41-reinforced-construction-slogans

/* 
                        <div className = "header_navbar" >
                            <Button color="secondary" size = "lg">
                                <NavLink to = "/" activeClassName = "is-active" exact={true} className = "header__navlink" > Home  |</NavLink>
                                <NavLink to = "/aboutus" activeClassName = "is-active" className = "header__navlink"> About  |</NavLink>
                                <NavLink to = "/projects" activeClassName = "is-active" className = "header__navlink"> Projects  |</NavLink>
                                <NavLink to = "/buyersguide" activeClassName = "is-active" className = "header__navlink"> Buyer's Guide  |</NavLink>
                                <NavLink to = "/contactus" activeClassName = "is-active" className = "header__navlink"> Contact Us</NavLink>
                            </Button>
                        </div>
*/