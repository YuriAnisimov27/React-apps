import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from '../sw-components';
import {SwapiServiceProvider} from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            {planet}
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
              style={{marginBottom: '30px'}}>
              Toggle Random Planet
            </button>
            <ErrorButton/>

            <PersonDetails itemId={11}/>
            <PlanetDetails itemId={5}/>
            <StarshipDetails itemId={5}/>

            <PersonList/>
            <PlanetList/>
            <StarshipList/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
