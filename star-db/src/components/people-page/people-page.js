import React, {Component} from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import './people-page.css';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: Math.ceil(Math.random() * 83),
    hasError: false
  };

  swapiService = new SwapiService();

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name, gender, birthYear}) => ` ${name}  (gender: ${gender}, birth year: ${birthYear})`}/>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}
