import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import React from 'react';
import BeerDetailPanel from './BeerDetailPanel';

export default class BeerPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        expanded: false
    }
  }
  
  render() {
    let beer = this.props.beer;
      if(this.state.expanded){
        return <BeerDetailPanel key={beer.id} beer={beer} expandBeerPanel={this.changeState.bind(this)}/>
      }
      else{
        return(
          <Col sm={12} md={6} lg={4} style={{display:'inline-block'}}>
             <Panel 
                 onClick={()=>this.changeState()}>
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
    
changeState(){
    this.setState({expanded : !this.state.expanded});
}
    
    
}


