import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import React from 'react';

export default class BeerDetailPanel extends React.Component {
    render(){
        const { beer, onClick} = this.props;
        return(
            <Col className="detail-panel" sm={12} style={{position:'fixed'}}>
                <Panel>
                    <Panel.Heading>
                        <img className='beer-image' src={beer.image}/>
                        <i 
                            class="fas fa-times-circle" 
                            style={{'vertical-align': 'top', 'float': 'right'}}
                            onClick={onClick}></i>
                    </Panel.Heading>
                    <Panel.Body>
                        <h3>{beer.name}</h3>
                        <p>{beer.description}</p>
                    </Panel.Body>
                </Panel>
            </Col>
        );  
    }
}