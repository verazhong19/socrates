import React, { Component } from 'react';

class ButtonRep extends Component {
    render() { 
        return (
            <button onClick={this.props.onClick} >
                Repetition
            </button>
        );
    }
}
 
export default ButtonRep;