
import React from "react";
import { startAddProject } from "../actions/projects";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Container, Col } from 'reactstrap';
import Header from "./Header";

class AddProject extends React.Component {

    state = {
        title: "",
        subTitle: "",
        overview: "",
        address : "",
        locationMapInfo: [ 17.516247, 78.385560 ],
        specs : "",
        amenities : "",
        brochure : "",
        createdOn : 0,
        thumbnailImageUrl : "",
        landscapeImageUrl : "",
        status: "ongoing"
    };

    handleThumbnailImgUpload = (e) => {

        e.preventDefault();
        const reader = new FileReader();
        const image = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            thumbnailImageUrl: reader.result
          });

        }

        reader.readAsDataURL( image );

    };

    handleLandscapeImgUpload = (e) => {

        e.preventDefault();
        const reader = new FileReader();
        const image = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            landscapeImageUrl: reader.result
          });

        }

        reader.readAsDataURL( image );

    };

    handleSubmit = (e) =>  {

        e.preventDefault();

        this.props.dispatch( 
            startAddProject( { 
                title: this.state.title, 
                subTitle: this.state.subTitle,
                overview: this.state.overview,
                thumbnailLocation: this.state.thumbnailImageUrl,
                imageLocation: this.state.landscapeImageUrl,
                status: this.state.status,
                address: this.state.address,
                createdOn: Date.now()
            }) 
        );

        //e.target.children.name.value = e.target.children.subtitle.value = e.target.children.overview.value = "";
        this.setState( () => ({ 
            imageUrl : "",
            title: "",
            subTitle: "",
            overview: "" 
        }));
        

    };

    handleStatusChange = ( e ) => {
        
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { status : e.target.value } ) );
  
    };

    handleTitleChange = ( e ) => {
        
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { title : e.target.value } ) );
  
    };

    handleSubTitleChange = ( e ) => {
        
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { subTitle : e.target.value } ) );
  
    };

    handleOverviewChange = ( e ) => {
        
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { overview : e.target.value } ) );
  
    };

    handleAddressChange = ( e ) => {
        
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { address : e.target.value } ) );
  
    };

    handleSpecsChange = ( e ) => {
        
        e.preventDefault();
        e.persist();

        console.log( "Ravi", e );
       
        //this.setState( () => ( { address : e.target.value } ) );
  
    };

    render(){

        return( 

            <div>

                <div className = "buyers-guide-container mx-auto">
                                    
                    <Container>
                        
                        <Header activeTab = "buyersguide"/>
                        
                        <Row className = "justify-content-center">

                            <div className = "col-lg-12 col-md-12">

                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_title"> Add a New Project</h3>
                                </Row>

                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>
                                
                                <Row className = "justify-content-center buyersguide_box contact_form_div">
                                    <Col xs="10" >
                                        <Form onSubmit = { this.handleSubmit }>
                                        
                                            <FormGroup>
                                                <FormText 
                                                    for="projectTitle" 
                                                    color="warning" 
                                                    className="contact_text_format" 
                                                >
                                                    Project Title:
                                                </FormText>
                                                <Input 
                                                    type="text" 
                                                    name="name" 
                                                    id="projectTitle" 
                                                    placeholder="Ex: Nandanavanam" 
                                                    onChange={ this.handleTitleChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectSubtitle" 
                                                    color="warning" 
                                                    className="contact_text_format"
                                                > 
                                                    Project Subtitle:
                                                </FormText>
                                                <Input 
                                                    type="text" 
                                                    name="subtitle" 
                                                    id="projectSubtitle" 
                                                    placeholder="Ex: 2 & 3 BHK, GHMC Approved Project"
                                                    onChange={ this.handleSubTitleChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectOverview" 
                                                    color="warning" 
                                                    className="contact_text_format"
                                                > 
                                                    Project Overview:
                                                </FormText>
                                                <Input 
                                                    type="textarea" 
                                                    name="projectOverview" 
                                                    id="projectOverview" 
                                                    placeholder="Overview" 
                                                    onChange={ this.handleOverviewChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectAddress" 
                                                    color="warning" 
                                                    className="contact_text_format"
                                                > 
                                                    Address:
                                                </FormText>
                                                <Input 
                                                    type="text" 
                                                    name="address" 
                                                    id="projectAddress" 
                                                    placeholder="Ex: 59, Blooming Dale Road, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090, India" 
                                                    onChange={ this.handleAddressChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectSpecs" 
                                                    color="warning" 
                                                    className="contact_text_format"
                                                > 
                                                    Specifications:
                                                </FormText>
                                                <Input multiple
                                                    type="tags" 
                                                    name="specs" 
                                                    id="projectSpecs" 
                                                    placeholder="Ex: 59, Blooming Dale Road, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090, India" 
                                                    onChange={ this.handleSpecsChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectThumbnailImage" 
                                                    color="warning" 
                                                    className="contact_text_format" 
                                                >
                                                    Project's Thumbnail Image:
                                                </FormText>

                                                <Button color="dark" size="lg" className="contact_text_format disabled" >
                                                    <Input 
                                                        type="file" 
                                                        name="projectThumbnailImage" 
                                                        id="projectThumbnailImage" 
                                                        onChange={ this.handleThumbnailImgUpload } 
                                                    />
                                                </Button>
                                                <FormText color="muted">
                                                    This image is used to display on "Projects" tab.
                                                </FormText>
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectLandscapeImage" 
                                                    color="warning" 
                                                    className="contact_text_format" 
                                                >
                                                    Project's Landscape Image:
                                                </FormText>

                                                <Button color="dark" size="lg" className="contact_text_format disabled" >
                                                    <Input 
                                                        type="file" 
                                                        name="projectLandscapeImage" 
                                                        id="projectLandscapeImage" 
                                                        onChange={ this.handleLandscapeImgUpload } 
                                                    />
                                                </Button>
                                                <FormText color="muted">
                                                    This image is used to as a landscape image in Project's info.
                                                </FormText>
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectStatus" 
                                                    color="warning" 
                                                    className="contact_text_format" 
                                                >
                                                    Project Status:
                                                </FormText>
                                                <Input 
                                                    type="select" 
                                                    name="projectStatus" 
                                                    id="projectStatus" 
                                                    onChange = { this.handleStatusChange } 
                                                    className = "contact_input"
                                                >
                                                    <option value = "completed" >Completed</option>
                                                    <option value = "ongoing" >Ongoing</option>
                                                </Input>
                                            </FormGroup>

                                            <Button color="danger" size="lg" className="contact_text_format" >Submit</Button>
                                        </Form>
                                    </Col>
                                </Row>

                            </div>

                        </Row>
                    </Container>
                </div>
            </div>

        );
        
    };

};

export default connect()( AddProject );

// Use https://github.com/jsdir/react-ladda for upload button
// https://github.com/instructure-react/react-select-box for select box
// https://github.com/andreypopp/react-textarea-autosize for text area
// https://github.com/alexkuz/react-input-enhancements for input enhancements