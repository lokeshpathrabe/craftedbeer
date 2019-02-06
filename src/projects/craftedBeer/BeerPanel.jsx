import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import React from 'react';
import BeerDetailPanel from './BeerDetailPanel';
import BeerTile from './BeerTile';
import { connect } from "react-redux";
import {togglePanel} from "./actions"

class BeerPanel extends React.Component {
  
  render() {
    let { beer, onClick } = this.props;
      if(beer.expanded){
        return <BeerDetailPanel beer={beer} onClick={onClick}/>
      }
      else{
        return <BeerTile  beer={beer} onClick={onClick}/>
      }
  
  }
}

const mapStateToProps = (state, ownProps) => {
  return { beer: state.beer.filter(beer => beer.id == ownProps.id)[0]};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(togglePanel(ownProps.id)); 
      dispatch({ type: 'toggle-shadow'})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerPanel)


