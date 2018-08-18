import React, { Component } from 'react';
import { Button } from 'reactstrap';


class InputQuestion extends Component {

    constructor(props) {
        super(props); 
        this.state = {
          answers: props.item.answers,
          answer: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        
        
    }

    handleChange(event) {
      let answer = event.target.value;
      this.setState( {
        answer: answer
      })
    }

    nextQuestion() {
      debugger;
      let data = this.props.item;
      console.log(data)
      data.userAnswer = this.state.answer;      
      this.props.nextQuestion(data);
    }
    render() {
      console.log(this.state.answers)
        return (
          <div>
            <input onChange={this.handleChange}/>
            <div>
            <Button color="primary"  onClick={this.nextQuestion}>Next</Button> 
            </div>           
          </div>
        );
      }
}

export default InputQuestion;