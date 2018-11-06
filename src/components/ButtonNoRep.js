import React, { Component } from 'react';

class ButtonNoRep extends Component {
    render() { 
        return (
            <button onClick={this.props.onClick} >
                No Repetition
            </button>
        );
    }
}
 
export default ButtonNoRep;