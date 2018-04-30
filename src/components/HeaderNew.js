import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logoImage from "../../public/images/logo7.png";

const HeaderComponent = ( props ) => (

    <div className = "row justify-content-between"> 
    
        <div className = "" >
            <img src = {logoImage} className = "logo projects_logo" ></img>
        </div>

        <Navbar color="faded" dark>
            <Nav vertical>
            
                {
                    props.activeTab !== "home" &&
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/" activeClassName = "is-active" exact={true} className = "navlink navlink-right">HOME</NavLink>
                    </NavItem>
                }

                {
                    props.activeTab !== "projects" &&
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/projects" activeClassName = "is-active" className = "navlink navlink-right">PROJECTS</NavLink>
                    </NavItem>
                }
                {
                    props.activeTab !== "buyersguide" && 
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/buyersguide" activeClassName = "is-active" className = "navlink navlink-right">BUYERS GUIDE</NavLink>
                    </NavItem>

                }

                <NavItem className = "projects_navitem">
                    <NavLink to = "/contactus" activeClassName = "is-active" className = "navlink navlink-right" >CONTACT</NavLink>
                </NavItem>
            </Nav>
        </Navbar>

    </div>
);

export default HeaderComponent;