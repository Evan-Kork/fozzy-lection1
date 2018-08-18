import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CheckboxQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
          answer: ''
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      if (event.target.checked) {
        let answer = event._dispatchInstances.child.sibling.memoizedProps.children;
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
        return (
          <div>
            {this.props.item.answers.map((item, index) => {
              return <label key={index} onChange={this.handleChange}><input type="checkbox" /><div>{item}</div></label>
            })}
            <Button color="primary" onClick={this.nextQuestion}>Next</Button> 
            </div>
        );
      }
}

export default CheckboxQuestion;