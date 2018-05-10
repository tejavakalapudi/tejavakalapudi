
import React from "react";
import { startAddProject } from "../actions/projects";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Container, Col } from 'reactstrap';
import Header from "./HeaderNew";

class AddProject extends React.Component {

    state = {
        image: "",
        imageUrl: "",
        status: "completed",
        title: "",
        subTitle: "",
        overview: ""
    };

    handleImageUpload = (e) => {

        e.preventDefault();
        const reader = new FileReader();
        const image = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            image,
            imageUrl: reader.result
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
                thumbnailLocation: this.state.imageUrl,
                status: this.state.status 
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
                                                    placeholder="with a placeholder" 
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
                                                    placeholder="password placeholder" 
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
                                                    placeholder="password placeholder" 
                                                    onChange={ this.handleOverviewChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <FormText 
                                                    for="projectImage" 
                                                    color="warning" 
                                                    className="contact_text_format" 
                                                >
                                                    Image:
                                                </FormText>

                                                <Button color="dark" size="lg" className="contact_text_format disabled" >
                                                    <Input 
                                                        type="file" 
                                                        name="projectImage" 
                                                        id="projectImage" 
                                                        onChange={ this.handleImageUpload } 
                                                    />
                                                </Button>
                                                <FormText color="muted">
                                                    This is some placeholder block-level help text for the above input.
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

/*                
                { this.state.showForm &&  
                    <form onSubmit = { this.handleSubmit }>
                        <div> Project Title : </div>
                        <input type = "text" name = "name"/>

                        <div> Project Subtitle : </div>
                        <input type = "text" name = "subtitle"/>
                
                        <div> Project Overview : </div>
                        <textarea name = "overview"/>

                        <br />
                        <input type="file" onChange={ this.handleImageUpload } name = "projectImage" />
                        
                        <div> Project Status : </div>
                        <select value = "completed" onChange = { this.handleStatusChange } >
                            <option value = "completed" >Completed</option>
                            <option value = "ongoing" >Ongoing</option>
                        </select>

                        <br />
                        <button>Submit</button>
                    </form>  
                }
*/