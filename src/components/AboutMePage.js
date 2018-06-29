import React from "react";
import { Row, Col, Container, Card, CardImg } from "reactstrap";
import AboutMeImage from "../../public/images/AboutImage.jpg";
import { NavLink } from "react-router-dom";
import LearnMore from "./LearnMore";
import { MdFormatQuote } from 'react-icons/lib/md';
import ViacomLogo from "../../public/images/ViacomLogo-Rectangle.jpg";
import AkruthiLogo from "../../public/images/AkruthiLogo-Rectangle.jpg";
import ScrollToTop from "./ScrollToTop";

//http://www.pascalvangemert.nl/#/projects for tiles

class AboutMePage extends React.Component{

    isAboutMePage = () => {
        
        return this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.search( "about" ) > -1;

    }
    
    state = {

        isAboutMePage : this.props && !this.props.isHomePage,
        homePageClass : this.props && !this.props.isHomePage ? "" : "homepage",
        summaryContent : this.props && !this.props.isHomePage ? "Hi, I am Ravi. A Front End developer and a Web Enthusiast skilled in technologies like JavaScript, React JS, Bootstrap, HTML and CSS. I create clean, professional and functional websites." : "Experienced Software Engineer with a demonstrated history of working in an entertainment industry. Skilled in front end development and familiar in integrating 3rd party ads & analytics frameworks like Freewheel, DoubleClick, Omniture and Comscore. Hands on experience with latest web technologies like React JS, Redux, Bootstrap-4, Firebase Database/Storage."

    }

    renderLearnMoreButton = () => {

        if( this.state.isAboutMePage ){

            return;
        }

        return(<LearnMore redirect = "about" />);

    }

    render(){

        return(
        
            <div className = { `about__container ${this.state.homePageClass}` } >

                {
                    this.state.isAboutMePage &&
                    <ScrollToTop />
                }

                <Container className = "about__container-padding" >

                    <Row className = "about__section justify-content-center">

                        <Col xs="11" lg={this.state.isAboutMePage ? "11" : "3"} className="text__align-center" >
                            <img src = { AboutMeImage } className = { `about__image-rounded ${this.state.homePageClass}` }/>
                        </Col>

                        <Col xs="11" lg={this.state.isAboutMePage ? "11" : "9"}>
                            <div className = {`section__title text__align-center ${this.state.homePageClass}`} >
                                About me.
                            </div>

                            <div className={ `about__description text__align-center ${this.state.homePageClass}` }>

                                <div className="about__description-content"> 
                                    { this.state.summaryContent }
                                </div>                                

                            </div>

                            { this.state.isAboutMePage &&
                                <div>

                                    {/****** Quote ******/} 
                                    <Row className = "justify-content-center text__align-center">
                                        <Col className="quote__symbol text__align-center" xs="11">
                                            <MdFormatQuote />
                                        </Col>
                                        <Col className="quote__text text__align-center" xs="11">
                                            Analyze, Learn, Code, Test & Deploy
                                        </Col>
                                    </Row>

                                    {/****** About Me ******/} 
                                    <Row className = "justify-content-center">
                                        <Col className="about__content" xs="12">
                                            Experienced Software Engineer with a demonstrated history of working in an entertainment industry. Skilled in front end development and familiar in integrating 3rd party ads & analytics frameworks like Freewheel, DoubleClick, Omniture and Comscore. I spend my days crafting websites and also sometimes annoying people by delivering ads on video content.
                                        </Col>
                                        <Col className="about__content" xs="12">
                                            I love working for all size of companies from small local businesses right up to huge international brands like Viacom. I’ve just spent 5 years living in the USA with 2 years of education at Washington DC and 3 years of work experience at New York City. The love for the home country always have motivated me to plan on moving back to India and serve the nation in whatever way I can. I feel fortunate about getting an oppurtunity to analyze and compare pros and cons within the work culture of both countries.
                                        </Col>
                                        <Col className="about__content" xs="12">
                                            My vision is to make use of my experience and expertise to establish an organization which will mostly be focused on making lives easy in real time by also keeping up to date with the evoluting technologies. I also want to use this an oppurtunity to promote the uses of modern work culture where an employee is treated with more respect and freedom.
                                        </Col>
                                        <Col className="about__content" xs="12">
                                            I’m constantly learning web technologies and other design related topics, mostly focused on JavaScript related frameworks and currently playing around React JS, Redux, Bootstrap 4, Firebase Database/Storage.
                                        </Col>
                                        <Col className="about__content" xs="12">
                                            <div>Other than Internet,</div>
                                            <div>I am also interested in travelling. I am always excited about meeting new people. I love to Eat, Drink and Cook. I like playing games on my xbox especially Fifa. Inspired by new technologies like VR, AR and Cryptocurrencies. </div>
                                        </Col>
                                    </Row>

                                    {/****** Work Segment ******/} 
                                    <div className="about__segment">
                                        <div className="about__segment-title" >
                                            Work.
                                        </div>
                                        <hr className="about__segment-line"/>
                                    </div>

                                    <Row className = "justify-content-center">
                                        <Col xs="12" md="6" lg="4" className="text__align-center about__imageTile">
                                            <Card>
                                                <CardImg top src = { ViacomLogo } alt="Card image cap" />
                                            </Card>
                                        </Col>
                                        <Col xs="12" md="6" lg="4" className="text__align-center about__imageTile">
                                            <Card>
                                                <CardImg top src = { AkruthiLogo } alt="Card image cap" />
                                            </Card>
                                        </Col>
                                    </Row>

                                </div>
                            }

                        </Col>

                    </Row>

                    {this.renderLearnMoreButton()}

                </Container>

            </div>
        );

    }
}

export default AboutMePage;

//https://github.com/nkbt/react-collapse
//https://github.com/springload/react-accessible-accordion
//https://www.giken.com/en/vision/five_construction_principles/