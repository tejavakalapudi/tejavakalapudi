import React from "react";
import { Navbar, Nav, NavItem, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import logoImage from "../../public/images/Logo5.png";

const HeaderComponent = ( props ) => (
    
    <Container className = "header" >
        <div className = "row justify-content-between">         
            <div className = "" >
                <NavLink to = "/" >
                    <img src = { props.activeTab === "projectinfo" ? "../" + logoImage : logoImage } className = "projects_logo" ></img>
                </NavLink>
            </div>

            <Navbar color="faded" dark className = "header__navbar">
                <Nav vertical>
                
                    {
                        props.activeTab !== "home" &&
                        <NavItem className = "projects_navitem">
                            <NavLink to = "/" exact={true} className = "navlink navlink-right">Home</NavLink>
                        </NavItem>
                    }

                    {
                        props.activeTab !== "projects" &&
                        <NavItem className = "projects_navitem">
                            <NavLink to = "/projects" className = "navlink navlink-right">Projects</NavLink>
                        </NavItem>
                    }
                    {
                        props.activeTab !== "buyersguide" && props.activeTab !== "projectinfo" &&
                        <NavItem className = "projects_navitem">
                            <NavLink to = "/buyersguide" className = "navlink navlink-right">Buyers Guide</NavLink>
                        </NavItem>

                    }

                    {
                        props.activeTab !== "contact" && 
                    <NavItem className = "projects_navitem">
                        <NavLink to = "/contactus" className = "navlink navlink-right" >Contact</NavLink>
                    </NavItem>
                    }
                </Nav>
            </Navbar>

        </div>
    </Container>
);

export default HeaderComponent;