import React from "react";
import { Row, Col, Container } from "reactstrap";
import ScrollToTop from "./ScrollToTop";

const ContactPage = props => (
  <div className="connect__container">
    {props && !props.isHomePage && <ScrollToTop />}
    <Container className="connect__container-padding">
      <Row className="about__section justify-content-center">
        <Col className="section__title text__align-center" xs="12">
          Contact.
        </Col>
        <Col className="connect__tile text__align-center" lg="2" xs="4">
          <a
            target="_blank"
            href="https://www.facebook.com/tejavakalapudi/"
            className="connect__tile-anchor"
          >
            Facebook
          </a>
        </Col>
        <Col className="connect__tile text__align-center" lg="2" xs="4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raviteja-vakalapudi-b511b3139/"
            className="connect__tile-anchor"
          >
            Linked In
          </a>
        </Col>
        <Col className="connect__tile text__align-center" lg="2" xs="4">
          <a
            target="_blank"
            href="https://www.instagram.com/tejavakalapudi/"
            className="connect__tile-anchor"
          >
            Instagram
          </a>
        </Col>
        <Col className="connect__tile text__align-center" lg="2" xs="4">
          <a
            target="_blank"
            href="https://twitter.com/TejaVakalapudi"
            className="connect__tile-anchor"
          >
            Twitter
          </a>
        </Col>
        <Col className="connect__tile text__align-center" lg="2" xs="4">
          Snapchat
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContactPage;
