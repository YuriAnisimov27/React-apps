import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import {SwapiServiceProvider} from '../swapi-service-context';
import {LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage} from '../pages';
import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.css';
import {PersonDetails, PlanetDetails, StarshipDetails} from '../sw-components';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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
          <Router>
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

              <Switch>
                <Route path='/' exact render={() => <h1>Welcome!</h1>}/>
                <Route path='/people' exact component={PeoplePage}/>
                <Route path='/people/:id' render={({match}) => <PersonDetails itemId={match.params.id}/>}/>
                <Route path='/planets' exact component={PlanetsPage}/>
                <Route path='/planets/:id' render={({match}) => <PlanetDetails itemId={match.params.id}/>}/>
                <Route path='/starships' exact component={StarshipsPage}/>
                <Route path='/starships/:id' render={({match}) => <StarshipDetails itemId={match.params.id}/>}/>
                <Route path='/login' exact
                       render={() => <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>}/>
                <Route path='/secret' exact render={() => <SecretPage isLoggedIn={this.state.isLoggedIn}/>}/>

                <Route render={() => <p>Lost?</p>}/>
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
