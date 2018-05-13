import React from "react";
import { Navbar, Nav, NavItem, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import logoImage from "../../public/images/Logo7.png";

const HeaderComponent = ( props ) => (
    
    <Container className = "header" >
        <div className = "row justify-content-between">         
            <div className = "" >
                <NavLink to = "/" >
                    <img src = { props.activeTab === "projectinfo" ? "../" + logoImage : logoImage } className = "logo projects_logo" ></img>
                </NavLink>
            </div>

            <Navbar color="faded" dark className = "header__navbar">
                <Nav vertical>
                
                    {
                        props.activeTab !== "home" &&
                        <NavItem className = "projects_navitem">
                            <NavLink to = "/" activeClassName = "is-active" exact={true} className = "navlink navlink-right">Home</NavLink>
                        </NavItem>
                    }

                    {
                        props.activeTab !== "projects" &&
                        <NavItem className = "projects_navitem">
                            <NavLink to = "/projects" activeClassName = "is-active" className = "navlink navlink-right">Projects</NavLink>
                        </NavItem>
                    }
                    {
                        props.activeTab !== "buyersguide" && props.activeTab !== "projectinfo" &&
                        <NavItem className = "projects_navitem">
                            <NavLink to = "/buyersguide" activeClassName = "is-active" className = "navlink navlink-right">Buyers Guide</NavLink>
                        </NavItem>

                    }

                    {
                        props.activeTab !== "contact" && 
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/contactus" activeClassName = "is-active" className = "navlink navlink-right" >Contact</NavLink>
                    </NavItem>
                    }
                </Nav>
            </Navbar>

        </div>
    </Container>
);

export default HeaderComponent;