import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Results extends Component {
  
      constructor(props) {
          super(props); 
          this.state = {
            generalData: this.props.generalData
          }
          this.showResults = this.showResults.bind(this); 
      }
  
      showResults() {
        let j = 0;
        for (let i = 0; i < this.state.generalData.length; i++) {
            if (this.state.generalData[i].isRight) {
                j++;
            }
        }
        return j;
    }
      render() {
          return (
            <div>
              Results are: {this.showResults()} out of {this.state.generalData.length}. 
              {this.showResults() < 5 ? <h3>Try again :(</h3>: <h3>Congratulations!</h3>}
              <h5>Analyze your results</h5>
              <div className="text-left">
              { this.state.generalData.map((question, index)  => {
                  return   this.state.generalData[index].isRight ? 
                  <div key={index} className="green">{question.question}</div> : <div key={index} className="red">{question.question} <span className="green">Right answer: {question.rightAnswer}</span></div>
              })}
              </div>         
            </div>
          );
        }
  }
  
  export default Results;