import React from "react";
import { checkUserAuth } from "../actions/auth";
import { connect } from "react-redux";
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Container, 
    Row, 
    Col, 
    Form, 
    FormGroup, 
    FormText, 
    Input 
} from "reactstrap";

class AdminPage extends React.Component {

    state = {
        isOpen : true,
        userName : "",
        password : ""
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

        this.props.history.push( "/" );
    }

    onSubmit = ( e ) => { 

        e.preventDefault();

        this.props.dispatch( 
            checkUserAuth( { 
                userName: this.state.userName,
                password: this.state.password
            }) 
        ); 

        this.setState({
            userName : "",
            password : ""
        });
    }
    
    handleUserNameChange = ( e ) => {

        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { userName : e.target.value } ) );

    }

    handlePasswordChange = ( e ) => {

        e.preventDefault();
        e.persist();
       
        this.setState( () => ( { password : e.target.value } ) );

    }


    render(){
        return ( 
            <div className = "body-container" >

                <Container>
                    <Container>
                        <Row className = "justify-content-center">

                            <div className = "col-lg-12 col-md-12">

                                <Row className = "justify-content-center">
                                    <h3 className = "project-item_overview"> Please login to get access to Admin Rights!</h3>
                                </Row>

                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>

                                <Row className = "justify-content-center">
                                    <Col lg="6" className="admin_form_div">
                                        <Form onSubmit = { this.onSubmit }>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    User:
                                                </FormText>
                                                <Input type="text" name = "userName" value = { this.state.userName } placeholder="John Doe" className = "contact_input" onChange={ this.handleUserNameChange } />
                                            </FormGroup>
                                            <FormGroup>
                                                <FormText color="warning" className="contact_text_format" >
                                                    Password:
                                                </FormText>
                                                <Input type="password" name="password" value = { this.state.password } placeholder="password" className = "contact_input" onChange={ this.handlePasswordChange } />
                                            </FormGroup>
                                            <Row className = "justify-content-center">
                                                <FormGroup>
                                                    <Col>
                                                        <Button color="danger" size="lg" className="contact_text_format" >Submit</Button>
                                                    </Col>
                                                </FormGroup>
                                            </Row>

                                        </Form> 
                                    </Col>   
                                </Row>

                                {this.props.authInfo.isAuthorized && 

                                    <Modal isOpen={ this.state.isOpen } toggle={ this.toggle } className = "modal-dialog modal-sm">
                                        <ModalHeader toggle={ this.toggle }>Congratulations!</ModalHeader>
                                        <ModalBody className = "mx-auto" >
                                            { this.props.authInfo.message }
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={ this.toggle }>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                
                                }

                            </div>
                        
                        </Row>
                    </Container>
                </Container>
                
            </div>
        );
    }
  
};

const mapStateToProps = ( store ) => {

    return{
        authInfo : store.authInfo
    };

}

export default connect( mapStateToProps )( AdminPage );

// http://madscript.com/boron/ ,
// react-skylight 
// https://github.com/chenjiahan/rodal
// (Better Modals)

