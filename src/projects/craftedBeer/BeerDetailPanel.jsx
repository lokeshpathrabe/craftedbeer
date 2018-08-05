import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import React from 'react';

export default class BeerDetailPanel extends React.Component {
    constructor(props){
            super(props);
    }
    
    render(){
        let beer = this.props.beer;
        return(
            <Col sm={12} style={{display:'inline-block'}}>
                <Panel 
                onClick={this.props.expandBeerPanel}>
                    <Panel.Heading><img className='beer-image' src={beer.image}/></Panel.Heading>
                    <Panel.Body>
                        <h3>{beer.name}</h3>
                        <p>{beer.description}</p>
                    </Panel.Body>
                </Panel>
            </Col>
        );  
    }
}