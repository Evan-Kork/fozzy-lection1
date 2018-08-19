import React, { Component } from 'react';
import initialData from '../../data.json';
import Question from '../question/question';
import RadioQuestion from '../radio-question/radio-question';
import CheckboxQuestion from '../checkbox-question/checkbox-question';
import InputQuestion from '../input-question/input-question';
import Results from '../results/results.js';
import { Card, CardBody, Button, CardHeader } from 'reactstrap';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            radioType: false,
            checkboxType: false,
            inputType: false,
            timer: new Date().getSeconds()
        }
        this.validateAnswer = this.validateAnswer.bind(this);
        this.data = JSON.parse(JSON.stringify(initialData));
        this.handleReboot = this.handleReboot.bind(this);
    }

    validateAnswer(data) {
        let userAnswer = data.userAnswer.sort();
        let rightAnswer = data.rightAnswer.sort()
        if (userAnswer.length === rightAnswer.length && userAnswer.every((value, index) => value === rightAnswer[index])) {
            data.isRight = true;            
        }
        this.setState({
            questionIndex: this.state.questionIndex + 1
        });
    }

    handleReboot() {
        this.data = initialData;     
        this.props.handleReboot();
    }

    render() {
        return (
            <div>
                <Card className="text-center">
                    {
                    this.data[this.state.questionIndex] ? 
                    <div>
                        <CardHeader>
                            {this.state.questionIndex+1}/{this.data.length}
                            <Question question={this.data[this.state.questionIndex].question} />
                        </CardHeader>
                        <CardBody>
                            {this.data[this.state.questionIndex].type === 'input' ? <InputQuestion item={this.data[this.state.questionIndex]} validateAnswer={this.validateAnswer}/> : null }
                            {this.data[this.state.questionIndex].type === 'checkbox' ? <CheckboxQuestion item={this.data[this.state.questionIndex]} validateAnswer={this.validateAnswer}/> : null }
                            {this.data[this.state.questionIndex].type === 'radio' ? <RadioQuestion item={this.data[this.state.questionIndex]} validateAnswer={this.validateAnswer}/> : null }
                        </CardBody>
                    </div> : 
                    <div>
                        <CardHeader><h2>Results</h2></CardHeader>
                        <CardBody>
                            <Results generalData={this.data}/>
                            <Button color="primary" onClick={this.handleReboot}>Try again</Button>
                        </CardBody>
                    </div>
                    }
                </Card>
            </div>
        );
    }
}

export default Test;