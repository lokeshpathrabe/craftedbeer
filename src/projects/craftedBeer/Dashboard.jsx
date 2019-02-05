import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import FilterPanel from './FilterPanel';
import Shelf from './Shelf';
import React from 'react';
import './css/craftedBeer.scss';
import { connect } from "react-redux";

class Dashboard extends React.Component {
  
  render() {
    const { showShadow } = this.props ;
    return (
      <Panel>
        <Panel.Heading>Crafted Beer</Panel.Heading>
        <Panel.Body>
          <FilterPanel/>
          <Shelf/>
        </Panel.Body>
        {showShadow ? <div className="shadow" ></div> : undefined}
      </Panel>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return { showShadow: state.showShadow};
};

export default connect(mapStateToProps)(Dashboard)