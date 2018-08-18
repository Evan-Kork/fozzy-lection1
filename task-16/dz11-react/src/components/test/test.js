import React, { Component } from 'react';
import data from '../../data.json';
import Question from '../question/question';
import RadioQuestion from '../radio-questions/radio-question';
import CheckboxQuestion from '../checkbox-question/checkbox-question';
import InputQuestion from '../input-question/input-question';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

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
        this.nextQuestion = this.nextQuestion.bind(this);
        this.showResults = this.showResults.bind(this);
        this.data = data;
    }

    nextQuestion(data) {
        debugger;
        if (data.userAnswer === data.rightAnswer) {
            data.isRight = true;            
        }
        this.setState({
            questionIndex: this.state.questionIndex + 1
        });
    }

    showResults() {
        debugger;
        let j = 0;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].isRight) {
                j++;
            }
        }
        return j;
    }

    checkType () {
        if (data.type === 'input') {
            this.setState.inputType = true;
        } 
         else if (data.type === 'checkbox')  {
            this.setState.checkboxType = true;            
        } else if (data.type === 'radio')  {
            this.setState.radioType = true;            
        }
    }
    render() {
        console.log(data);
        return (
            <div>
                <Card>
                    <CardBody>
                    {
                        this.data[this.state.questionIndex] ? 
                        <CardTitle>
                            {this.state.questionIndex+1}/{this.data.length}
                            <Question question={this.data[this.state.questionIndex].question} />
                            {this.data[this.state.questionIndex].type === 'input' ? <InputQuestion item={this.data[this.state.questionIndex]} nextQuestion={this.nextQuestion}/> : null }
                            {this.data[this.state.questionIndex].type === 'checkbox' ? <CheckboxQuestion item={this.data[this.state.questionIndex]} nextQuestion={this.nextQuestion}/> : null }
                            {this.data[this.state.questionIndex].type === 'radio' ? <RadioQuestion item={this.data[this.state.questionIndex]} nextQuestion={this.nextQuestion}/> : null }
                        </CardTitle> : 
                        <CardText>Results are: {this.showResults()} out of {this.data.length}. 
                            {this.showResults() < 5 ? <h3>Try again :(</h3>: <h3>Congratulations!</h3>}
                            <h5>Analyze your results</h5>
                            {this.data.map((question, index)  => {
                                return  this.data[index].isRight ? 
                                <div key={index} className="green">{question.question}</div> : <div key={index} className="red">{question.question}</div>
                            })}
                        </CardText>
                    }
                    </CardBody>
                </Card>
          </div>
        );
    }
}

export default Test;