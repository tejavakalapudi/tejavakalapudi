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
                                <NavLink to = "/" exact={true} activeClassName = "is-active" className = "dropdown-navlink">Home</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/projects" activeClassName = "is-active" className = "dropdown-navlink">Projects</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/buyersguide" activeClassName = "is-active" className = "dropdown-navlink">Buyers Guide</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/contactus" activeClassName = "is-active" className = "dropdown-navlink" >Contact</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/admin" activeClassName = "is-active" className = "dropdown-navlink" >Admin</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            );

        } else {

            return(
                <Nav>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/" exact={true} activeClassName = "is-active" className = "navlink navlink-right">Home</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/projects" activeClassName = "is-active" className = "navlink navlink-right">Projects</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/buyersguide" activeClassName = "is-active" className = "navlink navlink-right">Buyers Guide</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/contactus" activeClassName = "is-active" className = "navlink navlink-right" >Contact</NavLink>
                    </NavItem>
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/admin" activeClassName = "is-active" className = "navlink navlink-right" >Admin</NavLink>
                    </NavItem>
                </Nav>
            );

        }

    }

    render(){
        return(
            <div className = "header-container mx-auto">
                <Container>
                    <Container>
                        <div className = "row justify-content-between">         
                            <div className = "" >
                                <NavLink to = "/" >
                                    <img src = { this.props.activeTab === "projectinfo" ? "../" + logoImage : logoImage } className = "projects_logo" ></img>
                                </NavLink>
                            </div>
                            <div className = "" >
                                <Navbar color="faded" dark className = "header__navbar">
                                    {this.renderNavs()}
                                </Navbar>  
                            </div>                       
                        </div>
                    </Container>
                </Container>
            </div>
        )
    }

}
    

export default HeaderComponent;


