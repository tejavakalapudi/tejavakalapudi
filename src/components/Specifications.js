import React from "react";
import { connect } from "react-redux";
import { 
    Row, 
    Col,
    Container,
    Table
} from 'reactstrap';

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
            <Col>
                <Col lg ="11">
                    <Table size="sm" hover>
                        <tbody>
                            { this.props.specs.length > 0 && 
                                
                                this.props.specs.map(( spec ) => {
                                    
                                    for( var key in spec ){
                                        return (
                                            <tr>
                                                <td> { key } </td>
                                                <td> : </td>
                                                <td> { spec[ key ] } </td>
                                            </tr>
                                        );

                                    }

                                })
                            }
                        </tbody>
                    </Table>

                    {
                        /*
                            <button onClick = { this.updateSpecs } disabled = { this.state.disabled }>Show Specs!</button>
                        */
                    }
                </Col>
            </Col> 
        );
    }

};

export default Specifications;