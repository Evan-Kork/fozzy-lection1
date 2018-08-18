import React, { Component } from 'react';
import { Button } from 'reactstrap';

class InputQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            answer: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateAnswer = this.validateAnswer.bind(this);
    }

    handleChange(event) {
        let answer = event.target.value;
        answer.toLowerCase();
        this.setState( {
            answer: answer
        })
    }

    validateAnswer() {
        let data = this.props.item;
        data.userAnswer = this.state.answers;
        data.userAnswer.push(this.state.answer)
        this.props.validateAnswer(data);
    }
    render() {
        return (
            <div>
                <div>Write your answer</div>
                <input onChange={this.handleChange}/>
                <div>
                    <Button color="primary"  onClick={this.validateAnswer}>Next</Button>
                </div>
            </div>
        );
    }
}

export default InputQuestion;