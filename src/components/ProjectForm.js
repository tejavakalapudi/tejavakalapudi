
import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Container, Col } from 'reactstrap';
import Header from "./Header";
import uuid from "uuid";
import { storageRef } from "../firebase/firebase";

class ProjectForm extends React.Component {

    state = {
        title: this.props.project && this.props.project.title ? this.props.project.title : "",
        subTitle: this.props.project && this.props.project.subTitle ? this.props.project.subTitle : "",
        overview: this.props.project && this.props.project.overview ? this.props.project.overview : "",
        address : this.props.project && this.props.project.address ? this.props.project.address : "",
        locationMapInfo: this.props.project && this.props.project.locationMapInfo ? this.props.project.locationMapInfo : [ 17.516247, 78.385560 ],
        specs : this.props.project && this.props.project.specs ? this.props.project.specs : [],
        amenities : this.props.project && this.props.project.amenities ? this.props.project.amenities : [],
        floorPlans : this.props.project && this.props.project.floorPlans ? this.props.project.floorPlans : [],
        brochure : this.props.project && this.props.project.brochure ? this.props.project.brochure : "",
        createdOn : this.props.project && this.props.project.createdOn ? this.props.project.createdOn : 0,
        thumbnailLocation : this.props.project && this.props.project.thumbnailLocation ? this.props.project.thumbnailLocation : "",
        imageLocation : this.props.project && this.props.project.imageLocation ? this.props.project.imageLocation : "",
        status: this.props.project && this.props.project.status ? this.props.project.status : "ongoing"
    };

    storageRefId = this.props.project && this.props.project.storageRefId ? this.props.project.storageRefId : uuid();

    projectRef = storageRef.child( `projects/${ this.storageRefId }` );

    handleSubmit = ( e ) =>  {

        e.preventDefault();

        if( this.state.title.length !== 0 ){
            this.props.onSubmit(
                { 
                    title: this.state.title, 
                    subTitle: this.state.subTitle,
                    overview: this.state.overview,
                    brochure: this.state.brochure,
                    status: this.state.status,
                    address: this.state.address,
                    createdOn: this.state.createdOn || Date.now(),
                    specs: this.state.specs,
                    locationMapInfo: this.state.locationMapInfo,
                    thumbnailLocation: this.state.thumbnailLocation,
                    imageLocation : this.state.imageLocation,
                    floorPlans : this.state.floorPlans,
                    storageRefId : this.storageRefId
                }
            );
        }

        //https://pdfobject.com/static.html        

    };

    fileUploadToStorage = ( image, childname, callback ) => {

        console.log( `${childname} upload request` );

        this.projectRef.child( childname ).put( image ).then( ( snapshot ) => {

            console.log( `${childname} upload request - Completed` );

            snapshot.ref.getDownloadURL().then( function( downloadURL ) {
                
                console.log( `${childname} upload request - setting downloadURL` );

                callback( downloadURL );

            });

        }).catch( (err) => {

            console.log( "Thumbnail Image Uploaded failed ", err );

        });

    };

    handleThumbnailImgUpload = ( e ) => {

        e.preventDefault();

        const image = e.target.files[0];

        this.fileUploadToStorage( image, "Thumbnail-Image", ( url ) => {
            this.setState({
                thumbnailLocation: url
            });
        });

    };

    handleLandscapeImgUpload = (e) => {

        e.preventDefault();
        const image = e.target.files[0];

        this.fileUploadToStorage( image, "Landscape-Image", ( url ) => {
            this.setState({
                imageLocation: url
            });
        });

    };

    handleFloorPlansUpload = ( e ) => {

        e.preventDefault();
        const files = e.target.files;

        for ( const file in files ){

            if ( /\.(jpe?g|png|gif)$/i.test( files[ file ].name ) ) {
                
                const uniqueId = uuid();

                this.fileUploadToStorage( files[ file ], `floorPlan-${ uniqueId }`, ( url ) => {
                    
                    const floorPlanObj = { floorPlanImg : url, id : `floorPlan-${ uniqueId }` }
                    this.setState({
                        floorPlans : [ ...this.state.floorPlans, floorPlanObj ]
                    });

                });

            } 

        }

    };

    deleteImage = ( id ) => {

        this.setState({
            floorPlans : this.state.floorPlans.filter( obj  =>  obj.id !== id )
        });

    }

