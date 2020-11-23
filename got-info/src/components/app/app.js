import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRandomChar: true,
      error: false
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    });
  }

  toggleViewRandomCharacter = () => {
    this.setState({
      showRandomChar: !this.state.showRandomChar
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage/>;
    }

    return (
      <>
        <Container>
          <Header/>
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              {this.state.showRandomChar ? <RandomChar/> : null}
              <button
                onClick={this.toggleViewRandomCharacter}
                className='btn btn-primary' style={{marginTop: -20, marginBottom: 15}}>
                Toggle Random Character
              </button>
            </Col>
          </Row>
          <CharacterPage/>
        </Container>
      </>
    );
  }
}

export default App;
