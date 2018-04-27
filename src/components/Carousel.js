import React from "react";
import { connect } from "react-redux";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";


class CarouselComponent extends React.Component {

    state = {
        activeIndex: 0,
        animating: false
    };

    onExiting = () => {
        this.setState({ 
            animating : true
        });
    };

    onExited = () => {
        this.setState({ 
            animating : false
        });
    };

    next = () => {
        if ( this.state.animating ) return;
        const nextIndex = this.state.activeIndex === this.props.projects.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState(() => ({ 
            activeIndex : nextIndex
        }));
    };

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.projects.length - 1 : this.state.activeIndex - 1;
        this.setState(() => ({ 
            activeIndex : nextIndex
        }));
    };

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState(() => ({ 
            activeIndex : newIndex
        }));
    };

    render(){

        const slides = this.props.projects.map((item) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.imageLocation}
              >
                <img src={item.imageLocation} alt={item.title} className = "img-fluid rounded" max-width = "100%" height = "auto" />
                <CarouselCaption captionText={item.title} captionHeader={item.title} />
              </CarouselItem>
            );
        });

        return (
            <div className = "mx-auto img-thumbnail shadow-lg " >
                <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={ this.props.projects } activeIndex={ this.state.activeIndex } onClickHandler = { this.goToIndex } />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>

        );
        
    }

}

export default CarouselComponent;