import React from "react";
import { startRemoveProject } from "../actions/projects";
import { connect } from "react-redux";
import { FaMinusSquare, FaEdit } from "react-icons/lib/fa";
import { 
    Row, 
    Button, 
    Container,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter  
} from "reactstrap";

class ProjectItem extends React.Component {

    state = {
        isOpen : false
    }

    closeModal = () => {
        this.setState( () => ( { isOpen : false } ) );
    }

    openModal = () => {
        this.setState( () => ( { isOpen : true } ) );
    }

    removeProject = ( e ) => {
        this.props.dispatch( 
            startRemoveProject( { id : this.props.project.id, storageRefId : this.props.project.storageRefId } ) 
        );
        this.closeModal(); 
    }
    
    render(){

        return (
                <div> 
                    { this.props.project.thumbnailLocation &&
                    
                        <div 
                            className = "row justify-content-center imageContainer"
                        >
                            <img 
                                src= { this.props.project.thumbnailLocation } 
                                alt= { this.props.project.title }
                                width=  { this.props.project.status === "ongoing" ? "320px" : "272px" }  
                                height= { this.props.project.status === "ongoing" ? "227px" : "193px" }
                                className = "project-item_image"
                            />
                            <div class="imageOverlay">
                                <div class="overlayText">
                                    <p className="project-item_subtitle"> { this.props.project.title } </p>
                                    {
                                        this.props.project.status === "ongoing" ? 
                                        <p> <a onClick = { this.props.onClick } style={ { "text-decoration": "underline" } }> Learn More </a></p>
                                        : 
                                        <p>  { this.props.project.address } </p>
                                    }  
                                </div>
                            </div>
            
                        </div>
                    }
            
                    { this.props.authInfo.isAuthorized && 
                        
                        <Container>
                            <Row className = "justify-content-center"> 
                                <Button onClick = {this.openModal}> 
                                    <FaMinusSquare size={20} />
                                </Button>
                            </Row>
                        </Container>
                    
                    }
            
                    <Modal isOpen={ this.state.isOpen } toggle={ this.closeModal } className = "modal-dialog modal-sm">
                        <ModalBody className = "mx-auto modal_text_format" >
                            Are you sure you want to remove { this.props.project.title } from the list of projects? This can't be Undone!
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={ this.removeProject }>Yes, go for it</Button>
                        </ModalFooter>
                    </Modal>
                    
                </div> 
        )
    }
    
};

const mapStateToProps = ( store ) => {

    return {
        authInfo : store.authInfo
    }

}

export default connect( mapStateToProps )( ProjectItem );