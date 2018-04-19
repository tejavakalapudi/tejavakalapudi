import React from "react";
import { NavLink } from "react-router-dom"; 
//import logoImage from "../../public/images/Logo-image.png";
//import logoText from "../../public/images/Logo-font.png";
import logoText from "../../public/images/Logo8.png";
import { Button, ButtonGroup } from 'reactstrap';
import welcomeImage from "../../public/images/homepage7.png";

const Header = () => (
    <div>
        <div >
            <img src = {welcomeImage} className = "welcome-screen"></img>
        </div>
        <div className = "header" >
            <div className = "container-fluid row justify-content-between ml-1" >
                <div>
                    <img src={logoText} alt="logoText" width = "220px" height = "40px"/>
                </div>
                <div className = "header_navbar">
                    <Button color="secondary" size = "lg">
                        <NavLink to = "/" activeClassName = "is-active" exact={true} className = "header__navlink" > Home  |</NavLink>
                        <NavLink to = "/aboutus" activeClassName = "is-active" className = "header__navlink"> About  |</NavLink>
                        <NavLink to = "/projects" activeClassName = "is-active" className = "header__navlink"> Projects  |</NavLink>
                        <NavLink to = "/buyersguide" activeClassName = "is-active" className = "header__navlink"> Buyer's Guide  |</NavLink>
                        <NavLink to = "/contactus" activeClassName = "is-active" className = "header__navlink"> Contact Us</NavLink>
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default Header;

// Use https://github.com/pedronauck/react-simpletabs for tabs

// Use http://madscript.com/halogen/ for loader icons

// Use https://gorangajic.github.io/react-icons/md.html (react-icons/lib/md/home) for LOGO
// logojoy.com

// https://www.logoorbit.com/industry/construction/41-reinforced-construction-slogans

/*            <div>
                <p className = "header__title" >Akruthi Constructions</p>
                <p className = "header__subtitle">Building it better in concrete!</p>
            </div>
            */
/*
<Navbar color="light" light expand="md">
<NavbarBrand href="/">reactstrap</NavbarBrand>
<NavbarToggler/>
    <Collapse navbar>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/aboutus">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href= "/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/buyersguide">Buyers Guide</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contactus">Contact Us</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>
*/

/*            <ButtonGroup>
                <Button color="secondary">
                <NavLink to = "/" activeClassName = "is-active" exact={true} className = "header__navlink" > Home </NavLink>
                </Button>
                <Button color="secondary">
                <NavLink to = "/aboutus" activeClassName = "is-active" className = "header__navlink"> ABOUT US </NavLink>
                </Button>
                <Button color="secondary">
                <NavLink to = "/projects" activeClassName = "is-active" className = "header__navlink"> PROJECTS </NavLink>
                </Button>
                <Button color="secondary">
                <NavLink to = "/buyersguide" activeClassName = "is-active" className = "header__navlink"> BUYERS GUIDE </NavLink>
                </Button>
                <Button color="secondary">
                <NavLink to = "/contactus" activeClassName = "is-active" className = "header__navlink"> CONTACT US </NavLink>
                </Button>                
            </ButtonGroup>
            */