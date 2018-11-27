import React, { Component } from 'react';

class Questions extends Component {
    render() { 
        return (
            <p>{this.props.query}</p>
        );
    }
}
 
export default Questions;