import React from "react";
import {
    Container, 
    Jumbotron,
    Card, 
    CardTitle, 
    CardText, 
    CardDeck, 
    CardHeader, 
    CardImg,
    CardColumns,
    CardSubtitle, 
    CardBody,
    Row, 
    Col 
} from "reactstrap";
import venkatadri from "../../public/images/VenkatadriSquare.jpg";
import nandanavanam from "../../public/images/NandanavanamSquare.jpg";
import backgroundImg from "../../public/images/background.jpg";
import srinivasam from "../../public/images/SrinivasamSquare.jpg"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/lib/fa";

//http://shoelace.io/ for bootstrap

const Grid = ( props ) => (

    <div >
        <CardColumns>
            <Card className = "card__zoom" >
                <CardImg top width="320px" src={srinivasam} alt="Card image cap" />
            </Card>
            <Card body className = { props.centerGrid && "cardBody" }>
                <CardTitle>Value</CardTitle>
                <CardText className = "card__zoom" >Akruthi's essential goal consists of constructing most gracious constructions with affordable monetary value.</CardText>
            </Card>

            <Card body inverse color="success" className = { props.centerGrid && "cardBody" } >
                <CardTitle>Quality</CardTitle>
                <CardText className = "card__zoom" >We work with a relentless focus on global level quality, production efficiency, ownership and accountability for our delivery.</CardText>
            </Card>

            <Card body inverse color = "info" className = { props.centerGrid && "cardBody" } >
                <CardTitle>Value Added Services</CardTitle>
                <CardText className = "card__zoom" >Our customer centric services will always help our clientele to be at maximum satisfaction.</CardText>
            </Card>

            <Card className = "card__zoom">
                <CardImg top width="320px" src={venkatadri} alt="Card image cap" />
            </Card>

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = { props.centerGrid && "cardBody" }>
                <CardTitle>Prompt Delivery</CardTitle>
                <CardText className = "card__zoom" >By employing the modernist technology, our extremely enthusiastic employees be sure that projects extradite on time. </CardText>
            </Card>

            <Card>
                <CardText>
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
                        <FaInstagram size={40} color="#262626" />
                    </a>
                </CardText>
            </Card>

            <Card className = "card__zoom" >
                <CardImg top width="320px" src={nandanavanam} alt="Card image cap" />
            </Card>

            <Card body inverse color="danger" className = { props.centerGrid && "cardBody" }>
                <CardTitle>Expert Advice</CardTitle>
                <CardText className = "card__zoom" >To make your job easier, we have a specialized team of advisories who makes sure to guide you through out the path of property buying</CardText>
            </Card>
            <Card body inverse color="warning" className = { props.centerGrid && "cardBody" } >
                <CardTitle>Promise</CardTitle>
                <CardText className = "card__zoom" >From just a vision, exceptionally constructed homes, we accomplish your dream home become a reality!</CardText>
            </Card>
        </CardColumns>
    </div>

);

export default Grid;

/*
    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    </Card>
*/