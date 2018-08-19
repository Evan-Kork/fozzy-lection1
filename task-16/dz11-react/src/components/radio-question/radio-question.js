import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RadioQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: null,
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
        debugger;
        if (this.state.answer === null || this.state.answer === '') {
            this.setState({
                answer: ''
            })
            return;
        }
        let data = this.props.item;
        data.userAnswer = this.state.answers;
        data.userAnswer.push(this.state.answer)
        this.props.validateAnswer(data);
    }
    render() {
        console.log(this.state.answer)
        return (
            <div>
                <div>The answer must be only 1</div>
                {this.props.item.answers.map((item, index) => {
                    return <div key={index} className="option">
                        <label><input name="radAnswer" type="radio" value={item} onChange={this.handleChange}/>{item}</label>
                    </div>
                })}
                <Button  color="primary" onClick={this.validateAnswer}>Next</Button>
                {this.state.answer === ''  ? <div>You have to opt the answer</div> : null}
            </div>
        );
    }
}

export default RadioQuestion;