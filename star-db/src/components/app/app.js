import React, {Component} from 'react';
import Header from '../header';
// import RandomPlanet from '../random-planet';
// import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
// import PeoplePage from '../people-page';
// import ItemList from '../item-list';
// import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import './app.css';
import Row from '../row';
import ItemDetails from '../item-details';
import {Record} from '../item-details/item-details';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  swapiService = new SwapiService();

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }

    // const planet = this.state.showRandomPlanet ?
    //   <RandomPlanet/> :
    //   null;

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field='gender' label='Gender'/>
        <Record field='eyeColor' label='Eye Color'/>
      </ItemDetails>
    );

    const starShipDetails = (
      <ItemDetails itemId={9} getData={getStarship} getImageUrl={getStarshipImage}>
        <Record field='model' label='Model'/>
        <Record field='length' label='Length'/>
        <Record field='costInCredits' label='Cost'/>
      </ItemDetails>
    );

    return (
      <div className="stardb-app">
        <Header/>
        {/*{planet}*/}
        {/*<button*/}
        {/*  className="toggle-planet btn btn-warning btn-lg"*/}
        {/*  onClick={this.toggleRandomPlanet}*/}
        {/*  style={{marginBottom: '30px'}}>*/}
        {/*  Toggle Random Planet*/}
        {/*</button>*/}

        {/*<ErrorButton />*/}

        {/*<PeoplePage/>*/}

        <Row left={personDetails} right={starShipDetails}/>

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      onItemSelected={this.onPersonSelected}*/}
        {/*      getData={this.swapiService.getAllPlanets}*/}
        {/*      renderItem={(item) => (<span>{item.name}</span>)} />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemDetails personId={this.state.selectedPerson}/>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      onItemSelected={this.onPersonSelected}*/}
        {/*      getData={this.swapiService.getAllStarships}*/}
        {/*      renderItem={(item) => item.name} />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemDetails personId={this.state.selectedPerson}/>*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>
    );
  }
}
