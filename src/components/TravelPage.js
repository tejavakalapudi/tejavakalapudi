import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardColumns,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import ScrollToTop from "./ScrollToTop";
// For all supported HTML attributes in JSX https://reactjs.org/docs/dom-elements.html
// For all event handlers https://reactjs.org/docs/events.html
// For component lifecycles https://reactjs.org/docs/react-component.html

class TravelPage extends React.Component {
  render() {
    return (
      <div className="">
        <ScrollToTop />

        <Container className="testimonial__container-padding">
          <Row className="about__section justify-content-center text__align-center">
            <Col xs="11" md="6" className="travel__landscape">
              <Card>
                <CardImg
                  top
                  src={this.props.travel.landscapeLocation}
                  alt="Card image cap"
                />
              </Card>
            </Col>

            <Col xs="11" className="travel__title">
              {this.props.travel.name}
            </Col>

            <Col xs="11" className="travel__summary text__align-center">
              {this.props.travel.summary}
            </Col>

            {this.props.travel.note1 && (
              <Col xs="11" className="travel__note text__align-justify">
                {this.props.travel.note1}
              </Col>
            )}

            {this.props.travel.note2 && (
              <Col xs="11" className="travel__note text__align-justify">
                {this.props.travel.note2}
              </Col>
            )}

            {this.props.travel.note2 && (
              <Col xs="11" className="travel__note text__align-justify">
                {this.props.travel.note2}
              </Col>
            )}

            <Col xs="11" className="travel__section-divider" />

            <Col xs="11" md="12">
              <CardColumns>
                <Card>
                  <CardImg
                    top
                    src={this.props.travel.thumbnailLocation}
                    alt="Card image cap"
                  />
                </Card>
                {this.props.travel.travelImages.map(travelImage => {
                  return (
                    <Card>
                      <CardImg
                        top
                        src={travelImage.travelImageUrl}
                        alt="Card image cap"
                      />
                    </Card>
                  );
                })}
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (store, props) => {
  return {
    travel: store.travelDiaries.find(
      travel => travel.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(TravelPage);
