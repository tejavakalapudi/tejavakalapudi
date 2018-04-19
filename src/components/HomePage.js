import React from "react";
import ProjectItemWithInfo from "./ProjectItemWithInfo";
import AddProject from "./AddProject";
import { connect } from "react-redux";
import CarouselComponent from "./Carousel";
import { Container, Jumbotron, Card, CardTitle, CardText, CardDeck, CardHeader, Row, Col } from "reactstrap";
import ProjectsPage from "./ProjectsPage";
import AboutUsPage from "./AboutUsPage";


const HomePage = ( props ) => (

    <Jumbotron className = "body-container" > 
        <Container>
            <AddProject/>
            <CarouselComponent projects = { props.projects }/>
        </Container>

        <div className = "col-10 mx-auto p-5 ">
            <h2 className = "text-secondary border-bottom border-secondary p-3" align="center" > Our Principles: </h2>
        </div>

        <Row>
            <Col lg="8" md = "8" sm = "10" xs = "10" className = "mx-auto">
                <Row>
                    <Card body outline color="dark">
                        <CardTitle>Value</CardTitle>
                        <CardText>Akruthi essential goal consists of constructing most gracious constructions with affordable monetary value. </CardText>
                    </Card>
                </Row>
                <Row>
                    <Card body outline color="dark">
                        <CardTitle className="text-secondary" >Quality</CardTitle>
                        <CardText className="text-secondary" >We work with a relentless focus on global level quality, production efficiency, ownership and accountability for our delivery. </CardText>
                    </Card>
                </Row>
                <Row>
                    <Card body outline color="dark">
                        <CardTitle>Value Added Services</CardTitle>
                        <CardText>Our customer centric services will always help our clientele to be at maximum satisfaction.</CardText>
                    </Card>
                </Row>
                <Row>
                    <Card body outline color="dark">
                        <CardTitle className="text-secondary" >Prompt Delivery</CardTitle>
                        <CardText className="text-secondary" >By employing the modernist technology, our extremely enthusiastic employees be sure that projects extradite on time. </CardText>
                    </Card>
                </Row>           
            </Col>
        </Row>

        <ProjectsPage />
        <AboutUsPage />
    </Jumbotron>
); 

const mapStateToProps = ( store ) => {
    return { projects : store.projects };
};

export default connect( mapStateToProps )( HomePage );

// https://github.com/rommguy/react-custom-scroll for scrollbar
//className = "border-bottom border-dark pb-5 mb-5"

/*


        <CardDeck className = "col-12 ml-0" >
            <Card body inverse color="secondary">
                <CardHeader tag="h3">Value</CardHeader>
                <CardText>Akruthi essential goal consists of constructing most gracious constructions with affordable monetary value.</CardText>
            </Card>
            <Card body inverse color="secondary">
                <CardHeader tag="h3" >Quality</CardHeader>
                <CardText>We work with a relentless focus on global level quality, production efficiency, ownership and accountability for our delivery.</CardText>
            </Card>
            <Card body inverse color="secondary">
                <CardHeader tag="h3" >Value Added Services</CardHeader>
                <CardText>Our customer centric services will always help our clientele to be at maximum satisfaction.</CardText>
            </Card>
            <Card body inverse color="secondary">
                <CardHeader tag="h3" >Prompt Delivery</CardHeader>
                <CardText>By employing the modernist technology, our extremely enthusiastic employees be sure that projects extradite on time.</CardText>
            </Card>
        </CardDeck>

        */