import React from "react";
import { checkUserAuth } from "../actions/auth";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AdminPage extends React.Component {

    state = {
        isOpen : true
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

        this.props.history.push( "/" );
    }

    render(){
        return ( 
            <div className = "body-container" >
                <p>Please authorize to get access to Admin Rights!</p>
               
                <form onSubmit = { 
                    ( e ) => { 
                
                        e.preventDefault();
    
                        this.props.dispatch( 
                            checkUserAuth( { 
                                userName: e.target.children.userName.value, 
                                password: e.target.children.password.value 
                            }) 
                        ); 
    
                        e.target.children.userName.value = e.target.children.password.value = "";
                    } 
                }>
                    <div> User Name : </div>
                    <input type = "text" name = "userName"/>
        
                    <div> Password : </div>
                    <input type = "text" name = "password"/>
                    
                    <button>Submit</button>
                    
                </form>
    
                { this.props.authInfo.isAuthorized && 

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

