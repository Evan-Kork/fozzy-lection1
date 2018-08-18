import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RadioQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            answers: []
        }
        this.validateAnswer = this.validateAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let answer = event.target.value;
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
                <div>The answer must be only 1</div>
                {this.props.item.answers.map((item, index) => {
                    return <div key={index} className="option">
                        <label><input name="radAnswer" type="radio" value={item} onChange={this.handleChange}/>{item}</label>
                    </div>
                })}
                <Button  color="primary" onClick={this.validateAnswer}>Next</Button>
            </div>
        );
    }
}

export default RadioQuestion;