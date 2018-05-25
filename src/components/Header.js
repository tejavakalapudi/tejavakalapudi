import React from "react";
import { 
    Navbar, 
    Nav, 
    NavItem, 
    Container, 
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logoImage from "../../public/images/Logo5.png";

class HeaderComponent extends React.Component{

    isMobileDevice = () => {
        return ( typeof window.orientation !== "undefined" ) || ( navigator.userAgent.indexOf( 'IEMobile' ) !== -1 );
    };

    renderNavs = () => {

        if( this.isMobileDevice() ){

            return (
                <Nav>
                    <UncontrolledDropdown nav inNavbar className = "dropdown-navitem">
                        <DropdownToggle nav caret className = "navlink">
                            Menu
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink to = "/" exact={true} className = "navlink dropdown-navlink">Home</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/projects" className = "navlink dropdown-navlink">Projects</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/buyersguide" className = "navlink dropdown-navlink">Buyers Guide</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/contactus" className = "navlink dropdown-navlink" >Contact</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/admin" className = "navlink dropdown-navlink" >Admin</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            );

        } else {

            return(
                <Nav>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/" exact={true} className = "navlink navlink-right">Home</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/projects" className = "navlink navlink-right">Projects</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/buyersguide" className = "navlink navlink-right">Buyers Guide</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/contactus" className = "navlink navlink-right" >Contact</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/admin" className = "navlink navlink-right" >Admin</NavLink>
                    </NavItem>
                </Nav>
            );

        }

    }

    render(){
        return(
            <div className = "buyers-guide-container mx-auto">
                <Container>
                    <div className = "row justify-content-between">         
                        <div className = "" >
                            <NavLink to = "/" >
                                <img src = { this.props.activeTab === "projectinfo" ? "../" + logoImage : logoImage } className = "projects_logo" ></img>
                            </NavLink>
                        </div>
                        <Navbar color="faded" dark className = "header__navbar">
                            {this.renderNavs()}
                        </Navbar>                         
                    </div>
                </Container>
            </div>
        )
    }

}
    

export default HeaderComponent;


