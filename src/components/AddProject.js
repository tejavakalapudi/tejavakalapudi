
import React from "react";
import { addProject } from "../actions/projects";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddProject extends React.Component {

    state = {
        showForm : false,
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
            addProject( { 
                title: this.state.title, 
                subTitle: this.state.subTitle,
                overview: this.state.overview,
                imageLocation: this.state.imageUrl,
                status: this.state.status 
            }) 
        );

        //e.target.children.name.value = e.target.children.subtitle.value = e.target.children.overview.value = "";
        this.setState( () => ({ 
            showForm : false, 
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
                { this.props.authInfo.isAuthorized && 
                    <button onClick = { () => { this.setState( () => ( { showForm : true } ) ); }}> 
                        Add Project 
                    </button> 
                }

                { this.state.showForm &&  
                    <Form onSubmit = { this.handleSubmit }>
                    <FormGroup>
                        <Label for="projectTitle">Project Title:</Label>
                        <Input type="text" name="name" id="projectTitle" placeholder="with a placeholder" onChange={ this.handleTitleChange }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="projectSubtitle"> Project Subtitle:</Label>
                        <Input type="text" name="subtitle" id="projectSubtitle" placeholder="password placeholder" onChange={ this.handleSubTitleChange }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="projectOverview"> Project Overview:</Label>
                        <Input type="textarea" name="projectOverview" id="projectOverview" placeholder="password placeholder" onChange={ this.handleOverviewChange }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="projectImage">Image</Label>
                        <Input type="file" name="projectImage" id="projectImage" onChange={ this.handleImageUpload }/>
                        <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="projectStatus">Select</Label>
                        <Input type="select" name="projectStatus" id="projectStatus" onChange = { this.handleStatusChange }>
                            <option value = "completed" >Completed</option>
                            <option value = "ongoing" >Ongoing</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                    </Form>
                }

            </div>

        );
        
    };


};
const mapStateToProps = ( store ) => {

    return {
        authInfo : store.authInfo
    }

}

export default connect( mapStateToProps )( AddProject );

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