import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor(props) {
    super(props);
    this.updatePlanet();
  }

  state = {
    id: 3,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  swapiService = new SwapiService();

  updatePlanet() {
    const id = Math.ceil(Math.random() * 17) + 2;

    this.swapiService.getPlanet(id)
      .then(planet => this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }));
  }

  render() {
    const {id, name, population, rotationPeriod, diameter} = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=''/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