    handleBrochureUpload = (e) => {

        e.preventDefault();
        const reader = new FileReader();
        const pdfFile = e.target.files[0];

        this.fileUploadToStorage( pdfFile, "Brochure", ( url ) => {
            this.setState({
                brochure: url
            });
        });

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

    handleMapLocationChange = ( e ) => {
        
        e.preventDefault();
        e.persist();

        const locationSplit = e.target.value.split( "," );
        
        this.setState( () => ( { locationMapInfo : [ Number( locationSplit[ 0 ] ), Number( locationSplit[ 1 ] ) ] } ) );
  
    };

    keyUpEvent = ( e ) => {
        // Cancel the default action, if needed
        debugger;
        e.preventDefault();
        // Number 13 is the "Enter" key on the keyboard
        if ( e.keyCode === 13 ) {
          // Trigger the button element with a click
            if( e.target && e.target.id === "specInput" ){

                this.updateSpecs( e );

            }

            if( e.target && e.target.id === "amenityInput" ){

                this.updateAmenities( e );

            }

        }

    };

    updateSpecs = ( e ) => {

        if( e.target.value ){

            const inputStringSplit = e.target.value.split( ":" );
            const newSpecObj = {};
            newSpecObj[ inputStringSplit[ 0 ][ 0 ].toUpperCase() + inputStringSplit[ 0 ].substr( 1 ) ] = inputStringSplit[ 1 ].trim();

            this.setState({
                specs : [ ...this.state.specs, newSpecObj ]
            });

            const specInputDiv = document.getElementById( "specInput" );

            specInputDiv.removeEventListener( "keyup", this.keyUpEvent );
            specInputDiv.value = "";
        }

    };

    updateAmenities = ( e ) => {

        if( e.target.value ){

            this.setState({
                amenities : [ ...this.state.amenities, e.target.value ]
            });

            const amenityInputDiv = document.getElementById( "amenityInput" );

            amenityInputDiv.removeEventListener( "keyup", this.keyUpEvent );
            amenityInputDiv.value = "";
        }

    };

    addEventListener = () => {

        document.getElementById( "specInput" ).addEventListener( "keyup", this.keyUpEvent );
        document.getElementById( "amenityInput" ).addEventListener( "keyup", this.keyUpEvent );

    };

    render(){

        return( 

            <div>

                <div className = "body-container mx-auto">
                                    
                    <Container>
                    
                        <Row className = "justify-content-center">

                            <div className = "col-lg-12 col-md-12">

                                <Row className = "justify-content-center">
                                {
                                    this.props.project ? <h3 className = "project-item_title"> Edit Project</h3> : <h3 className = "project-item_title"> New Project</h3>
                                }
                                </Row>

                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>
                                
                                <Row className = "justify-content-center buyersguide_box contact_form_div">
                                    <Col xs="10" >
                                        <Form onSubmit = { (e) => { e.preventDefault(); } }>

                                            {/* Title Section */}
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
                                                    value = { this.state.title } 
                                                    placeholder="Ex: Nandanavanam" 
                                                    onChange={ this.handleTitleChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            {/* SubTitle Section */}
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
                                                    value = { this.state.subTitle }  
                                                    placeholder="Ex: 2 & 3 BHK, GHMC Approved Project"
                                                    onChange={ this.handleSubTitleChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            {/* Overview Section */}
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
                                                    value = { this.state.overview }  
                                                    placeholder="Overview" 
                                                    onChange={ this.handleOverviewChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            {/* Address Section */}
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
                                                    value = { this.state.address }  
                                                    placeholder="Ex: 59, Blooming Dale Road, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090, India" 
                                                    onChange={ this.handleAddressChange } 
                                                    className = "contact_input"
                                                />
                                            </FormGroup>

                                            {/* Location Co-Ordinates Section */}
                                            <FormGroup>
                                                <FormText 
                                                    for="mapCoOrdinates" 
                                                    color="warning" 
                                                    className="contact_text_format"
                                                > 
                                                    Map Co-Ordinates:
                                                </FormText>
                                                <Input 
                                                    type="text" 
                                                    name="locationMapInfo" 
                                                    id="mapCoOrdinates"
                                                    value = { this.state.locationMapInfo[ 0 ].toString() + " , " + this.state.locationMapInfo[ 1 ].toString() }  
                                                    placeholder="17.516247, 78.385560 "
                                                    onChange={ this.handleMapLocationChange } 
                                                    className = "contact_input"
                                                />
                                                <FormText color="muted">
                                                    Use Google Maps to select a location. Right click on the location to click 'whats here'. It should show you co-ordinates in the bottom.
                                                </FormText>
                                            </FormGroup>                                            

                                            {/* Specifications Section */}
                                            <FormGroup>
                                                <FormText 
                                                    for="projectSpecs" 
                                                    color="warning" 
                                                    className="contact_text_format"
                                                > 
                                                    Specifications:
                                                </FormText>

                                                <Input
                                                    type="text" 
                                                    name="spec" 
                                                    id="specInput"
                                                    placeholder="Specification Name : Specification Detail" 
                                                    className = "contact_input"
                                                    onChange = { this.addEventListener }
                                                />

                                                <FormText color="muted">
                                                    Enter each specification in given format and click "Enter"
                                                </FormText>

                                                {
                                                    this.state.specs.map( ( spec ) => {
                                                        
                                                        return ( <span class="badge badge-secondary">{JSON.stringify(spec)}</span> );

                                                    })

                                                }

                                            </FormGroup>

                                            {/* Amenities Section */}
                                            <FormGroup>
                                                <FormText 
                                                    for="projectAmenities" 
                                                    color="warning" 
                                                    className="contact_text_format"
                                                > 
                                                    Amenities:
                                                </FormText>

                                                <Input
                                                    type="text" 
                                                    name="amenity" 
                                                    id="amenityInput"
                                                    placeholder="Amenity name" 
                                                    className = "contact_input"
                                                    onChange = { this.addEventListener }
                                                />

                                                <FormText color="muted">
                                                    Enter each Amenity name and click "Enter"
                                                </FormText>

                                                {
                                                    this.state.amenities.map( ( amenity ) => {
                                                        
                                                        return ( <span class="badge badge-secondary">{ JSON.stringify( amenity ) }</span> );

                                                    })

                                                }

                                            </FormGroup>

                                            {/* Thumbnail Image Section */}
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

                                                {
                                                    this.state.thumbnailLocation.length !== 0 && 
                                                    <img 
                                                        src= { this.state.thumbnailLocation } 
                                                        alt= "Thumbnail Image"
                                                        width=  "80px" 
                                                        height= "70px"
                                                    />
                                                }

                                            </FormGroup>

                                            {/* Landscape Image Section */}
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

                                                {
                                                    this.state.imageLocation.length !== 0 && 
                                                    <img 
                                                        src= { this.state.imageLocation } 
                                                        alt= "Landscape Image"
                                                        width=  "100px" 
                                                        height= "70px"
                                                    />
                                                }

                                            </FormGroup>

                                            {/* Floor Plans Section */}
                                            <FormGroup>
                                                <FormText 
                                                    for="projectFloorPlans" 
                                                    color="warning" 
                                                    className="contact_text_format" 
                                                >
                                                    Floor Plans:
                                                </FormText>

                                                <Button color="dark" size="lg" className="contact_text_format disabled" >
                                                    <Input 
                                                        type="file" 
                                                        name="projectFloorPlans" 
                                                        id="projectFloorPlans" 
                                                        onChange={ this.handleFloorPlansUpload } 
                                                        multiple
                                                    />
                                                </Button>
                                                <FormText color="muted">
                                                    These images are used to display in 'Floor Plans' section in each project info.
                                                </FormText>
                                                <Container>
                                                <Row>
                                                {
                                                    this.state.floorPlans.length !== 0 && this.state.floorPlans.map( ( floorPlanObj ) => {
                                                        
                                                        return(
                                                            <div>                                             
                                                                <img 
                                                                    src= { floorPlanObj.floorPlanImg } 
                                                                    alt= "Floor plans"
                                                                    width=  "70px" 
                                                                    height= "100px"
                                                                />
                                                                <button 
                                                                    type="button" 
                                                                    class="close" 
                                                                    aria-label="Close" 
                                                                    onClick = { () => { this.deleteImage( floorPlanObj.id ) } } 
                                                                    style = {{ color : "white", padding: "0 0.2rem"}}
                                                                >
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>  
                                                        );
                                                       
                                                    })
                                                }
                                                </Row>
                                                </Container>
                                            </FormGroup>

                                            {/* Brochure PDF Section */}
                                            <FormGroup>
                                                <FormText 
                                                    for="projectBrochure" 
                                                    color="warning" 
                                                    className="contact_text_format" 
                                                >
                                                    Project's Brochure:
                                                </FormText>

                                                <Button color="dark" size="lg" className="contact_text_format disabled" >
                                                    <Input 
                                                        type="file" 
                                                        name="projectBrochure" 
                                                        id="projectBrochure" 
                                                        onChange={ this.handleBrochureUpload } 
                                                    />
                                                </Button>
                                                <FormText color="muted">
                                                    This pdf file is used to display brochure in project info section.
                                                </FormText>
                                            </FormGroup>                                            

                                            {/* Status Section */}
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
                                                    value = { this.state.status }  
                                                    onChange = { this.handleStatusChange } 
                                                    className = "contact_input"
                                                >
                                                    <option value = "ongoing" >Ongoing</option>
                                                    <option value = "completed" >Completed</option>
                                                </Input>
                                            </FormGroup>

                                            <Button color="danger" size="lg" className="contact_text_format" onClick = { this.handleSubmit } >Submit</Button>
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

export default ProjectForm;

// Use https://github.com/jsdir/react-ladda for upload button
// https://github.com/instructure-react/react-select-box for select box
// https://github.com/andreypopp/react-textarea-autosize for text area
// https://github.com/alexkuz/react-input-enhancements for input enhancements