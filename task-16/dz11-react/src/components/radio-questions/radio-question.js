import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RadioQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
          answer: ''
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      debugger;
      console.log(event._targetInst.sibling.memoizedProps);
      if (event.target.checked) {
        let answer = event._targetInst.sibling.memoizedProps;
        this.setState( {
          answer: answer
        })
      }
    }

    nextQuestion() {
      let data = this.props.item;
      data.userAnswer = this.state.answer;
      this.props.nextQuestion(data);
    }
    render() {
      console.log(this.props.item);
        return (
          <div>
            {this.props.item.answers.map((item, index) => {
              return <label key={index} onChange={this.handleChange}><input name="radAnswer" type="radio"/>{item}</label>
            })}
            <Button  color="primary" onClick={this.nextQuestion}>Next</Button> 
            </div>
        );
      }
}

export default RadioQuestion;