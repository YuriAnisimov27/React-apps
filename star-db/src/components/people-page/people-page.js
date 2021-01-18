import React, {Component} from 'react';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import './people-page.css';
import ErrorBoundry from '../error-boundry';


export default class PeoplePage extends Component {
  state = {
    selectedPerson: Math.ceil(Math.random() * 83)
  };

  swapiService = new SwapiService();

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name, gender, birthYear}) => ` ${name}  (gender: ${gender}, birth year: ${birthYear})`}/>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson}/>
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}
