import React, { Component } from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.question}
            </div>
        );
    }
}

export default Question;