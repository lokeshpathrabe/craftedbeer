import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import React from 'react';
import {filterBeers, onFilterChange} from './actions';
import {connect} from 'react-redux';

class FilterPanel extends React.Component {
  
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
            value={this.props.value}
            placeholder="Enter Beer Name"
            onChange={(e) => this.props.onChange(e.target.value)}
            onKeyPress={this.onEnter.bind(this)}
          />
          <i className="fa fa-search" onClick={this.props.filter}></i>
        </FormGroup>
      </form>
    );
  }
    
    onEnter(e){
        if(e && e.charCode == 13){
            this.props.filter(this.props.value)
            e.preventDefault();
        }
    }
}

const mapStateToProps = (state, ownProps) => {
  return { value: state.filter};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { filter: (val) => dispatch(filterBeers(val)),
  onChange: (val) =>  dispatch(onFilterChange(val))};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)