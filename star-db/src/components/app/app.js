import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import './app.css';
import ErrorBoundry from '../error-boundry';
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from '../sw-components';

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

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header/>
          {planet}
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
            style={{marginBottom: '30px'}}>
            Toggle Random Planet
          </button>
          <ErrorButton/>

          <PersonDetails itemId={1}/>
          <PlanetDetails itemId={5}/>
          <StarshipDetails itemId={5}/>

          <PersonList/>
          <PlanetList/>
          <StarshipList/>
        </div>
      </ErrorBoundry>
    );
  }
}
