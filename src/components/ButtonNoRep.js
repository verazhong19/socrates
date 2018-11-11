import React, { Component } from 'react';

class ButtonNoRep extends Component {
    render() { 
        return (
            <button className="btn btn-primary" onClick={this.props.onClick} >
                No Repetition
            </button>
        );
    }
}
 
export default ButtonNoRep;