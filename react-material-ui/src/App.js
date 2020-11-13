import React, {Component} from 'react'
import { Button } from '@material-ui/core'
import {AppHeader} from './components/header';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <AppHeader />
        still working...
        <Button color="primary">Click Me))</Button>
      </div>
    )
  }
}
