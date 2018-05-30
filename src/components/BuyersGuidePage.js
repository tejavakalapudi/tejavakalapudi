import React from "react";
import { 
    Button, 
    Row, 
    Col, 
    Container, 
    Jumbotron, 
    Navbar, 
    Nav, 
    NavItem,
    TabContent, 
    TabPane 
} from "reactstrap";
import HomeLoansTab from "./HomeLoans";
import VastuTab from "./VastuSection";
import NriLoansTab from "./NRILoans";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

class BuyersGuidePage extends React.Component {
    
    state = {
        activeTab : "1"
    }

    toggle = ( tab ) => {

        if ( this.state.activeTab !== tab ) {

            this.setState({
                activeTab: tab
            });

        }

    }

    returnActiveClass = ( tab ) => {

        if( this.state.activeTab === tab ){
            return "active is-active bg-warning";
        } else {
            return "bg-light";
        }

    }
    
    render(){
        
        return(

            <div> 
                <ScrollToTop />
                <div className = "body-container mx-auto">
                            
                    <Container>
                        
                        <Row className = "justify-content-center">
    
                            <div className = "col-lg-12 col-md-12">
    
                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_title"> Buyers Guide</h3>
                                </Row>
    
                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>
                                
                                <Row className = "justify-content-center buyersguide_box">
                                    <Col lg="3" className = "buyersguide_sidebar">
                                        <Row className = "justify-content-center">
                                            <Nav tabs vertical className = "buyersguide_navbar">

                                                <NavItem className = " buyerguide_navtab">
                                                    <a 
                                                        className = {`nav-link ${this.returnActiveClass("1")} buyerguide_navlink `}
                                                        onClick={ () => { this.toggle( "1" ); } }
                                                    >
                                                        Home Loans
                                                    </a>
                                                </NavItem>

                                                <NavItem className = " buyerguide_navtab">
                                                    <a 
                                                        className = {`nav-link ${this.returnActiveClass("2")} buyerguide_navlink `}
                                                        onClick={ () => { this.toggle( "2" ); } }
                                                    >
                                                        Vastu
                                                    </a>
                                                </NavItem>

                                                <NavItem className = "buyerguide_navtab">
                                                    <a
                                                        className = {`nav-link ${this.returnActiveClass("3")} buyerguide_navlink `}
                                                        onClick={ () => { this.toggle( "3" ); } }                                            
                                                    >
                                                        NRI Loans
                                                    </a>
                                                </NavItem>
                                            </Nav>
                                        </Row>
                                    </Col>

                                    <Col lg="9" className = "buyersguide__content">
                                        <Row className = "justify-content-center">
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="1">
                                                    <HomeLoansTab />
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <VastuTab />
                                                </TabPane>
                                                <TabPane tabId="3">
                                                    <NriLoansTab />
                                                </TabPane>
                                            </TabContent>
                                        </Row>
                                    </Col>
                                </Row>
                                {
                                    //https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example
                                }
    
                            </div>
    
                        </Row>
    
                    </Container>
    
                </div>
            </div>
    
        );

    };
};

export default BuyersGuidePage;