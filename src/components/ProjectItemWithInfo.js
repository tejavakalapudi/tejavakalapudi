import React from "react";
import { removeProject } from "../actions/projects";
import { connect } from "react-redux";
import { TabContent, 
    TabPane, 
    Button, 
    ButtonGroup,
    Row, 
    Col
} from 'reactstrap';
import Specifications from "./Specifications";

class ProjectItem extends React.Component {

    state = {
        activeTab: "1"
    }

    toggle( tab ) {
        if ( this.state.activeTab !== tab ) {
          this.setState({
            activeTab: tab
          });
        }
    }

    render(){

        return (

            <div className = "col-12 body-container" >
                <Row>
                    <div>
                        { this.props.project.title && 
                            <h2> { this.props.project.title } </h2> 
                        
                        }

                        { this.props.project.subTitle && 
                            <h3> { this.props.project.subTitle } </h3> 
                        }

                        { this.props.project.imageLocation &&
                            <Row>
                                <Col xs="9">
                                    <img 
                                        src= { "../" + this.props.project.imageLocation } 
                                        alt= { this.props.project.title }
                                        className = "col-12" 
                                    />
                                </Col>
                                <Col xs="3">
                                    <ButtonGroup vertical >
                                        <Button onClick={() => { this.toggle('1'); }} outline color="secondary" >Overview</Button>
                                        <Button onClick={() => { this.toggle('2'); }} outline color="secondary" >Floor Plans</Button>
                                        <Button onClick={() => { this.toggle('3'); }} outline color="secondary" >Location Map</Button>
                                        <Button onClick={() => { this.toggle('4'); }} outline color="secondary" >Specifications</Button>
                                        <Button onClick={() => { this.toggle('5'); }} outline color="secondary" >Amenities</Button>
                                        <Button onClick={() => { this.toggle('6'); }} outline color="secondary" >Download Brochure</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                             
                        }                        
                    </div>            
                </Row>

                
                    {   
                        <div>
                            <Row>
                                <Col>
                                    <TabContent activeTab={this.state.activeTab} >
                                        <TabPane tabId="1">
                                            { this.props.project.overview && 
                                                    <h2>{ this.props.project.overview }</h2>
                                            }
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <h2>Any content 2</h2>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <h2>Any content 3</h2>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            { this.props.project.overview && 
                                                <Specifications specs = { this.props.project.specs }/>
                                            }
                                        </TabPane>
                                        <TabPane tabId="5">
                                            { this.props.project.amenities &&

                                                <h2>{ this.props.project.amenities }</h2>

                                            }
                                        </TabPane>
                                        <TabPane tabId="6">
                                            <h2>Any content 2</h2>
                                        </TabPane>
                                    </TabContent>                                
                                </Col>
                                
                            </Row>
                        </div>
                    }
                


                { this.props.authInfo.isAuthorized && 

                    <button onClick = { 
                        ( e ) => {
                            this.props.dispatch( 
                                removeProject( this.props.project ) 
                            ) 
                        } 
                    }> 
                        Remove Project 
                    </button>
                
                }
                
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

export default connect( mapStateToProps )( ProjectItem );