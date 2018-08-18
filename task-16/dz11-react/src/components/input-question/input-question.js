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
      this.setState( {
        answer: answer
      })
    }

    validateAnswer() {
      debugger;
      let data = this.props.item;
      console.log(data)
      data.userAnswer = this.state.answers;   
      data.userAnswer.push(this.state.answer)   
      this.props.validateAnswer(data);
    }
    render() {
      console.log(this.state.answers)
        return (
          <div>
            <input onChange={this.handleChange}/>
            <div>
            <Button color="primary"  onClick={this.validateAnswer}>Next</Button> 
            </div>           
          </div>
        );
      }
}

export default InputQuestion;