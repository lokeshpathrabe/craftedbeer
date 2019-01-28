import {Panel, FormGroup, HelpBlock, ControlLabel, FormControl, Thumbnail, Col, FieldGroup} from 'react-bootstrap';
import FilterPanel from './FilterPanel';
import Shelf from './Shelf';
import React from 'react';
import './css/craftedBeer.scss';
export default class Dashboard extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      name: '',
      beers: this.props.store.beers
    }
  }
  
  render() {
    return (
      <Panel>
        <Panel.Heading>Crafted Beer</Panel.Heading>
        <Panel.Body>
          <FilterPanel name={this.state.name} handleChange={this.handleChange.bind(this)} filterBeers={this.filterBeers.bind(this)}/>
          <Shelf beers={this.state.beers}/>
        </Panel.Body>
      </Panel>
    );
  }
  
  filterBeers(){
    let filterText = this.state.name;
    let beers = this.props.store.beers;
    let filteredBeers = beers.filter((beer)=> !!!filterText || (beer.name && beer.name.toUpperCase().indexOf(filterText.toUpperCase()) > -1));
    this.setState({beers: filteredBeers});
  }
  
  handleChange(e){
      let v = e.target.value;  
    this.setState({
      name: v
    });
  }
  
  
}