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
        this.handleReboot = this.handleReboot.bind(this)
    }

    handleReboot () {
        this.setState({
            isStart: false
        })
    };

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset:3}}>
                            <div className="test">
                                {this.state.isStart ? <Test handleReboot={this.handleReboot}/> : <Button  onClick={() => {this.setState({isStart: true})}}>Start A Test</Button>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default App;
