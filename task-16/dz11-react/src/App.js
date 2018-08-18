import React, { Component } from 'react';
import './App.css';
import Test from './components/test/test'
import { Container, Row, Col, Button} from 'reactstrap';
import Header from './header'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStart: false
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={{size: 6, offset:3}}>
            <div className="App">
              <Header/>
              {this.state.isStart ? <Test/> : <Button color="primary" onClick={() => {this.setState({isStart: true})}}>Start A Test</Button>}
            </div>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
