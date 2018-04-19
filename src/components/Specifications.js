import React from "react";
import { connect } from "react-redux";

class Specifications extends React.Component {

    state = {
        specifications : [
            { "Finishing" : "Vitrified Tiles 2'2'" },
            { "Main Doors" : "Modular Doors (or) Veneers Doors & Godrej Key" }
        ],
        disabled : false 
    }

    updateSpecs = () => { 
        this.setState( ( prevState ) => ({
            specifications : [ ...prevState.specifications, ...this.props.specs ],
            disabled : true
        }));
    };

    render(){
        return(
            <div> 
                <p>This is Specifications page</p>

                <button onClick = { this.updateSpecs } disabled = { this.state.disabled }>Show Specs!</button>
                
                <ul>
                { this.state.specifications.length > 0 && 
                    this.state.specifications.map(( spec ) => {
                        
                        for( var key in spec ){

                            return <li> { key } : { spec[ key ] }</li>

                        }

                    })
                }
                </ul>

            </div> 
        );
    }

};

export default Specifications;