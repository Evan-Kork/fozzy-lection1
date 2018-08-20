import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CheckboxQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            answer: null
        }
        this.validateAnswer = this.validateAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        let answer = event.target.value;
        this.setState({
            answer: answer
        })
        let answers = this.state.answers;
        answers.push(answer)
        this.setState( {
            answers: answers
        })
    };

    validateAnswer() {
        if (this.state.answer === null || this.state.answer === '') {
            this.setState({
                answer: ''
            })
            return;
        }
        let data = this.props.item;
        data.userAnswer = this.state.answers;
        this.props.validateAnswer(data);
    };

    render() {
        return (
            <div>
                <div>The answers may be more than 1</div>
                {this.props.item.answers.map((item, index) => {
                    return <div key={index} className="option">
                        <label>
                            <input type="checkbox" onChange={this.handleChange} value={item}/>
                            <span>{item}</span>
                        </label>
                    </div>})}
                <Button color="primary" onClick={this.validateAnswer}>Next</Button>
                {this.state.answer === ''  ? <div>You have to opt the answer</div> : null}
            </div>
        );
    }
};

export default CheckboxQuestion;