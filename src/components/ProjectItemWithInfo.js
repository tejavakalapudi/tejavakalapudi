import React from "react";
import { startRemoveProject } from "../actions/projects";
import { connect } from "react-redux";
import { TabContent, 
    TabPane, 
    Button, 
    ButtonGroup,
    Row, 
    Col,
    Container,
    Collapse,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';
import Specifications from "./Specifications";
import Header from "./Header";
import GoogleMapComponent from "./GoogleMap";
import { FaMinusSquare, FaEdit } from "react-icons/lib/fa";
import ScrollToTop from "./ScrollToTop";

class ProjectItemWithInfo extends React.Component {

    state = {
        activeTab: "1",
        showSpecs : false, 
        showBrochure : false,
        showFloorPlans : false,
        brochureDiv : {
            __html: `<object data=${ this.props.project.brochure } width="100%" height="100%" type="application/pdf" ></object>`
        }
    }

    toggle( tab ) {
        if ( this.state.activeTab !== tab ) {
          this.setState({
            activeTab: tab
          });
        }
    }

    toggleNavbar = ( activeTile ) =>{
        this.setState({
            showSpecs: activeTile === "specs",
            showBrochure: activeTile === "brochure",
            showFloorPlans: activeTile === "floorplans"
        });        
    }

    directToContactPage = ( e ) => {
        e.preventDefault();

        this.props.history.push( `/contact/${ this.props.project.title }` );

    }

    render(){

        return (
            <div>
                <ScrollToTop />
                <div className = "body-container mx-auto">

                    <Container>

                        { this.props.authInfo.isAuthorized && 

                            <Row className = "justify-content-between"> 
                                <Button 
                                    onClick = { 
                                        ( e ) => {
                                            this.props.dispatch( 
                                                startRemoveProject( { id : this.props.project.id, storageRefId : this.props.project.storageRefId } ) 
                                            ) 
                                        } 
                                    }
                                    
                                > 
                                    <FaMinusSquare size={30} />
                                </Button>
            
                                <Button 
                                    onClick = { 
                                        ( e ) => {
                                            this.props.history.push( `/editproject/${ this.props.project.id }` )
                                        } 
                                    }                                    
                                > 
                                    <FaEdit size={30} />
                                </Button>
                            </Row>
                        }

                        <Row className = "justify-content-center">

                            <div className = "col-lg-12 col-md-12">
                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_title"> { this.props.project.title } </h3>
                                </Row>

                                <p className = "project-item_status"> 
                                    Status :
                                    <span 
                                        className = { this.props.project.status === "ongoing" ? "text-success" : "text-danger"}
                                    > 
                                        {` ${ this.props.project.status }`}
                                    </span>
                                </p>
                                
                                <Row className = "justify-content-center">
                                    <Col lg="10" className = "project-item-info_imageContainer">
                                        <img 
                                            src= { this.props.project.imageLocation || this.props.project.thumbnailLocation } 
                                            alt= { this.props.project.title }
                                            className = "project-item-info_image"
                                        />
                                    </Col>

                                    <Col lg="11" className = "project-item-info_image">
                                        <p className = "project-item_subtitle"> 
                                            { this.props.project.subTitle }
                                        </p>
                                        <p className = "project-item_overview"> 
                                            { this.props.project.overview }
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>

                    <Row className = "justify-content-center project-item_navbar">

                        { this.props.project.specs && this.props.project.specs.length !== 0 &&
                            <Col lg = "3" className = "project-item_navbarTab" >
                                <a onClick = { () => { this.toggleNavbar( "specs" ) } } className = "project-item_navbarText"> 
                                    Specifications
                                </a> 
                            </Col>                       
                        }

                        { this.props.project.floorPlans && this.props.project.floorPlans.length !== 0 &&
                            <Col lg = "3" className = "project-item_navbarTab" >
                                <a onClick = { () => { this.toggleNavbar( "floorplans" ) } } className = "project-item_navbarText">
                                    Floor Plans 
                                </a>
                            </Col>
                        }

                        { this.props.project.brochure && this.props.project.brochure.length !== 0 &&
                            <Col lg = "3" className = "project-item_navbarTab" > 
                                <a onClick = { () => { this.toggleNavbar( "brochure" ) } } className = "project-item_navbarText">
                                    Brochure
                                </a>   
                            </Col>
                        }
                    </Row>

                    { this.state.showSpecs && 
                        <Row className = "justify-content-center project-item_specs_section" >
                            <Col xs = "12">
                                <Collapse isOpen={ this.state.showSpecs }>
                                    {
                                        this.props.project.specs &&
                                        <Specifications specs = { this.props.project.specs }/>
                                    }
                                </Collapse>
                            </Col>
                        </Row>
                    }

                    { this.state.showBrochure && this.props.project.brochure &&
                        <Row className = "justify-content-center project-item_specs_section" >
                            <Col md="9" xs = "12">
                                <Collapse isOpen={ this.state.showBrochure } >
                                    <div dangerouslySetInnerHTML={ this.state.brochureDiv } className = "project-item_brochure"/>
                                </Collapse>
                            </Col>
                        </Row>
                    }

                    { this.state.showFloorPlans &&
                        <Row className = "justify-content-center project-item_specs_section" >
                            <Col md="9" xs = "12">
                                <Collapse isOpen={ this.state.showFloorPlans } >
                                    {
                                        this.props.project.floorPlans && this.props.project.floorPlans.map( ( floorPlanObj ) => {
                                            
                                            return(                                             
                                                <img 
                                                    src= { floorPlanObj.floorPlanImg } 
                                                    alt= "Floor plans"
                                                    className = "project-item-info_image"
                                                />  
                                            );
                                           
                                        })
                                    }
                                </Collapse>
                            </Col>
                        </Row>
                    }
                    
                    {
                        this.props.project.amenities && 
                        
                        <Row className = "justify-content-center project-item_amenities_section">
                            <Col lg = "7" className = "project-item_amenities" >
                                <Col lg ="11">
                                    <p>  Amenities </p>
                                    <ul>
                                        { this.props.project.amenities.length > 0 && 
                                            this.props.project.amenities.map(( amenity ) => {
                                                
                                                return <li> { amenity }</li>
                        
                                            })
                                        }
                                    </ul>
                                </Col>
                            </Col>
                        </Row>
                    }

                    <Container>

                        { this.props.project.locationMapInfo &&                        
                            <Row className = "justify-content-center">
                                <div className = "col-lg-12 col-md-12">
                                    <Row className = "justify-content-center project-item_locationSection">
                                        <h3 className = "project-item_title"> Location </h3>
                                    </Row>
                                    <Row className = "justify-content-center">
                                        <div>
                                            <hr className = "projects_divider" />                               
                                        </div>
                                    </Row>
                                </div>
                            </Row>
                        }

                        { this.props.project.locationMapInfo && 
                            <GoogleMapComponent 
                                lat= {this.props.project.locationMapInfo[ 0 ]} 
                                lng= {this.props.project.locationMapInfo[ 1 ]}
                                title =  { this.props.project.title }
                                address = { this.props.project.address }
                            />                       
                        }            

                        <Row className = "justify-content-center project-item_contact">
                            <div className = "col-lg-12 col-md-12">
                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_title"> Interested ? </h3>
                                </Row>
                                <Row className = "justify-content-center">
                                    <Button color="danger" size="lg" onClick = {this.directToContactPage} >Contact Us</Button>
                                </Row>
                            </div>
                        </Row>
                        
                    </Container>
                    
                </div>
            </div> 
        )
    }

}

const mapStateToProps = ( store, props ) => {

    return {
        authInfo : store.authInfo,
        project : store.projects.find( ( project ) => project.id === props.match.params.id )
    }

}

export default connect( mapStateToProps )( ProjectItemWithInfo );