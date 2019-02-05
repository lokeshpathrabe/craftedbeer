import React from 'react';
import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';

export default class BeerTile extends React.Component{
    render(){
        const { beer, onClick } = this.props
        const colStyle = beer.visible ? {display:'inline-block'} : {display:'none'}
        return(
            <Col className="beer-tile" sm={12} md={6} lg={4} style={colStyle}>
               <Panel 
                   onClick={onClick}>
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