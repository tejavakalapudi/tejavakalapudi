import React from "react";
import { Row, Col, Container } from "reactstrap";
import { FaLinkedin } from "react-icons/lib/fa";
import {
  BootstrapLogo,
  ReactLogo,
  FireBaseLogo,
  HerokuLogo,
  SassLogo
} from "../components/TechLogos";

const FooterPage = () => (
  <Container>
    <Row className="footer justify-content-center">
      <Col lg="4" md="4" sm="11" xs="11" className="footer__copyright">
        © Copyright{" "}
        <b className="footer__copyright-company">Akruthi Constructions.</b> All
        Rights Reserved.
      </Col>

      <Col lg="4" md="4" sm="11" xs="11" className="footer__copyright">
        <div className="footer__copyright-company"> Technologies used : </div>
        <div>
          <ReactLogo />
          <BootstrapLogo />
          <SassLogo />
          <FireBaseLogo />
          <HerokuLogo />
        </div>
      </Col>

      <Col lg="4" md="4" sm="11" xs="11" className="footer__copyright">
        <div className="footer__copyright-company">
          {" "}
          Developed & Designed by
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raviteja-vakalapudi-b511b3139/"
            style={{ color: "black" }}
          >
            Just another Software developer
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raviteja-vakalapudi-b511b3139/"
            className="footer__linkedin"
          >
            <FaLinkedin size={20} color="#0077B5" />
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default FooterPage;
