import React from "react";
import { 
    Button, 
    Row, 
    Col, 
    Container, 
    Jumbotron,
    Form,
    FormGroup, 
    Input,
    Label,
    FormText 
} from "reactstrap";
import Header from "./Header";
import axios from "axios";

import { MdRateReview, MdInfo, MdPeople, MdEventAvailable, MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/lib/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/lib/fa";

class ContactUsPage extends React.Component {

    state = {
        customerName : "",
        customerPhone : "",
        customerEmail : "",
        customerMessage : ""
    }

    sendEmail = (e) => {

        e.preventDefault();
        console.log( "Making axios request to sendemail route" );

        axios.get( "./sendemail",{
            params: {
              name: this.state.customerName,
              message : this.state.customerMessage,
              phone: this.state.customerPhone,
              email : this.state.customerEmail
            }
        })
        .then( response => { 

            console.log( "Email sent successfully!" );

        })
        .catch( error => {

            console.log( "Something went wrong while sending an email!" );

        });

    }

    handleCustomerName = (e) => {
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { customerName : e.target.value } ) );
    }
    handleCustomerEmail = (e) => {
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { customerEmail : e.target.value } ) );
    }
    handleCustomerPhone = (e) => {
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { customerPhone : e.target.value } ) );
    }
    handleCustomerMessage= (e) => {
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { customerMessage : e.target.value } ) );
    }
    
    render(){
        
        return(

            <div> 
                <div className = "body-container mx-auto">
                        
                    <Container>
                        
                        <Row className = "justify-content-center">
    
                            <div className = "col-lg-12 col-md-12">
    
                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_title"> Contact Us</h3>
                                </Row>
    
                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>

                                <Row className = "justify-content-center icon_bar" >

                                    <Col xs = "3" className = "icon_div">
                                        <MdRateReview size={ 70 }  color ="#da4d3c"/>
                                        <p className = "icon_text_format">Testimonials/Suggestions/Complaints</p>
                                    </Col>

                                    <Col xs = "3" className = "icon_div">
                                        <MdPeople size={ 70 } color ="#da4d3c"/>
                                        <p className = "icon_text_format">Talk Business</p>
                                    </Col>
                                    <Col xs = "3" className = "icon_div">
                                        <MdEventAvailable size={ 70 } color ="#da4d3c"/>
                                        <p className = "icon_text_format" >Schedule a visit</p>
                                    </Col>

                                </Row>

                                <Row className = "justify-content-center contact_form_div">
                                    <Col lg="6">
                                        <Form>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Name:
                                                </FormText>
                                                <Input type="text" name="text" id="examplename" placeholder="John Doe" className = "contact_input" onChange = { this.handleCustomerName }/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Email:
                                                </FormText>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="youremail@company.com" className = "contact_input" onChange = { this.handleCustomerEmail }/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Contact No:
                                                </FormText>
                                                <Input type="text" name="text" id="examplePassword" placeholder="+91-0000000000" className = "contact_input" onChange = { this.handleCustomerPhone }/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Message:
                                                </FormText>
                                                <Input type="textarea" name="text" id="exampleText" placeholder="Enter your message here" className = "contact_input_textarea" onChange = { this.handleCustomerMessage }/>
                                            </FormGroup>
                                            <p>
                                                <FormText color="muted">
                                                    We promise we won't share your information with anyone!
                                                </FormText>
                                            </p>
                                            <Row className = "justify-content-center">
                                                <FormGroup>
                                                    <Col>
                                                        <Button color="danger" size="lg" className="contact_text_format" onClick = { this.sendEmail } >Submit</Button>
                                                    </Col>
                                                </FormGroup>
                                            </Row>

                                        </Form> 
                                    </Col>
                                    <Col lg="4" >
                                        <Col className = "icon_div">
                                            <MdLocationOn size={40} color ="#ffc107"/>
                                            <p className = "contact_text_format">Panchayati Road, Reddy Avenues Colony, Nizampet Village, Hyderabad - 500090</p>
                                        </Col>
                                        <Col className = "icon_div" >
                                            <MdLocalPhone size={40} color ="#ffc107"/>
                                            <p className = "contact_text_format">(+91) 9966565411</p>
                                        </Col>
                                        <Col className = "icon_div">
                                            <MdEmail size={40} color ="#ffc107"/>
                                            <p className = "contact_text_format">sales@akruthiconstructions.com</p>
                                        </Col>

                                        <Col className = "icon_div">
                                            <a target="_blank" href="https://www.facebook.com/akruthiconstructions/">
                                                <FaFacebook size={40} color="#3B5998" />
                                            </a>
                        
                                            <a target="_blank" href="https://twitter.com/VakalapudiRavi1">
                                                <FaTwitter size={40} color="#1DA1F2" />
                                            </a>
                        
                                            <a target="_blank" href="https://www.linkedin.com/in/akruthi-constructions-developers-a6b58491/">
                                                <FaLinkedin size={40} color="#0077B5" />
                                            </a>
                        
                                            <a target="_blank" href="https://www.instagram.com/vakalapudiravikiran/">
                                                <FaInstagram size={40} color="#4c68d7" />
                                            </a>
                                        </Col>
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

export default ContactUsPage;