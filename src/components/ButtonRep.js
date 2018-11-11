import React, { Component } from 'react';

class ButtonRep extends Component {
    render() { 
        return (
            <button className='btn btn-success' onClick={this.props.onClick} >
                Repetition
            </button>
        );
    }
}
 
export default ButtonRep;