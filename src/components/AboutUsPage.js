import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

const AboutUsPage = () => ( 
    <div> 
        <Row>
            <Col lg = "1" >
                <h3 className = "about_title" > ABOUTUS</h3>
            </Col> 
            <Col >
                <div> 
                    <h4 className = "about_subtitle" >Company Profile</h4>
                    <hr/>
                    <p className = "about_description">
                        Akruthi Constructions, with years of experience under its brand, the company has been addressing in opulence residential apartments and Luxury villas. 
                        Akruthi has constructed several projects with foremost amenities and arrogates the peak in customer's satisfaction. 
                        Akruthi has originated as an esteemed Real Estate company, edifice genius constructions that delimitate quality and elegance at its best. 
                        Akruthi recognised to build residential building complexes that replicate royalty; the company has come a long way to building a trusted reputation for itself in the Real Estate domain of Hyderabad.
                    </p>
                    <p className = "about_description" >
                        Akruthi has been working for a long-run relationship with the customer and the company is continuing with the goal of attaining the most adept quality performance for the well-being of the customers.
                    </p>
                </div>
            </Col>
        </Row>
    </div> 
);

export default AboutUsPage;

//https://github.com/nkbt/react-collapse
//https://github.com/springload/react-accessible-accordion
//https://www.giken.com/en/vision/five_construction_principles/