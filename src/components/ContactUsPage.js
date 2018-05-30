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
    FormText,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter  
} from "reactstrap";
import Header from "./Header";
import axios from "axios";

import { MdRateReview, MdInfo, MdPeople, MdEventAvailable, MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/lib/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/lib/fa";
import ScrollToTop from "./ScrollToTop";

class ContactUsPage extends React.Component {

    state = {
        name : "",
        phone : "",
        email : "",
        message : "",
        isOpen : false,
        modalMessage : "",
        nameRegexWarn : "",
        emailRegexWarn : "",
        phoneRegexWarn : ""
    }

    sendEmail = (e) => {

        e.preventDefault();
        console.log( "Making axios request to sendemail route" );

        this.setState( () => ({ 
            isOpen : true,
            modalMessage : "Please wait while we are sending an email on behalf of you!"
        }));

        axios.get( "./sendemail", {
            params: {
              name: this.state.name,
              message : this.state.message,
              phone: this.state.phone,
              email : this.state.email
            }
        })
        .then( response => { 

            console.log( "Email sent successfully!" );

            this.setState( () => ({ 
                isOpen : true,
                modalMessage : "Email sent successfully, we will get back to you ASAP!"
            }));

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";

        })
        .catch( error => {

            console.log( "Something went wrong while sending an email!" );

            this.setState( () => ({ 
                isOpen : true,
                modalMessage : "Something went wrong while sending an email. Please contact us on +91-9966565411"
            }));

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";

        });

    }

    handleCustomerName = (e) => {
        e.preventDefault();
        e.persist();

        const nameRegex = /^[a-zA-Z ]*$/;
        const inputValue = e.target.value;

        if( nameRegex.test( inputValue ) ){

            this.setState( () => ({ 
                name : e.target.value,
                nameRegexWarn : ""
            }));

        } else {

            this.setState( () => ( { nameRegexWarn : "Please use only alphabets" } ) );

        }
        
    }
    handleCustomerEmail = (e) => {
        e.preventDefault();
        e.persist();

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const inputValue = e.target.value;

        if( emailRegex.test( String( inputValue ).toLowerCase() ) ){
            
            this.setState( () => ({ 
                email : inputValue,
                emailRegexWarn : "" 
            }));

        } else {

            this.setState( () => ( { emailRegexWarn : "Please follow the universal email format!" } ) );

        }
       
        
    }
    handleCustomerPhone = (e) => {
        e.preventDefault();
        e.persist();
       
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        const inputValue = e.target.value;

        if( phoneRegex.test( inputValue ) ){

            this.setState( () => ({ 
                phone : inputValue,
                phoneRegexWarn : ""
            }));

        } else {

            this.setState( () => ( { phoneRegexWarn : "Please use the '+(code)**********' format! Ex: +919999999999 or +19876543210" } ) );

        }

        
    }
    handleCustomerMessage= (e) => {
        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { message : e.target.value } ) );
    }

    closeModal = () => {
        this.setState( () => ( { isOpen : false } ) );
    }

    enableSubmitButton = () => {
        
        if( ( this.state.name.length > 0 && this.state.nameRegexWarn.length === 0 ) &&
            this.state.message.length > 0 && 
            (( this.state.phone.length > 0 && this.state.phoneRegexWarn.length === 0 ) || ( this.state.email.length > 0 && this.state.emailRegexWarn.length === 0 )) 
        ){
            return true;
        }

        return false;

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
                                    <h3 className = "project-item_title"> Contact Us</h3>
                                </Row>
    
                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>

                                <Row className = "justify-content-center icon_bar" >

                                    <Col xs = "4" lg="3" className = "icon_div">
                                        <MdRateReview size={ 70 }  color ="#da4d3c"/>
                                        <p className = "icon_text_format">Testimonials/Suggestions/Complaints</p>
                                    </Col>

                                    <Col xs = "4" lg="3" className = "icon_div">
                                        <MdPeople size={ 70 } color ="#da4d3c"/>
                                        <p className = "icon_text_format">Talk Business</p>
                                    </Col>
                                    <Col xs = "4" lg="3" className = "icon_div">
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
                                                <Input type="text" name="text" id="name" placeholder="John Doe" className = "contact_input" onChange = { this.handleCustomerName }/>
                                                <FormText color="danger">
                                                    {this.state.nameRegexWarn}
                                                </FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Email:
                                                </FormText>
                                                <Input type="email" name="email" id="email" placeholder="youremail@company.com" className = "contact_input" onChange = { this.handleCustomerEmail }/>
                                                <FormText color="danger">
                                                    {this.state.emailRegexWarn}
                                                </FormText>
                                            </FormGroup>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Contact No:
                                                </FormText>
                                                <Input type="text" name="text" id="phone" placeholder="+910000000000" className = "contact_input" onChange = { this.handleCustomerPhone }/>
                                                <FormText color="danger">
                                                    {this.state.phoneRegexWarn}
                                                </FormText>                                            
                                            </FormGroup>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Message:
                                                </FormText>
                                                <Input type="textarea" name="text" id="message" placeholder="Enter your message here" className = "contact_input_textarea" onChange = { this.handleCustomerMessage }/>
                                            </FormGroup>
                                            <p>
                                                <FormText color="muted">
                                                    We promise we won't share your information with anyone!
                                                </FormText>
                                            </p>
                                            <Row className = "justify-content-center">
                                                <FormGroup>
                                                    <Col>
                                                        <Button 
                                                            color="danger" 
                                                            size="lg" 
                                                            className="contact_text_format" 
                                                            onClick = { this.sendEmail }
                                                            disabled = { !this.enableSubmitButton() }
                                                        >
                                                            Submit
                                                        </Button>
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

                            <Modal isOpen={ this.state.isOpen } toggle={ this.closeModal } className = "modal-dialog modal-sm">
                                <ModalHeader toggle={ this.closeModal }>Thank you for contacting us!</ModalHeader>
                                <ModalBody className = "mx-auto modal_text_format" >
                                    { this.state.modalMessage }
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={ this.closeModal }>Close</Button>
                                </ModalFooter>
                            </Modal>
                        
                        </Row>
    
                    </Container>
    
                </div>
            </div>
    
        );

    };
};

export default ContactUsPage;