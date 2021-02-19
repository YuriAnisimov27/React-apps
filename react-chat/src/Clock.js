import {Component} from 'react';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({time: new Date().toLocaleTimeString()});
  };

  render() {

    return (
      <h1>{this.state.time}</h1>
    );
  }
}
