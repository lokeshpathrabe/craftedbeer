import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import BeerPanel from './BeerPanel';
import React from 'react';
import { connect } from "react-redux";

class Shelf extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return(
      <Col sm={12}>
        {this.renderBeerPanels()}
      </Col>
    );
  }
  
  renderBeerPanels(){
    let beers = this.props.beers;
    if(beers && Array.isArray(beers)){
      return beers.map((beer)=>{
        return <BeerPanel key={beer.id} id={beer.id}/>
      });
    }
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { beers: state.beer};
};

export default connect(mapStateToProps)(Shelf)