import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import {
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import {
  fileUploadToStorage,
  startAddTravelPage
} from "../actions/travelDiaries";

import { MdNoteAdd } from "react-icons/lib/md";
// For all supported HTML attributes in JSX https://reactjs.org/docs/dom-elements.html
// For all event handlers https://reactjs.org/docs/events.html
// For component lifecycles https://reactjs.org/docs/react-component.html

class TravelForm extends React.Component {
  state = {
    uniqueId: uuid(),
    thumbnailLocation: "",
    landscapeLocation: "",
    travelImages: "",
    placeName: "",
    summary: "",
    note1: "",
    note2: "",
    note3: ""
  };

  handleThumbnailImgUpload = e => {
    e.preventDefault();
    const image = e.target.files[0];

    this.props.dispatch(
      fileUploadToStorage(
        this.state.uniqueId,
        image,
        "Thumbnail-Image",
        url => {
          this.setState({
            thumbnailLocation: url
          });
        }
      )
    );
  };

  handleLandscapeImgUpload = e => {
    e.preventDefault();
    const image = e.target.files[0];

    this.props.dispatch(
      fileUploadToStorage(
        this.state.uniqueId,
        image,
        "Landscape-Image",
        url => {
          this.setState({
            landscapeLocation: url
          });
        }
      )
    );
  };

  handleTravelImgsUpload = e => {
    e.preventDefault();

    const files = e.target.files;

    for (const file in files) {
      if (/\.(jpe?g|png|gif)$/i.test(files[file].name)) {
        const uniqueImageId = uuid();

        this.props.dispatch(
          fileUploadToStorage(
            this.state.uniqueId,
            files[file],
            `travelImg-${uniqueImageId}`,
            url => {
              const travelImgObj = {
                travelImageUrl: url,
                id: `travelImg-${uniqueImageId}`
              };
              this.setState({
                travelImages: [...this.state.travelImages, travelImgObj]
              });
            }
          )
        );
      }
    }
  };

  submitName = e => {
    e.preventDefault();
    e.persist();

    this.setState(() => ({ placeName: e.target.value }));
  };

  submitSummary = e => {
    e.preventDefault();
    e.persist();

    this.setState(() => ({ summary: e.target.value }));
  };

  submitNote1 = e => {
    e.preventDefault();
    e.persist();

    this.setState(() => ({ note1: e.target.value }));
  };

  submitTravelNote = () => {
    this.props.dispatch(
      startAddTravelPage({
        name: this.state.placeName,
        summary: this.state.summary,
        thumbnailLocation: this.state.thumbnailLocation,
        landscapeLocation: this.state.landscapeLocation,
        travelImages: this.state.travelImages,
        note1: this.state.note1,
        note2: this.state.note2,
        note3: this.state.note3
      })
    );

    this.props.hideForm();
  };

  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        {/* Place Name Section */}
        <FormGroup>
          <FormText for="placeName" color="warning">
            Place Name:
          </FormText>
          <Input
            type="text"
            name="name"
            id="placeName"
            value={this.state.placeName}
            placeholder="Ex: Hyderabad"
            onChange={this.submitName}
            className="form__input"
          />
        </FormGroup>

        {/* Summary Section */}
        <FormGroup>
          <FormText for="summary" color="warning">
            Summary:
          </FormText>
          <Input
            type="text"
            name="summary"
            id="summary"
            value={this.state.summary}
            placeholder="Ex: Nawab's place"
            onChange={this.submitSummary}
            className="form__input"
          />
        </FormGroup>

        {/* Note1 Section */}
        <FormGroup>
          <FormText for="note1" color="warning">
            First Paragraph:
          </FormText>
          <Input
            type="text"
            name="note1"
            id="note1"
            value={this.state.note1}
            placeholder="Ex: Nawab's place"
            onChange={this.submitNote1}
            className="form__input"
          />
        </FormGroup>

        {/* Thumbnail Image Section */}
        <FormGroup>
          <FormText for="thumbnailImage" color="warning">
            Thumbnail Image:
          </FormText>

          <Button color="dark" size="lg" className="disabled">
            <Input
              type="file"
              name="thumbnailImage"
              id="thumbnailImage"
              onChange={this.handleThumbnailImgUpload}
            />
          </Button>
          <FormText color="muted">
            This image is used to display as a thumbnail.
          </FormText>
        </FormGroup>

        {/* Landscape Image Section */}
        <FormGroup>
          <FormText for="landscapeImage" color="warning">
            Landscape Image:
          </FormText>

          <Button color="dark" size="lg" className="disabled">
            <Input
              type="file"
              name="landscapeImage"
              id="landscapeImage"
              onChange={this.handleLandscapeImgUpload}
            />
          </Button>
          <FormText color="muted">
            This image is used to display as a landscape.
          </FormText>
        </FormGroup>

        {/* Travel Images Section */}
        <FormGroup>
          <FormText for="travelImages" color="warning">
            Travel Images:
          </FormText>

          <Button color="dark" size="lg" className="disabled">
            <Input
              type="file"
              name="travelImages"
              id="travelImages"
              onChange={this.handleTravelImgsUpload}
              multiple
            />
          </Button>
          <FormText color="muted">
            These images are used to display as a content for individual travel.
          </FormText>
        </FormGroup>

        <Button
          color="danger"
          size="lg"
          className="contact_text_format"
          onClick={this.submitTravelNote}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect()(TravelForm);
