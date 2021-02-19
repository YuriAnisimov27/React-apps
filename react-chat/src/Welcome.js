import {Component} from 'react'

export default class Welcome extends Component {
  render() {
    const name = this.props.children

    return (
      <>
        hello {name}
      </>
    )
  }
}
