import React from "react";
import { connect } from "react-redux";
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

    state = {
        headerClass : "header-container mx-auto"
    }

    isMobileDevice = () => {
        return ( typeof window.orientation !== "undefined" ) || ( navigator.userAgent.indexOf( 'IEMobile' ) !== -1 );
    };

    renderMenuDropdown = () => (
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

    renderMenuBar = () => (
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

    renderNavs = () => {

        if( this.isMobileDevice() ){

            return this.renderMenuDropdown();

        } else {

            return this.renderMenuBar();

        }

    }

    render(){
        
        window.onscroll = () => {

            var header = document.getElementById("myHeader");
            var sticky = header && header.offsetTop;

            if( this.isMobileDevice() ){

                if ( ( window.pageYOffset > sticky ) ) {

                    this.setState({
                        headerClass : "header-container mx-auto sticky"
                    });
        
                } else {
        
                    this.setState({
                        headerClass : "header-container mx-auto"
                    });
        
                }

            }

        };

        return(
            <div id="myHeader" className = {this.state.headerClass}>
                <Container>
                    <Container>
                        <div className = "row justify-content-between">         
                            <div className = "" >
                                <NavLink to = "/" >
                                    <img src = { this.props.projectInfoPage ? "../" + logoImage : logoImage } className = "projects_logo" ></img>
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


