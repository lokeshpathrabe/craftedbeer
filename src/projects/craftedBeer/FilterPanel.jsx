import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import React from 'react';

export default class FilterPanel extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return(
      <form>
        <FormGroup
          controlId="filter"
          style={{display: 'block', textAlign:'center'}}
        >
          <FormControl
            sm={4}
            style={{width: '30%', display: 'inline-block', marginRight: '10px'}}
            type="text"
            value={this.props.name}
            placeholder="Enter Beer Name"
            onChange={this.props.handleChange}
            onKeyPress={this.onEnter.bind(this)}
          />
          <i className="fa fa-search" onClick={this.props.filterBeers}></i>
        </FormGroup>
      </form>
    );
  }
    
    onEnter(e){
        if(e && e.charCode == 13){
            this.props.filterBeers();
            e.preventDefault();
        }
    }
}